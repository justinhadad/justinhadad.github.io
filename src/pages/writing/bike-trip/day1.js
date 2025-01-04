import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Day1() {
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
            Day 1: Turn It Down
          </h1>
          <h4 className="text-sm font-medium">June 5, 2021</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/bike-trip/day4"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          At some point in my 21 years, I must have undoubtedly claimed that a
          bug had flown in my eye, when, in fact, one hadn't. Should this be
          true, I would imagine that I was not lying to anyone – if anyone,
          myself – but that I was merely ignorant of what it <em>really</em>{" "}
          felt like. The feeling, which I now know too well, accurately
          describes my day one, and somehow reflects my goals for this trip.
          Partly like a bug, flaunting its wings against my left eye, drifting
          itself to death while I blink it away. Let me explain the rest.
        </p>

        <p>
          My first ride was on the Neuse River trail in Raleigh. Don't get mad
          at me, reader: I <em>know</em> it isn't part of the East Coast
          Greenway; it was meant to be a warmup. I had embarked on the 27.5 mile
          trail at around 9:30 a.m., intending to loops to its starting point
          sometime a few hours later. I was going to learn the feel of my new
          bike, and figure out how best to balance my weight. For now, all of my
          belongings were in my backpack.
        </p>

        <p>
          It is probably worth mentioning that I haven't really trained for
          this. I'm not necessarily out of shape, but not so much in it, either.
          If you Google (
          <a
            href="http://www.thelinguafile.com/2013/02/how-google-became-verb.html"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            sorry
          </a>
          ) "21 year old boy average body," I likely look similar. (Having done
          this <em>ex post</em>, I'm blissfully wrong; the search results are
          ridiculous.) I also have unideal dietary habits for long bike rides; I
          don't eat breakfast, drink fairly little water, and mass-consume
          Chipotle.
        </p>

        <p>
          Given this was just a warm up, my gear was quite underwhelming: I wore
          Chacos, boxers beneath my athletic shorts, and a Hawaiian shirt with
          the top buttons loose.
        </p>

        <p>
          I stopped around mile 10, miraculously unexhausted (see above
          paragraph), to read 80 or so pages of Blake Crouch's{" "}
          <a
            href="https://bookshop.org/books/dark-matter-9781410491459/9781101904244"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Dark Matter</em>
          </a>
          . The book made me upset, as books sometimes go, so I earmarked it and
          kept trudging. At around the 24th mile marker, I consumed my singular
          granola bar and what remained of my water, because I was wrapping up
          in just a few thousand feet.
        </p>

        <p>
          Heavy breathing and all, I traced the mile markers down to zero, my
          legs stammering, knees giving, and heart begging for my car. I scanned
          the parking lot and realized its circular shape didn't match that in
          my memory. Exhaustion had overcome my hippocampus, I figured. My car
          was here somewhere.
        </p>

        <p>Well, it wasn't.</p>

        <p>
          The trail was not a loop. It was 27.5 miles out. Not out and back, not
          back to its starting point. It was 27.5 miles in one direction. I had
          no water, no food, just a book I didn't like and a pair of Chacos.
        </p>

        <p>
          In my younger days – maybe between ages 5 and 10 – I would look around
          the house to find the gifts that my mom had hidden for my birthdays. I
          abused two facts: that my house wasn't big enough to hide things in,
          and that my mom was too busy to buy all my gifts day of.
        </p>

        <p>
          One year, I found a copy of Halo 2 beneath the dryer. I giggled and
          ran off, giddy for a new game to waste my time on, sneaking by my
          parents' room just around the corner.
        </p>

        <p>
          Days later, I opened all my gifts. I didn't get the game. When I was
          looking for another wrapped box, failing to lay my eyes on God's gift,
          Halo 2, self-doubt ripped my brain: Is it still behind the dryer? Did
          I ever even see the game? Is my mom Satan?
        </p>

        <p>
          I looked at my mom, smitten with a smirk, glad she maneuvered me. She
          knew. She knew! For that one moment, for a glimpse of history and
          never again, she was Satan.
        </p>

        <p>
          This is how the parking lot looked at me. My car, my analogous Halo 2,
          was missing. I should mention that my mom eventually gave me the game;
          this parking lot never gave me my car.
        </p>
        <p>
          I laughed at the situation, then at myself; talked to an old woman
          about her daughter's soccer game around the corner; and turned around.
          (Be on the lookout for a six-year-old center back named Miranda;
          apparently she's filthy.) 27.5 miles to go on this fine morning, with
          no sustenance, but all of my belongings on my achy back.
        </p>

        <p>
          And then, just minutes after I took off in the opposite direction, it
          happened: a bug flew into my eye. I'm not sure what genre of bug, but
          she must have been eating well, thick and heavy, black marks plastered
          on my whites and all. If you've ever been victim to an autorefractor,
          you may recall the burst of air clapping against your eye. It was
          that, ten times over, rolling over and over again as I blinked her to
          bits.
        </p>

        <p>
          And the feeling that I thought that I could've guessed – that there
          was a bug in my eye! – was something totally, unexpectedly different.
          It wasn't light and kind, it wasn't something I could blink off. It
          was there for hours. Like pink eye formed on impact, or like a contact
          glued to my upper eyelid.
        </p>

        <p>
          I obviously brought everything I didn't want or need – a knife, a cup,
          a golf ball – but not eyedrops, and definitely not sufficient water or
          food. So I sped away to my origin, my left eye bleary, opaque tears
          dripping off, like the condensation on the water bottle I was dreaming
          up.
        </p>

        <p>
          My car, and the three Clif bars I had once I arrived to it, were
          paradise.
        </p>

        <p>
          On day one, in a matter of four morning hours, I learned something
          important for my trip: I won't really know until I do. I packed wrong,
          of course, and I know that because I packed wrong. I had a bug in my
          eye and it sucked, and I know that because I had a bug in my eye and
          it sucked.
        </p>

        <p>
          Coming into this trip, I know I want to turn it down, maybe a handful
          of notches. I want to tune it all out. And I won't know how that
          really feels until I do it.
        </p>

        <p>
          Frankly, reader, the last four years have not been so easy. I think
          I've been hustling and bustling a lot, and I want to just, ya know,
          stop for a bit. But that isn't a feeling I can write about yet. I want
          to find it, maybe live it. I won't be able to describe it until I do.
          I want to read all my books. I want to explore new places, make new
          friends, and be more comfortable being out and about.
        </p>

        <p>
          College was fun, perhaps the best time of my life, but not
          psychologically trivial. Over the next couple weeks, I want to process
          it all. And I want to learn to live with me. On this day one of 45,
          I'm hoping I can get there.
        </p>
      </div>
    </div>
  );
}
