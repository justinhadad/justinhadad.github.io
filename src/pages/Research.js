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
  isOpen,
  onClick,
}) => {
  // Helper function to determine if the link is external or a PDF
  const isExternalLink = link?.startsWith("http");
  const linkPath = isExternalLink ? link : `/pdfs/${link}`;

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-6 cursor-pointer" onClick={onClick}>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">
              {authors} ({year}). {status}.
            </p>
          </div>
          <div className="ml-4 flex items-center space-x-3">
            {link && (
              <a
                href={linkPath}
                className="text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                [paper]
              </a>
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
        </div>
      </div>

      {isOpen && (
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

  const papers = [
    {
      id: 1,
      title: "Matching with costly information acquisition",
      authors: "Hadad, J.",
      year: "2024",
      status: "Working Paper",
      link: "matching_with_costly_information_acquisition.pdf",
      abstracts: [
        {
          title: "abstract",
          content:
            "We study strategic behavior in two-sided matching markets where preferences are aligned but imperfectly known, and where workers pay acquisition costs to learn their utilities from matching with different firms. When workers finish strategically obtaining match utilities, a centralized institution creates the matching by pairing successive worker-firm pairs with the highest realized surplus. We identify the class of information-acquisition mechanisms that implement the ex-post stable and Pareto-efficient matching, and the mechanism within the class which minimizes expected aggregate acquisition cost. Our main result proves that the number of acquisitions is minimized in expectation if the agents with the highest commonly-known values find their stable matches as early as possible.",
        },
      ],
    },
    {
      id: 2,
      title:
        "On the analytical bounds for average rank in one-to-one two-sided matching markets",
      authors: "Hadad, J.",
      year: "2023",
      status: "Working Paper",
      link: "on_analytical_bounds.pdf",
      abstracts: [
        {
          title: "abstract",
          content:
            "I show that the current average rank bounds in the one-to-one two-sided matching literature are loose in the limit, enough so that known comparative static results cannot be recovered. I construct a motivating problem to demonstrate this looseness, modelled after the result that there is some amount of increased competition that agents prefer to choosing their optimal mechanism. These results are tied to the literature via discussion about the size of the (asymptotic) core, as well as on the effects of competition.",
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
          {" "}
          {/* matched About page's mb-6 */}
          <p className="mb-2">
            My research focuses on how we can best design markets, defined as
            "settings where some transactions occur." I pay particular attention
            to theoretical problems in humanitarian contexts.
          </p>
        </div>
        <ResearchHeader title="papers available">
          {papers.map((paper) => (
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
        {/* <ResearchHeader title = "Works in progress">


            </ResearchHeader> */}
      </div>
    </>
  );
};

export default Research; // Add this line at the bottom
