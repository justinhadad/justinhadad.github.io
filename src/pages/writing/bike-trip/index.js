import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SEO from "../../../components/SEO"; // Adjust path as needed

// Import all blog entries
import Day1 from "./day1";
import Day4 from "./day4";
import Day11 from "./day11";
import Day15 from "./day15";
import Day22 from "./day22";
import Day29 from "./day29";
import Day39 from "./day39";
import Day43 from "./day43";
import Terminus from "./terminus";
import Restaurants from "./restaurants";
import Coffee from "./coffee";
import Brews from "./brews";
import Varia from "./varia";

const BlogEntry = ({ title, to }) => (
  <li className="flex items-baseline">
    <Link
      to={`/writing/bike-trip/${to}`}
      className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
    >
      {title}
    </Link>
  </li>
);

const GuideEntry = ({ title, to }) => (
  <li className="flex items-baseline">
    <Link
      to={`/writing/bike-trip/${to}`}
      className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
    >
      {title}
    </Link>
  </li>
);

function BikeList() {
  return (
    <>
      <SEO
        title="Biking the East Coast Greenway"
        description="A 45-day journey cycling from Chapel Hill, NC to Manhattan, NY along the East Coast Greenway. Personal blog featuring travel stories, restaurant reviews, coffee shops, and breweries discovered while biking up the East Coast of the United States."
        pathname="/writing/bike-trip"
        keywords={[
          "East Coast Greenway",
          "bike trip blog",
          "cycling East Coast",
          "Chapel Hill to Manhattan",
          "East Coast cycling route",
          "bicycle touring",
          "East Coast bike trail",
          "cycling journey",
          "bike travel blog",
          "East Coast restaurants",
          "bike-friendly cafes",
          "East Coast breweries",
        ]}
      />
      <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">biking</h1>

        <div className="mb-8">
          <p className="mb-4">
            For 45 days in summer 2021, I worked as a content creator,
            photographer, restaurant reviewer, and occasional beer taster for
            the{" "}
            <a
              href="https://www.greenway.org"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              East Coast Greenway
            </a>
            . I helped advertise the trail while cycling (and sometimes driving)
            along it, reaching all the way to Manhattan, NY from Chapel Hill,
            NC.
          </p>
          <p className="mb-4">
            I took it upon myself to write creatively along the way. My stories
            and reflections, disjoint and ungainly, are in the{" "}
            <strong>blog</strong> section. And as I was privileged to try some
            amazing restaurants, coffee shops, and breweries en route, I
            endeavored to create the self-explanatory{" "}
            <strong>justin's michelin guide to the east coast.</strong>
          </p>
          <p>Coolest job ever.</p>
        </div>

        <hr className="my-6" />

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">blog</h2>
          <ul className="space-y-3">
            <BlogEntry title="Day 1: Turn It Down" to="day1" />
            <BlogEntry title="Day 4: Dee and the Runners" to="day4" />
            <BlogEntry title="Day 11: Sherlock Off-Screen" to="day11" />
            <BlogEntry title="Day 15: Joy at Oizys" to="day15" />
            <BlogEntry title="Day 22: The Best Meditations" to="day22" />
            <BlogEntry title="Day 29: Origin Stories" to="day29" />
            <BlogEntry
              title="Day 39: I'm Wide Awake, It's New York"
              to="day39"
            />
            <BlogEntry title="Day 43: Brightness" to="day43" />
            <BlogEntry title="Terminus: Call the Help Number" to="terminus" />
          </ul>
        </div>

        <hr className="my-6" />

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            justin's michelin guide to the east coast
          </h2>
          <ul className="space-y-3">
            <GuideEntry title="restaurants" to="restaurants" />
            <GuideEntry title="coffee" to="coffee" />
            <GuideEntry title="brews" to="brews" />
            <GuideEntry title="varia" to="varia" />
          </ul>
        </div>

        <hr className="my-6" />

        <div>
          <p className="mb-4">
            You can find and save the recommended locations from the map below.
            Click{" "}
            <a
              href="https://www.google.com/maps/d/u/0/viewer?mid=1ZWDtEu0t-KBPzwj0tYH3eVmxQkBsiM0R"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to view the map in your browser.
          </p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1ZWDtEu0t-KBPzwj0tYH3eVmxQkBsiM0R"
            width="100%"
            height="480"
            title="Bike Trip Map"
            className="border-0"
          />
        </div>
      </div>
    </>
  );
}

export default function BikeTrip() {
  return (
    <Routes>
      <Route index element={<BikeList />} />
      <Route path="day1" element={<Day1 />} />
      <Route path="day4" element={<Day4 />} />
      <Route path="day11" element={<Day11 />} />
      <Route path="day15" element={<Day15 />} />
      <Route path="day22" element={<Day22 />} />
      <Route path="day29" element={<Day29 />} />
      <Route path="day39" element={<Day39 />} />
      <Route path="day43" element={<Day43 />} />
      <Route path="terminus" element={<Terminus />} />
      <Route path="restaurants" element={<Restaurants />} />
      <Route path="coffee" element={<Coffee />} />
      <Route path="brews" element={<Brews />} />
      <Route path="varia" element={<Varia />} />
    </Routes>
  );
}
