import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SEO from "../../components/SEO"; // Adjust the import path based on your structure
import BikeTrip from "./bike-trip";
import LooseLeaves from "./loose-leaves";
import TravelDiaries from "./travel-diaries/index.js";

const WritingSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-4">
      {title}
    </h2>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const WritingItem = ({ title, to, isPdf = false, date }) => (
  <li className="flex items-baseline justify-between">
    {isPdf ? (
      <a
        href={to}
        className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : (
      <Link
        to={to}
        className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
      >
        {title}
      </Link>
    )}
    <span className="text-sm text-gray-500 ml-4">[{date}]</span>
  </li>
);

function WritingHome() {
  return (
    <>
      <SEO
        title="Writing"
        description="Justin Hadad's writings on economics, market design, and mechanism design, alongside creative works including travel diaries and personal essays. Collection spans academic papers, creative non-fiction, and poetry."
        pathname="/writing"
        keywords={[
          "economics writing",
          "market design",
          "mechanism design",
          "travel writing",
          "creative writing",
          "Justin Hadad",
          "academic papers",
          "travel diaries",
          "personal essays",
          "Oxford economics",
        ]}
      />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <WritingSection title="economics">
          <WritingItem
            title="mechanism design (short)"
            to="/pdfs/mech_design.pdf"
            isPdf={true}
            date="7/2024"
          />
          <WritingItem
            title="market design (long)"
            to="/pdfs/market_design.pdf"
            isPdf={true}
            date="8/2023"
          />
          <WritingItem
            title="some tools for simulating deferred acceptance"
            to="/pdfs/deferred_acceptance.pdf"
            isPdf={true}
            date="11/2022"
          />
        </WritingSection>

        <WritingSection title="creative collections">
          <WritingItem
            title="travel diaries"
            to="/writing/travel-diaries"
            date="10/2021-2/2022"
          />
          <WritingItem title="biking" to="/writing/bike-trip" date="6-7/2021" />
        </WritingSection>

        <WritingSection title="loose leaves">
          <WritingItem
            title="changing"
            to="/writing/loose-leaves/changing"
            date="5/2023"
          />
          <WritingItem
            title="ashes to fall in love with"
            to="/pdfs/cellardoorF2020.pdf#page=12"
            isPdf={true}
            date="11/2019"
          />
          <WritingItem
            title="the life and loves of a she-devil: chapter 36"
            to="/writing/loose-leaves/she-devil"
            date="4/2018"
          />
          {/* <WritingItem 
          title="breakfast ended" 
          to="/writing/loose-leaves/breakfast-ended" 
          date="3/2018"
        /> */}
        </WritingSection>
      </div>
    </>
  );
}

export default function Writing() {
  return (
    <Routes>
      <Route index element={<WritingHome />} />
      <Route path="bike-trip/*" element={<BikeTrip />} />
      <Route path="loose-leaves/*" element={<LooseLeaves />} />
      <Route path="travel-diaries/*" element={<TravelDiaries />} />
    </Routes>
  );
}
