import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Day15() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/writing/bike-trip");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
      <div className="mb-6">
        <button
          onClick={handleGoBack}
          className="text-sm text-gray-500 hover:text-gray-700 mb-1"
        >
          bike trip
        </button>
        <div className="flex justify-between items-baseline">
          <h1 className="text-2xl font-bold text-gray-900">
            Day 15: Joy at Oizys
          </h1>
          <h4 className="text-sm font-medium">June 19, 2021</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/bike-trip/day11"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
          <Link
            to="/writing/bike-trip/day22"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          There's a place in downtown D.C. called{" "}
          <a
            href="https://www.kramers.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kramers
          </a>
          . Kramers is a bookstore-meets-bar, convening college kids, bookworms,
          and their intersections alike. It's a tremendous blend of excitement
          and joy – while I came for the craft, I left with{" "}
          <em>The Alchemist</em> and an urge for Crab Benedict.
        </p>

        <p>
          Going into my junior year of college, I interned for{" "}
          <a
            href="https://www.carbon3d.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carbon
          </a>
          , a Silicon Valley-based digital manufacturing company. There, I
          became friends with a veteran software engineer, Allan, with whom I
          was able to catch up the other week. We discussed his new company, my
          career aspirations (anyone hiring?), his new kid.{" "}
          <em>His new kid!</em> It seems that births are mentioned in such
          passing, though they flip the lives around them upside down. I asked
          him how it was, you know, having a dependent life form and all. And he
          with something I'll probably never forget: "Life may be less fun, but it
          sure has a lot more joy."
        </p>

        <p>
          Sure, watching your kid walk doesn't quite feel like{" "}
          <a
            href="https://www.youtube.com/watch?v=KJgJx05hR4M"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project X
          </a>
          . But watching your kid walk probably serves a trampoline to your
          heart, bringing pride and meaning that I, kid-less, can't describe.
        </p>

        <p>
          There's a meaningful distinction between the energy, thrill, and
          excitement of our life happenings, and the state of full-ness and
          elation that comes with relationships and experiences. Since college,
          I've been imagining a life where I stumble on the former with far less
          frequency, and where I explicitly pursue a more latent, ever-there
          happiness. If anything, this trip has been a meaningful segue between
          one stage of life – college and all its thrills – and this next one,
          hopefully full of deep, internal joy.
        </p>

        <p>
          I was able to get a taste of this joy in Richmond; meanwhile, so far
          in D.C., excitement and thrills feel much more prominent.
        </p>

        <p>
          I didn't think I would feel such strong love for Richmond.{" "}
          <em>Richmond</em>. Richmond, Virginia. My heart was full the whole
          time, the city scaling to second on my personal list of favorite
          cities to visit (Savannah, Georgia is first; that's another story).
          Nothing in Richmond seemed to overrun it – one-off restaurants,
          home-grown breweries, and niche coffee shops line every corner. It may
          not have had the big city or college thrill, but for the seven days I
          was there, Richmond was total joy.
        </p>

        <p>
          D.C. has been the total opposite. It's only been 24 hours, sure, but
          this place is <em>exciting</em>. 1831 had a disco ball echoing
          first-year dorms,{" "}
          <a
            href="https://www.google.com/search?q=bullpen&rlz=1C5CHFA_enUS725US725&oq=bullpen&aqs=chrome..69i57j0j0i433j0l7.998j0j1&sourceid=chrome&ie=UTF-8"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bullpen
          </a>{" "}
          had a waitress who told me to say "when" for the tequila in my Arnold
          Palmer, and there's an attention-worthy building or monument at every
          corner. The chaos of movement, the ever-pressing need to <em>do</em>,
          is here.{" "}
        </p>

        <p>
          As the Germans say, it's an episode of <em>gestalt</em>: the nature of
          one feeling makes the nature of the other more special. I appreciate
          the thrill of D.C. because I have decompressed in Richmond; I
          appreciate the decompression in Richmond because D.C. is much more
          active.
        </p>

        <p>
          Even so, I've found that I seek wholesome interactions after thrilling
          times, and vic versa. Some examples: While in Raleigh, I managed to
          end up at an album release party for a local boy band; the next
          morning, I visited three book-stores on a solo adventure. Last night,
          I chased a <em>La Fin du Monde</em> with two losses in chess to a man
          named Bryan. (Who plays the{" "}
          <a
            href="https://www.youtube.com/watch?v=2jAaBs9QiQk"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Englund
          </a>{" "}
          these days?!)
        </p>

        <p>
          Some of my favorite spots along the trail have been able to facilitate
          both. Richmond's{" "}
          <a
            href="https://www.bingorva.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bingo
          </a>{" "}
          pairs skee-ball with the $75 Preposterous Punch, where six people are
          legally required to co-sign ordering it. D.C. has the aforementioned,
          lovely Kramers.
        </p>

        <p>
          Even in D.C., where thrill seeps into the oxygen, I can tell that
          opportunities for joy wait in the winds. I felt it this morning: I
          stood outside the Capitol for 15 minutes, mainly staring at the{" "}
          <a
            href="https://www.aoc.gov/explore-capitol-campus/art/peace-monument"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peace Monument
          </a>{" "}
          out front. The white marble statue uses a classical scene to
          commemorate naval deaths in the Civil War: Grief (the Roman
          counterpart of Oizys) looks on as History (Clio) holds a tablet that
          reads, "They died, that their country might live." Below, Victory
          (Nike) holds a laurel wreath, while Neptune and Mars, governing the
          sea and war respectively, sit below. A beautiful, bike-stopping
          sculpture.
        </p>

        <p>
          And sometimes the funniest, most memorable moments fall in neither
          category. Consider this video of me falling off my bike, for instance.
          It is neither exciting nor joyful, though it may bring you the latter.
        </p>

        <video className="w-full" controls muted playsInline preload="metadata">
          <source src="/images/IMG_7730.mov" type="video/mp4" />
          <p className="text-gray-600">
            Your browser does not support the video tag.
          </p>
        </video>
      </div>
    </div>
  );
}
