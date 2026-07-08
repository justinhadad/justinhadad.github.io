import React, { useState } from "react"; // Add this line at the top
import SEO from "../components/SEO"; // Add this import

const ResearchHeader = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-6">
      {title}
    </h2>
    {children}
  </div>
);

const ResearchCard = ({
  title,
  authors,
  year,
  status,
  link,
  abstracts,
  venues = [],
  showYear = true,
  isOpen,
  onClick,
}) => {
  // Helper function to determine if the link is external or a PDF
  const isExternalLink = link?.startsWith("http");
  const linkPath = isExternalLink ? link : `/pdfs/${link}`;

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-6 cursor-pointer" onClick={onClick}>
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-2 items-start">
  <div className="min-w-0">
    <h3 className="!text-[14px] sm:!text-[13px] lg:!text-base font-medium text-gray-900 mb-2 leading-tight break-words">
      {title}
    </h3>

    <p className="text-gray-600 text-sm">
      {authors}
      {showYear && year ? ` (${year})` : ""}
      {status ? `. ${status}.` : showYear && year ? "." : ""}
    </p>
  </div>

  <div className="flex items-center gap-3 shrink-0 sm:justify-self-end">
    {link ? (
      <a
        href={linkPath}
        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm whitespace-nowrap"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        [paper]
      </a>
    ) : (
      <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
        [draft upon request]
      </span>
    )}

    <svg
      className={`w-5 h-5 transform transition-transform ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

  {venues.length > 0 && (
    <p className="sm:col-span-2 !text-[10px] sm:!text-xs text-gray-500 mt-1.5 leading-snug whitespace-normal break-normal">
      <span className="!text-[10px] sm:!text-xs font-normal">
        Presentations:
      </span>{" "}
      {venues.join("; ")}
    </p>
  )}
</div>
</div>

      {isOpen && abstracts.length > 0 && (
        <div className="px-6 pb-6 pt-2">
          <div className="border-t border-gray-100 pt-4">
            {abstracts.map((abstract, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  {abstract.title}
                </h4>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {abstract.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Research = () => {
  const [openPaper, setOpenPaper] = useState(null);

  // const worksInProgress = [
    
  // ];

  const workingPapers = [
    {
      id: 7,
      title: "Balancing welfare and distributional goals in school choice",
      authors: "with Irene Lo & Ivan-Aleksandar Mavrov",
      year: "",
      link: "",
      venues: [
        "EC 2026",
        "MATCH-UP 2026",
      ],
      abstracts: [
        {
          title: "abstract",
          content:
            "We study a school choice problem in which a school district jointly values student welfare and diversity across its schools, trading off the two objectives rather than treating either as a constraint. In practice, the tradeoff can be large and is a function of the preferences and priorities in the market. We take an axiomatic approach: we provide an ordered menu of matchings which are student-optimal for a given level of diversity and which are within-type fair, where no student envies another of her same type. We additionally identify a lattice of matchings that are both within- and across-type fair, where no student envies another student (regardless of type) who does not improve diversity at the school. Both collections of matchings provide a tradeoff between welfare and diversity: matchings later in the ordering or higher in the lattice improve diversity at the expense of welfare. To find them, we introduce a new class of mechanisms, deferred acceptance with waiting rooms. Finally, we show that existing approaches to diversity, such as hard and soft reserve policies, frequently correspond to extreme points of the welfare–diversity tradeoff, and characterize the intermediate allocations. Taken together, our results provide a framework for navigating the diversity-welfare tradeoff in practice.",
        },
      ],
    },
    {
      id: 4,
      title: "Screening for usage",
      authors: "with Kyle Woodward",
      year: "2026",
      link: "hadad+woodward-screening-2026.pdf",
      venues: [
        "Conference on Mechanism and Institution Design 2026",
      ],
      abstracts: [
        {
          title: "abstract",
          content:
            "In systems with significant wealth inequality, charging for a resource distorts efficient allocation across wealth types. We study a repeated allocation problem where agents vary in both their marginal value for money and their usage probability, and the principal wants to maximize resource usage. In each period agents choose whether or not to make reservations, but may randomly cancel an allocated reservation. The principal may screen on usage probabilities using two empirically-relevant instruments: monetary penalties and eligibility restrictions. We show that the optimal regulation has a simple structure: the principal never offers a refund for cancellation, and access restrictions are essentially deterministic. When agents are patient and inequality is high, eligibility-based penalties become an efficient way to screen on usage propensity without amplifying wealth-based exclusion. Conversely, when agents are impatient or inequality is mild, monetary penalties perform well in spite of the inequality they engender.",
        },
      ],
    },
    {
      id: 5,
      title: "What makes a matching market congested?",
      authors: "with En Hua Hu",
      year: "2026",
      link: "hadad+hu-congestion-2026.pdf",
      venues: [
        "EC 2026",
        "Conference on Mechanism and Institution Design 2026",
      ],
      abstracts: [
        {
          title: "abstract",
          content:
            "We study a decentralized matching market where each applicant sends a fixed number of applications and then firms make one offer. Our game emulates matching markets under time constraints: agents who are unmatched after the round remain unmatched. Congestion arises from two basic market failures: some firms do not receive applications (an issue of coverage), and some applicants receive multiple offers (an issue of collisions). We study how the market size, degree of preference alignment, and number of applications affect congestion. In contrast to the literature, aligned preferences and screening worsen congestion. Furthermore, additional applications do not always alleviate congestion, and optimal quotas are typically small.",
        },
      ],
    },
    {
      id: 1,
      title: "Matching with costly information acquisition",
      authors: "",
      year: "",
      status: "",
      link: "",
      abstracts: [
        {
          title: "abstract",
          content:
            "We study strategic behavior in two-sided matching markets where preferences are aligned but imperfectly known, and where workers pay acquisition costs to learn their utilities from matching with different firms. When workers finish strategically obtaining match utilities, a centralized institution creates the matching by pairing successive worker-firm pairs with the highest realized surplus. We identify the class of information-acquisition mechanisms that implement the ex-post stable and Pareto-efficient matching, and the mechanism within the class which minimizes expected aggregate acquisition cost. Our main result proves that the number of acquisitions is minimized in expectation if the agents with the highest commonly-known values find their stable matches as early as possible.",
        },
       ],
      },
    // {
    //   id: 2,
    //   title:
    //     "On the analytical bounds for average rank in one-to-one two-sided matching markets",
    //   authors: "Hadad, J.",
    //   year: "2023",
    //   status: "Working Paper",
    //   link: "on_analytical_bounds.pdf",
    //   abstracts: [
    //     {
    //       title: "abstract",
    //       content:
    //         "I show that the current average rank bounds in the one-to-one two-sided matching literature are loose in the limit, enough so that known comparative static results cannot be recovered. I construct a motivating problem to demonstrate this looseness, modelled after the result that there is some amount of increased competition that agents prefer to choosing their optimal mechanism. These results are tied to the literature via discussion about the size of the (asymptotic) core, as well as on the effects of competition.",
    //     },
    //   ],
    // },
  ];

  const publications = [
    {
      id: 6,
      title: "Sustainable by design: digital health business models for equitable global health impact in LMICs",
      authors: "Irihamye, E., Hadad, J., Ali, N., Holthof, B., Wafula, F., Paton, C., English, M., Nagraj, S.",
      year: "2025",
      status: "Mayo Clinic Proceedings: Digital Health",
      link: "https://www.mcpdigitalhealth.org/article/S2949-7612(25)00068-9/fulltext",
      abstracts: [
        {
          title: "abstract",
          content:
            "This study explores challenges and potential strategies related to sustaining digital health business models and markets in low-and-low-middle income countries (LMICs) using a critical interpretive synthesis (CIS) approach. We extracted 21 articles from a database search that yielded over 1,300 hits and used insights from seven expert reviewers with experience operating or funding digital health companies in LMICs. Findings reveal four key challenges: (1) internal challenges related to managing value creation for complex stakeholder networks and external challenges related to (2) infrastructure, (3) financing, and (4) regulation. Entrepreneurs must address these through iterative business strategies, but broader market-shaping interventions remain essential. Such interventions could include facilitating strategic partnerships, fit-for-purpose regulation, enhancing public procurement, and innovative financing instruments. Health-systems can tailor interventions around their unique contexts by prioritising technologies, recruiting local market participants, analysing shared barriers in the business environment, focusing on feasible interventions and iterating to sustain a competitive environment.",
        },
      ],
    },
    {
      id: 3,
      title: "Improving refugee resettlement: insights from market design",
      authors: "Hadad, J., & Teytelboym, A.",
      year: "2022",
      status: "Oxford Review of Economic Policy",
      link: "https://academic.oup.com/oxrep/article/38/3/434/6701685",
      abstracts: [
        {
          title: "abstract",
          content:
            "The current refugee resettlement system is inefficient because there are too few resettlement places and because refugees are resettled to locations where they might not thrive. We outline how ideas from market design can lead to better resettlement practices. In particular, we discuss how market design can incentivize participation of countries in resettlement and improve the matching of refugees at international and local levels; some of these insights have already been put into practice. Finally, we highlight several further applications of market design in refugee resettlement, including cardinal preference submission and matching with transfers.",
        },
      ],
    },

  ];

  return (
    <>
      <SEO
        title="Research"
        description="Research in market design and economic theory by Justin Hadad, focusing on matching markets, refugee resettlement, and information acquisition in market design. PhD candidate at Oxford University studying theoretical problems in humanitarian contexts."
        pathname="/research"
        keywords={[
          "market design",
          "economic theory",
          "matching markets",
          "refugee resettlement",
          "information acquisition",
          "humanitarian economics",
          "Justin Hadad",
          "Oxford Economics",
          "economic research",
          "matching theory",
        ]}
        isPublication={true} // Since this is a research page
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <p className="mb-2">
            My research is in <em>market design</em>, broadly construed as the study of how rules and institutions structure economic interaction. I typically study how welfare, fairness, and equity objectives can be achieved in practice. 
            </p> 

              <p className="mb-2">
            Some works in progress (which are not listed below) pertain to dynamic bargaining, dynamic matching, and political economy.  
            </p> 

        </div>

        {/* <ResearchHeader title="Works in Progress">
          {worksInProgress.map((paper) => (
            <ResearchCard
              key={paper.id}
              {...paper}
              isOpen={openPaper === paper.id}
              onClick={() =>
                setOpenPaper(openPaper === paper.id ? null : paper.id)
              }
            />
          ))}
        </ResearchHeader> */}

        <ResearchHeader title="Working Papers">
          {workingPapers.map((paper) => (
            <ResearchCard
  key={paper.id}
  {...paper}
  showYear={false}
  isOpen={openPaper === paper.id}
  onClick={() =>
    setOpenPaper(openPaper === paper.id ? null : paper.id)
  }
/>
          ))}
        </ResearchHeader>

        <ResearchHeader title="Publications">
          {publications.map((paper) => (
            <ResearchCard
              key={paper.id}
              {...paper}
              isOpen={openPaper === paper.id}
              onClick={() =>
                setOpenPaper(openPaper === paper.id ? null : paper.id)
              }
            />
          ))}
        </ResearchHeader>
      </div>
    </>
  );
};

export default Research; // Add this line at the bottom
