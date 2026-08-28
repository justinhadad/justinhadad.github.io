import React from "react";
import gradPhoto from "../assets/grad.webp";
import SEO from "../components/SEO"; // Add this import

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Justin Hadad is a postdoctoral researcher in economics at Stanford University."
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
        ]}
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <p className="mb-2">
            I'm a Postdoctoral Scholar in Economics at Stanford University for 2026-2028. I'm supervised by <a href="https://web.stanford.edu/~alroth/" className="text-blue-600 hover:underline">Al Roth</a> and work closely with <a href="https://sites.google.com/view/irene-lo" className="text-blue-600 hover:underline">Irene Lo</a>.
          </p>

          <p className="mb-2">
            I studied at the University of Oxford (MPhil 2022-2024, DPhil 2024-2026) as a Rhodes scholar, where I was supervised by <a href="https://t8el.com/" className="text-blue-600 hover:underline">Alex Teytelboym</a>. While at Oxford, I learned from many fantastic people, captained the university basketball team, and organized a seminar series called "Show Me Why You Love Home," where students shared personal stories about the places they come from. 
          </p>

          {/* <p className="mb-2">
            If you are looking for the Abdulla/Gabriel/Hadad/Haddad/Halout/Fajloun/Nahoum/... family tree, click here, and reach out to me for the password.
          </p> */}

          <p className="mb-2">
            I'm very lucky, and I try to do good while also having a good
            time.
          </p>
        </div>

        <div>
          <img
            src={gradPhoto}
            alt="Justin Hadad celebrating graduation with friends at Oxford"
            width="1600"
            height="1067"
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default About;
