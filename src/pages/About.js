import React from "react";
import Footnote from "../components/Footnote";
import gradPhoto from "../assets/grad.jpg"; // add this import
import SEO from "../components/SEO"; // Add this import

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Justin Hadad is a PhD candidate in economics at the University of Oxford, Rhodes Scholar, and researcher in microeconomic theory. Graduate of UNC Chapel Hill with degrees in economics and applied physics."
        pathname="/about"
        keywords={[
          "Justin Hadad",
          "Oxford Economics",
          "PhD Economics",
          "Rhodes Scholar",
          "microeconomic theory",
          "UNC Chapel Hill",
          "economics research",
          "applied physics",
          "Oxford Varsity basketball",
          "social justice",
        ]}
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <p className="mb-2">
            I'm a PhD candidate
            <Footnote
              id="1"
              content="The Oxford term for a PhD is a 'DPhil.'"
            />{" "}
            in economics at the University of Oxford. My research uses
            microeconomic theory to address social and political problems.
          </p>

          <p className="mb-2">
            I received my MPhil in economics from Oxford in 2024, where I
            studied as a Rhodes scholar. I hold a B.S. in economics and a B.A.
            in applied physics from the University of North Carolina at Chapel
            Hill.
          </p>

          <p className="mb-2">
            Beyond research, I captain the Oxford Varsity basketball team, write
            creatively, run an email newsletter for my friends, organize a
            seminar at Oxford called "Show Me Why You Love It,"
            <Footnote
              id="2"
              content="Where scholars either (i) present their research in an informal, fun, accessible way, or (ii) share about their homelands, with all their personal and political complexities."
            />{" "}
            attempt endurance races, and protest for social justice.
          </p>

          <p className="mb-2">
            These days, most of my time is spent researching, writing,
            organizing, or hanging out with some of the coolest people in the
            world. I am very lucky, and try to do good while also having a good
            time.
          </p>
        </div>

        <div>
          <img
            src={gradPhoto}
            alt="Graduation photo"
            className="w-full h-auto rounded-lg shadow-md" // changed to w-full
          />
        </div>
      </div>
    </>
  );
};

export default About;
