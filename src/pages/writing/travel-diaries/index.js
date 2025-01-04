// src/pages/writing/travel-diaries/index.js
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEO from "../../../components/SEO"; // Adjust path as needed

// Import all diary entry components
import ModernEmotions from "./modern-emotions";
import AboutLondon from "./about-london";
import HowItTicklesTheTrees from "./tickles";
import Barriers from "./barriers";
import Sevilla from "./sevilla";
import GoodbyePeople from "./goodbye-people";
import Uncles from "./uncles";
import BeautifulHomes from "./beautiful-homes";
import ThisOneBar from "./this-one-bar";
import ExtraShot from "./extra-shot";
import LookLikeMe from "./look-like-me";
import GoodbyePeople2 from "./goodbye-people-2";
import MakingTheMost from "./making-the-most";
import GoodbyePeople3 from "./goodbye-people-3";
import Swimming from "./swimming";
import Lion from "./lion";
import Spaghetti from "./spaghetti";
import LetterToZurich from "./letter-to-zurich";

const DiaryEntry = ({ title, location, to }) => (
  <li className="flex items-baseline justify-between">
    <Link
      to={`/writing/travel-diaries/${to}`}
      className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
    >
      {title}
    </Link>
    <span className="text-sm text-gray-500 ml-4">[{location}]</span>
  </li>
);

const LocationGroup = ({ children }) => <div className="mb-6">{children}</div>;

function TravelDiariesList() {
  return (
    <>
      <SEO
        title="European Travel Diaries"
        description="Personal travel chronicles across Europe while awaiting research position in Zurich. A raw, honest account of solo backpacking through London, Madrid, Prague, Munich, Paris, Istanbul, and more, capturing both the beauty and challenges of extended solo travel."
        pathname="/writing/travel-diaries"
        keywords={[
          "European travel diary",
          "solo backpacking Europe",
          "travel writing",
          "Zurich research",
          "London travel stories",
          "European cities",
          "solo travel journal",
          "backpacking journal",
          "travel reflections",
          "Switzerland travel",
          "academic abroad",
          "personal travel essays",
        ]}
      />
      <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          travel diaries
        </h1>

        <div className="mb-8">
          <p className="mb-4">
            I was a guest researcher at the University of Zurich from November
            2021 to February 2022. I had expected to begin work in October, but
            my permit had been delayed (COVID, governments) and I still had a
            flight to London. So I decided to make the trip northeastward anyway
            and figure it out later.
          </p>
          <p className="mb-4">
            In the month-plus it took the government to sort out my situation, I
            backpacked around rather aimlessly, and eventually made my way into
            Switzerland. Below are my stories, grouped somewhat geographically
            and ordered chronologically.
          </p>
          <p className="mb-4">
            For the important bit that will likely bleed through: I was having a
            horrible time. I am incredibly grateful I was afforded the chance to
            do this (this was all made possible by undergrad scholarship
            funding, whose effect was delayed till after my graduation because
            of COVID) and I, <em>ex post</em>, am incredibly lucky to have
            learned so much about myself in a short period of time. But please
            keep in mind that throughout the below I was suffering. Doing things
            that might make one seem happy did not make me happy.
          </p>
        </div>

        <hr className="my-6" />

        <div className="space-y-6">
          <LocationGroup>
            <DiaryEntry
              title="modern emotions"
              location="London, England"
              to="modern-emotions"
            />
            <DiaryEntry
              title="about london"
              location="London, England"
              to="about-london"
            />
            <DiaryEntry
              title="how it tickles the trees"
              location="London, England"
              to="tickles"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="barriers"
              location="Madrid, Spain"
              to="barriers"
            />
            <DiaryEntry
              title="sevilla"
              location="Sevilla, Spain"
              to="sevilla"
            />
            <DiaryEntry
              title="goodbye, people"
              location="Lisbon, Portugal"
              to="goodbye-people"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="uncles"
              location="Prague, Czech Republic"
              to="uncles"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="beautiful homes"
              location="Munich, Germany"
              to="beautiful-homes"
            />
            <DiaryEntry
              title="this one bar"
              location="Kempten, Germany"
              to="this-one-bar"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="extra shot"
              location="Paris, France"
              to="extra-shot"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="people who look like me"
              location="Istanbul, Turkey"
              to="look-like-me"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="goodbye people ?!"
              location="Budapest, Hungary"
              to="goodbye-people-2"
            />
            <DiaryEntry
              title="making the most of things"
              location="Bratislava, Slovakia"
              to="making-the-most"
            />
            <DiaryEntry
              title="goodbye people ?!?!?!"
              location="Vienna, Austria"
              to="goodbye-people-3"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="swimming"
              location="Lausanne, Switzerland"
              to="swimming"
            />
            <DiaryEntry
              title="the saddest lion"
              location="Lucerne, Switzerland"
              to="lion"
            />
            <DiaryEntry
              title="spaghetti"
              location="Zermatt, Switzerland"
              to="spaghetti"
            />
          </LocationGroup>

          <LocationGroup>
            <DiaryEntry
              title="a letter to zurich"
              location="Zurich, Switzerland"
              to="letter-to-zurich"
            />
          </LocationGroup>
        </div>
      </div>
    </>
  );
}

export default function TravelDiaries() {
  return (
    <Routes>
      <Route index element={<TravelDiariesList />} />
      <Route path="modern-emotions" element={<ModernEmotions />} />
      <Route path="about-london" element={<AboutLondon />} />
      <Route path="tickles" element={<HowItTicklesTheTrees />} />
      <Route path="barriers" element={<Barriers />} />
      <Route path="sevilla" element={<Sevilla />} />
      <Route path="goodbye-people" element={<GoodbyePeople />} />
      <Route path="uncles" element={<Uncles />} />
      <Route path="beautiful-homes" element={<BeautifulHomes />} />
      <Route path="this-one-bar" element={<ThisOneBar />} />
      <Route path="extra-shot" element={<ExtraShot />} />
      <Route path="look-like-me" element={<LookLikeMe />} />
      <Route path="goodbye-people-2" element={<GoodbyePeople2 />} />
      <Route path="making-the-most" element={<MakingTheMost />} />
      <Route path="goodbye-people-3" element={<GoodbyePeople3 />} />
      <Route path="swimming" element={<Swimming />} />
      <Route path="lion" element={<Lion />} />
      <Route path="spaghetti" element={<Spaghetti />} />
      <Route path="letter-to-zurich" element={<LetterToZurich />} />
    </Routes>
  );
}
