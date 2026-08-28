import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = "G-B60ERD1VQ4";
const SCROLL_THRESHOLDS = [25, 50, 75, 90];
const READING_TIME_MILESTONES = [30, 60, 180, 300];
const SAFE_CAMPAIGN_PARAMETERS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
]);

const sendEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    ...parameters,
    send_to: MEASUREMENT_ID,
  });
};

const cleanText = (value) =>
  value?.replace(/\s+/g, " ").trim().slice(0, 100) || undefined;

const safeUrl = (value) => {
  if (!value) return undefined;

  try {
    const url = new URL(value, window.location.origin);
    return `${url.origin}${url.pathname}`;
  } catch {
    return undefined;
  }
};

const getPageDetails = (location) => {
  const pathname = location.pathname || "/";
  const safeSearch = new URLSearchParams();
  const currentSearch = new URLSearchParams(location.search);

  currentSearch.forEach((value, key) => {
    if (SAFE_CAMPAIGN_PARAMETERS.has(key)) safeSearch.set(key, value);
  });

  const search = safeSearch.toString();
  const pagePath = search ? `${pathname}?${search}` : pathname;

  return {
    pagePath,
    pageLocation: `${window.location.origin}${pagePath}`,
  };
};

const getLinkDetails = (anchor) => {
  const rawHref = anchor.getAttribute("href") || "";

  if (rawHref.startsWith("mailto:")) {
    return { linkType: "email" };
  }

  if (rawHref.startsWith("tel:")) {
    return { linkType: "phone" };
  }

  try {
    const url = new URL(anchor.href, window.location.href);
    const fileName = url.pathname.split("/").pop() || undefined;
    const fileExtension = fileName?.includes(".")
      ? fileName.split(".").pop().toLowerCase()
      : undefined;
    const isDownload =
      anchor.hasAttribute("download") ||
      /\.(pdf|docx?|xlsx?|csv|zip|mov|mp4|mp3)$/i.test(url.pathname);

    if (isDownload) {
      return {
        linkType: "download",
        linkDestination: url.pathname,
        fileName,
        fileExtension,
      };
    }

    return {
      linkType:
        url.origin === window.location.origin ? "internal" : "outbound",
      linkDestination: `${url.origin}${url.pathname}`,
    };
  } catch {
    return { linkType: "other" };
  }
};

const GoogleAnalytics = () => {
  const location = useLocation();
  const currentPageRef = useRef("/");
  const previousPageRef = useRef(safeUrl(document.referrer));
  const lastPageViewRef = useRef();

  const { pagePath, pageLocation } = getPageDetails(location);
  currentPageRef.current = pagePath;

  useEffect(() => {
    if (lastPageViewRef.current === pagePath) return undefined;

    // Let react-helmet update the document title before recording the view.
    const timer = window.setTimeout(() => {
      sendEvent("page_view", {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: document.title || pagePath,
        ...(previousPageRef.current
          ? { page_referrer: previousPageRef.current }
          : {}),
      });

      previousPageRef.current = pageLocation;
      lastPageViewRef.current = pagePath;
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pageLocation, pagePath]);

  useEffect(() => {
    const handleLinkClick = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;

      const details = getLinkDetails(anchor);
      sendEvent("site_link_click", {
        page_path: currentPageRef.current,
        link_type: details.linkType,
        ...(details.linkDestination
          ? { link_destination: details.linkDestination }
          : {}),
        ...(details.fileName ? { file_name: details.fileName } : {}),
        ...(details.fileExtension
          ? { file_extension: details.fileExtension }
          : {}),
        ...(details.linkType !== "email" && details.linkType !== "phone"
          ? { link_text: cleanText(anchor.textContent) }
          : {}),
      });
    };

    const handleMediaEvent = (event) => {
      const media = event.target;
      if (!(media instanceof HTMLMediaElement)) return;

      const duration = Number.isFinite(media.duration) ? media.duration : 0;
      const progress = duration
        ? Math.round((media.currentTime / duration) * 100)
        : 0;

      sendEvent("media_engagement", {
        page_path: currentPageRef.current,
        media_action: event.type,
        media_name: safeUrl(media.currentSrc || media.src)?.split("/").pop(),
        media_progress: progress,
      });
    };

    document.addEventListener("click", handleLinkClick, true);
    document.addEventListener("play", handleMediaEvent, true);
    document.addEventListener("pause", handleMediaEvent, true);
    document.addEventListener("ended", handleMediaEvent, true);

    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      document.removeEventListener("play", handleMediaEvent, true);
      document.removeEventListener("pause", handleMediaEvent, true);
      document.removeEventListener("ended", handleMediaEvent, true);
    };
  }, []);

  useEffect(() => {
    const reportedScrollDepths = new Set();
    const reportedReadingTimes = new Set();
    let ticking = false;
    let visibleSeconds = 0;

    const measureScrollDepth = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const percentScrolled = Math.min(
        100,
        Math.round((window.scrollY / scrollableHeight) * 100)
      );

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (
          percentScrolled >= threshold &&
          !reportedScrollDepths.has(threshold)
        ) {
          reportedScrollDepths.add(threshold);
          sendEvent("scroll_depth", {
            page_path: pagePath,
            percent_scrolled: threshold,
          });
        }
      });
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        measureScrollDepth();
        ticking = false;
      });
    };

    const readingTimer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      visibleSeconds += 1;
      READING_TIME_MILESTONES.forEach((milestone) => {
        if (
          visibleSeconds >= milestone &&
          !reportedReadingTimes.has(milestone)
        ) {
          reportedReadingTimes.add(milestone);
          sendEvent("reading_time", {
            page_path: pagePath,
            seconds_engaged: milestone,
          });
        }
      });
    }, 1000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    measureScrollDepth();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearInterval(readingTimer);
    };
  }, [pagePath]);

  return null;
};

export default GoogleAnalytics;
