import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO"; // Add this import at the top with your other imports

const ExperienceSection = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-6">
      {title}
    </h2>
    {children}
  </div>
);

const ExperienceItem = ({ title, organization, timeframe, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group flex items-start justify-between"
      >
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-1">
            <span className="font-medium text-gray-900">{title}</span>
            <span className="text-sm text-gray-500">{timeframe}</span>
          </div>
          <p className="text-gray-600 text-sm">{organization}</p>
        </div>
        <ChevronRight
          className={`mt-1 w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 pl-4 text-sm text-gray-600">{children}</div>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <SEO
        title="Experience"
        description="My professional journey. Researcher and Rhodes scholar with experience in market design, data science, and entrepreneurship."
        pathname="/experience"
        keywords={[
          "Justin Hadad",
          "Oxford Economics",
          "Rhodes Scholar",
          "market design",
          "research experience",
          "Harvard Economics",
          "Unity",
          "startup founder",
          "data science",
          "nonprofit leadership",
          "teaching experience",
          "academic research",
        ]}
      />
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          {" "}
          {/* matched About page's mb-6 */}
          {/* <h1 className="text-2xl font-semibold text-gray-900 mb-6">experience</h1> */}
          {/* <p className="mb-8">
            Since I was a teenager, I've continuously been employed (or
            self-employed) in some manner. CV
            available upon request.
          </p> */}
          <div className="prose prose-sm">
            <h2 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-6">
              summary
            </h2>
            <p className="mb-4">
              I recently received my D.Phil. in economics at the University of Oxford. My
              research interests lie in market design.
            </p>
            <p className="mb-4">
              I hold a B.S. in economics, a B.A. in applied physics, and a minor
              in Latin from the University of North Carolina at Chapel Hill. I
              graduated with highest distinction.
            </p>
            <p className="mb-8">
              At Oxford, I was a Rhodes scholar, and at UNC, I was a Morehead-Cain
              scholar, <em>Phi Beta Kappa</em> member, Honors Carolina laureate,
              Robert E. Bryan fellow, LAUNCH Chapel Hill fellow, and Parr Center
              for Ethics fellow.
            </p>
          </div>
        </div>

        <ExperienceSection title="research">
          <ExperienceItem
            title="Postdoctoral Scholar in Economics"
            organization="Department of Economics, Stanford"
            timeframe="age 27, →"
          >
            Working with <a href="https://web.stanford.edu/~alroth/" className="text-blue-600 hover:underline">Al Roth</a> and <a href="https://sites.google.com/view/irene-lo" className="text-blue-600 hover:underline">Irene Lo</a>.
          </ExperienceItem>
          <ExperienceItem
            title="Academic Visitor"
            organization="Department of Economics, Stanford"
            timeframe="age 26, 9 months"
          >
            Started as a quarter-long visit then took inspiration from <a href="https://www.cristianafirullo.com/"className="text-blue-600 hover:underline">Cristiana Firullo</a> to never leave. 
          </ExperienceItem>
           <ExperienceItem
            title="Research Assistant"
            organization="Department of Economics, Oxford"
            timeframe="age 23-26, sporadically"
          >
            Wrote the lecture notes and did some course admin for a
            semester-long market-design course at University of California,
            Berkeley. Also wrote some time-consuming{" "}
            <a
              href="https://www.openicpsr.org/openicpsr/project/191062/version/V1/view"
              className="text-blue-600 hover:underline"
            >
              Matlab-to-TeX code
            </a>{" "}
            that replicates the results from{" "}
            <a
              href="https://www.aeaweb.org/articles?id=10.1257/aer.20210096"
              className="text-blue-600 hover:underline"
            >
              "Matching Mechanisms for Refugee Resettlement"
            </a>{" "}
            (2023, AER). Edited three other papers.
          </ExperienceItem>
          <ExperienceItem
            title="Research Assistant"
            organization="Department of Economics, Harvard"
            timeframe="age 24-25, 4 months"
          >
            Worked for{" "}
            <a
              href="http://scottkom.com/"
              className="text-blue-600 hover:underline"
            >
              Scott Kominers
            </a>
            . Got verbal permission to write an introduction to an economics
            book in the style of a poetry journal.
          </ExperienceItem>

          <ExperienceItem
            title="Academic Visitor"
            organization="Department of Economics, University of Zurich"
            timeframe="age 22, 4 months"
          >
            Researched market design (two-sided matching markets, with general
            applications to the refugee matching problem, school choice, etc.)
            under <a href="https://sites.google.com/view/pycia" className="text-blue-600 hover:underline">Marek Pycia</a>. Lived and worked alone in a city where I didn't know anyone, went to ~every coffee
            shop in Zurich. Realized traveling on weekends was cheaper than
            staying.
          </ExperienceItem>

          <ExperienceItem
            title="Research Group Lead"
            organization="Department of Physics, UNC"
            timeframe="age 19-21, 2 years"
          >
            Met a physics professor (Dr. Daniel Young) because someone confused
            my research in game theory for his research in games. Founded a
            research group under him that studied the ways that games can teach
            both economic theory and introductory physics principles. Gave 5
            different conference talks. Taught own class on the material.
          </ExperienceItem>

          <ExperienceItem
            title="Research Assistant"
            organization="Department of Classics, UNC"
            timeframe="age 20-21, 1 year"
          >
            Learned an incredible amount from{" "}
            <a
              href="https://www.dailytarheel.com/article/2021/04/university-bog-teaching-awards-feature"
              className="text-blue-600 hover:underline"
            >
              UNC's best professor, Sharon James
            </a>.
            Read and hyper-analyzed several classical texts. Sort-of TA'ed a first-year seminar on Greek
            tragedy. Discussed racial inequality in classical literature and
            academia.
          </ExperienceItem>

          <ExperienceItem
            title="Government Research Fellow"
            organization="Louisville Metro Government"
            timeframe="age 18, 3 months"
          >
            Co-wrote a long report detailing the financial policy that immigrant
            business owners want. Lived and worked with three other
            Morehead-Cain scholars. Learned that cleaning extensively is the recipe for a
            happy household.
          </ExperienceItem>

          <ExperienceItem
            title="Research Assistant"
            organization="Department of Psychology and Neuroscience, UNC"
            timeframe="age 18, 6 months"
          >
            Tried to estimate people's political preferences
            based on the language they used on Reddit. Learned that Stack
            Overflow is divine.
          </ExperienceItem>

          <ExperienceItem
            title="Research Assistant"
            organization="Department of Biochemistry, Ohio State University"
            timeframe="age 17, 3 months"
          >
            Poured chemical cocktails into beakers.
          </ExperienceItem>
        </ExperienceSection>

        <ExperienceSection title="professional">
          <ExperienceItem
            title="Economist"
            organization="Pave Power"
            timeframe="age 26, 1.5 months"
          >
            Wrote a long analysis showing that owning electrified land is (probably) not as profitable as brokering deals between electrified fleets and charging-infrastructure companies. Got to play in <s>WeWorks</s> Industriouses.
          </ExperienceItem>
          <ExperienceItem
            title="Data Scientist"
            organization="Total Wine & More"
            timeframe="age 23-24, 3 months"
          >
            Contracted to analyze how demographic factors in certain states
            correlate with revenues. Got to play in WeWorks.
          </ExperienceItem>

          <ExperienceItem
            title="Operations Associate"
            organization="Zoomo"
            timeframe="age 22, 5 months"
          >
            Used company budget to throw a "Zoomo Party" at one of our bike
            shops. Showed company leadership that prepaid card-using customers
            were good actors. Got to play in WeWorks.
          </ExperienceItem>

          <ExperienceItem
            title="Product Manager"
            organization="Unity"
            timeframe="age 22, 4 months"
          >
            Learned SQL and deltaDNA, then became the "tutorial guy" for SQL and
            deltaDNA. Was part of a team that helped pivot Unity Reflect from "pre-process" software (3D
            review; Revit, Rhino, SketchUp) to "post-process," where building
            managers can maintain their spaces digitally. Worked on a racing
            video game (C# and Unity) with my friend{" "}
            <a
              href="https://slouissaint.netlify.app/"
              className="text-blue-600 hover:underline"
            >
              Sam
            </a>{" "}
            during work hours because part of my job was to "interface with the
            software."
          </ExperienceItem>

          <ExperienceItem
            title="Co-founder"
            organization="SplitTime"
            timeframe="age 21, 6 months"
          >
            Built a scheduling app where employees say where/with whom they want
            to work, and schedules are assigned according to preferences,
            capacity limits, and safety. Hired 5 team members, led engineering
            and design, etc. Conducted 27 personalized product demos and 58 interviews with
            consulting firms, sports teams, and F500 companies. Worked 90-hour
            weeks; realized that was untenable.
          </ExperienceItem>

          <ExperienceItem
            title="Economics Associate"
            organization="Zoomo"
            timeframe="age 20-21, 6 months"
          >
            Went to design security software; realized the security they needed
            was on-the-ground instead of in microchips. Biked around (safely)
            during the pandemic. Got a room in a co-living space because it was
            cheaper; this was, in fact, less safe.
          </ExperienceItem>

          <ExperienceItem
            title="Product Manager, Intern"
            organization="Carbon"
            timeframe="age 19-20, 4 months"
          >
            Wrote hierarchical clustering algorithms in Python using Splunk's REST API and a Nest add-on to automate queries. Recruited coworkers to join an inter-company basketball league in Silicon
            Valley; made a game-winner on the night of my last day of work.
          </ExperienceItem>

          <ExperienceItem
            title="Warehouse Worker"
            organization="FST Logistics"
            timeframe="age 18, 2 months"
          >
            Packed and moved boxes. Ate cereal out of a guy's pocket once.
          </ExperienceItem>

          <ExperienceItem
            title="Mechanical Engineer"
            organization="Prater Engineering"
            timeframe="age 15-18, 3 years"
          >
            Drafted CAD files, sometimes Revit files. Designed HVAC units that
            were probably revised by people above me. Never talked to anybody.
          </ExperienceItem>
        </ExperienceSection>

        <ExperienceSection title="nonprofit">
          <ExperienceItem
            title="Co-founder"
            organization="The Propertius Project"
            timeframe="age 22-23, 1 year"
          >
            Built website in simple HTML, CSS, and JS that housed different
            versions of Propertius' <em>Elegies</em>. Tried to incorporate the
            material into Latin curricula. Paid lawyers to tell me I{" "}
            <strike>couldn't</strike> shouldn't get sued.
          </ExperienceItem>

          <ExperienceItem
            title="Co-founder"
            organization="UNCUT"
            timeframe="age 19-21, 2 years"
          >
            Started a <a href="https://uncutchapelhill.com/" className="text-blue-600 hover:underline">media company</a> focusing on student-athlete mental health that went live at 8 universities during my
            tenure. Over 300,000 total likes, views, and reads, just at the
            Chapel Hill branch. Panicked when the company I built
            surpassed me in social media follows.
          </ExperienceItem>

          <ExperienceItem
            title="Co-founder"
            organization="Heels Against Hunger"
            timeframe="age 20-21, 1 year"
          >
            Hosted parties where people listened to music, danced, made food,
            then donated food.
          </ExperienceItem>

          {/* <ExperienceItem
            title="Team Captain"
            organization="Carolina For The Kids"
            timeframe="age 18, 6 months"
          >
            Was told that I broke the record for the most number of people recruited to join one team
            (teams danced for 24 hours straight and raised money for kids at UNC
            Children's Hospital). Subsequently broke record for least amount of money
            raised per capita. Learned that quality &gt; quantity.
          </ExperienceItem> */}
        </ExperienceSection>

        <ExperienceSection title="teaching">
          <ExperienceItem
            title="Course Instructor"
            organization="SPCL 400: Game Show Theory"
            timeframe="age 20, 6 months"
          >
            Given permission to design/teach a course of my own design to fellow college students.
            Topics included one- and two-sided matching markets, auctions, game
            theory, Newtonian physics, math riddles, and various
            philosophical quandaries. Mean 5/5 instructor rating, mean 4.92/5
            course rating. (The student ascribed her non-5 course rating to its "scattered" nature. This was reasonable.)
          </ExperienceItem>

          <ExperienceItem
            title="Tutor"
            organization="miscellaneous, usually free-lance"
            timeframe="age 15-27, sporadically →"
          >
            Most notable story: Assigned via agency to tutor a high schooler in
            Algebra 1; went rogue and taught him how to code. Parents were reasonably
            upset.
          </ExperienceItem>
        </ExperienceSection>

        <ExperienceSection title="really cool things">
          <ExperienceItem
            title="Founder??"
            organization="The Letter of the 18th"
            timeframe="age 22-27, 5 years →"
          >
            A group of my friends frequently write creatively and share our pieces with each other. Started as an email chain (first ed. June 2022); evolved into creating books and distributing their physical copies. 
          </ExperienceItem>
          <ExperienceItem
            title="Founder??"
            organization="Show Me Why You Love It/Home"
            timeframe="age 24-25, 1 year"
          >
            Started a seminar series where Rhodes scholars (very informally) presented their research to each other; seminar topics included theoretical computer science, drug-checking, the Unabomber, gene
            upregulation in inherited cardiomyopathies, mental health in
            children, and women on death row. Then pivoted to focus on people's stories.
          </ExperienceItem>


        </ExperienceSection>

        <ExperienceSection title="physical">
          <ExperienceItem
            title="Men's Basketball Player"
            organization="University of Oxford"
            timeframe="age 23-25, 3 years"
          >
            Played three seasons; in my last year, was captain of the Blues (varsity) team and won Varsity against Cambridge. Had to go to the ER twice in my first season.
          </ExperienceItem>

          <ExperienceItem
            title="Marathoner"
            organization="Madeira Island Ultra-Trail"
            timeframe="age 24, 5 hours"
          >
            Went with a pack of 13 friends to run 42 kilometers in the Madeira
            mountainside. Didn't train, should have; right leg is still injured
            at time of writing.
          </ExperienceItem>

          <ExperienceItem
            title="Half Ironman"
            organization="IRONMAN 70.3 Ohio"
            timeframe="age 23, 7 hours"
          >
            The back wheel of my bike broke at mile 37; repairman fixed me up and
            said, "You're good to go; just don't change gears." I said "??";
            he said "&mdash;don't change gears." I then tried to change my gears directly in front of
            him, and the wheel immediately got messed up again. I then asked him to at least set my bike to a high gear, and he said, "That's impossible, your bike is broken; you will bike the rest of the way on the lowest gear." Which is how I biked the last 19 miles. Eventually I made it to the run portion
            and ran the first-mile split at sub-6 pace, because adrenaline, and
            then my body reminded me that I had biked 19 miles on my bike's lowest
            gear and also that I biked 37 miles and swum two kilometers before
            that. Still finished, somehow.
          </ExperienceItem>

          <ExperienceItem
            title="Cyclist"
            organization="East Coast Greenway"
            timeframe="age 21, 2 months"
          >
            Biked 500+ miles up the coast. Took photos and wrote about it.
          </ExperienceItem>

          <ExperienceItem
            title="Practice Squad Player"
            organization="UNC Women's Basketball Team"
            timeframe="age 19-20, 1.5 years"
          >
            Practiced roughly 6x/week with varsity basketball players. Nicknamed
            "Little Man" because I was smaller than everyone else. Would have
            continued if not for pandemic restrictions.
          </ExperienceItem>
        </ExperienceSection>
      </div>
    </>
  );
};

export default Experience;
