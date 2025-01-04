import React from "react";
import { Link, useNavigate } from "react-router-dom";
import withBlogSEO from '../../../utils/withBlogSEO';

export default function Varia() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/writing/biking");
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
          <h1 className="text-2xl font-bold text-gray-900">varia</h1>
        </div>
      </div>

      <div className="space-y-6 text-gray-600">
        <p className="text-sm">
          See also:{" "}
          <Link
            to="/writing/bike-trip"
            className="text-blue-600 hover:underline mr-2"
          >
            blog
          </Link>
          |{" "}
          <Link
            to="/writing/bike-trip/restaurants"
            className="text-blue-600 hover:underline mx-2"
          >
            restaurants
          </Link>
          |{" "}
          <Link
            to="/writing/bike-trip/coffee"
            className="text-blue-600 hover:underline mx-2"
          >
            coffee
          </Link>
          |{" "}
          <Link
            to="/writing/bike-trip/brews"
            className="text-blue-600 hover:underline ml-2"
          >
            brews
          </Link>
        </p>

        <hr className="my-8" />

        <p>
          <em>Varia</em> is a Latin word that means the "catchall," or more
          literally, "various things." I listed my favorite activities and
          things of the sort below.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              5.{" "}
              <a
                href="https://www.instagram.com/bossanovacivicclub/?hl=en"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bossa Nova
              </a>
              , Brooklyn, NY
            </h3>
            <p>
              If it looks like a bar, smells like a bar, and serves drinks like
              a bar, then it's probably a bar. Unless it's Bossa Nova. I have no
              idea what Bossa Nova is, really. It's basically a bar but with EDM
              music and smoke pumping through it, so much so that you can't see
              your hands. Nonetheless, it was an absurdly fun time, and I
              recommend you go, if that's your scene.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              4.{" "}
              <a
                href="https://www.trailforks.com/skillpark/belle-isle-skills-area/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Belle Isle Bike Park
              </a>
              , Richmond, VA
            </h3>
            <p>
              Belle Isle is literally an island – you have to cross a suspension
              bridge to get there. So, when I found a bike park there, I was
              stunned. I would share more, but you've already seen me there
              – remember when I{" "}
              <a
                href="https://justinhadad.com/day15.html"
                className="text-blue-600 hover:underline"
              >
                fell off my bike
              </a>
              ?
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3.{" "}
              <a
                href="https://en.wikipedia.org/wiki/Rucker_Park"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rucker Park
              </a>
              , Harlem, NY
            </h3>
            <p>
              Arguably the most famous basketball court in the world, Rucker
              Park features NBA players, Instagram celebrities, and
              commentators. No, not famous commentators who play in the games
              – locals who commentate over the games being played at the park.
              When I was there, Jason Williams ("White Chocolate") and a few
              big-time high school players were there. My friend Kimathi took a
              video of me shooting around, which I'll use as proof of my
              attendance.
            </p>

            <video className="w-full" controls muted>
              <source src="/images/rucker.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        
            <p>
              You caught me – I'm not wearing the Chacos. I thrifted a pair of
              basketball shoes just to play at Rucker Park. And it was worth it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              2.{" "}
              <a
                href="https://www.bankshot.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bankshot
              </a>
              , Fredericksburg, VA
            </h3>
            <p>
              I mentioned Bankshot in two blog posts already. The eight-plus
              hoop stations are designed so that all kids can play, all the
              time. You can find the court at John Lee Pratt Park, though there
              are other locations scattered across the country.
            </p>
            <p>
              Ball not included, though the Confederate Flag that overhangs it
              is.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              1.{" "}
              <a
                href="https://www.vitalclimbinggym.com/brooklyn"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VITAL
              </a>
              , Brooklyn, NY
            </h3>
            <p>
              First floor: rock walls, gym, snack station, locker rooms. Roof:
              bar, restaurant, more rock walls, New York City skyline. An
              absolutely unreal place.
            </p>
            <p>
              The $1,200/year pricetag is hilariously steep, but somehow seems
              worth it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
