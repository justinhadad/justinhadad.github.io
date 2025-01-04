import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DayT() {
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
            Terminus: Call the Help Number
          </h1>
          <h4 className="text-sm font-medium">July 20, 2021</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/bike-trip/day43"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          I worked at a{" "}
          <a
            href="https://www.ridezoomo.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            bike shop
          </a>{" "}
          for the first few months of the pandemic. There, I fell in love with
          biking, and there – COVID abiding; forecasts were{" "}
          <a
            href="https://www.washingtonpost.com/health/2020/05/27/coronavirus-endemic/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            awfully uncertain
          </a>{" "}
          then – I made the decision to bike to New York after I graduated. Of
          course, as we know so well but pathologically disbelieve, life never
          heeds our plans.
        </p>

        <p>
          Two months before I planned to depart, on a pretty big whim, I emailed
          the executive director ({""}
          <a
            href="https://www.greenway.org/people/dennis-markatos-soriano"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dennis
          </a>
          ) of the East Coast Greenway. I asked him if I could do anything for
          him along the 750 miles, like take photos, interview people, or
          advertise the trail. I didn't think much of it.
        </p>

        <p>
          Luckily, Dennis did, and luckily, my phone number was in my signature.
          He called me immediately – and I mean in seconds. Next thing I knew,
          he was in Chapel Hill playing basketball with me.
        </p>

        <p>My bike trip soon turned into a job.</p>

        <p>
          Three months and hundreds of miles later, I enjoyed the most magical
          45-day period you could imagine. Every day, I woke up, biked to a
          coffee shop, wrote, biked around, met cool people, biked to a
          restaurant, ate, biked to a park, read, and biked to a place to sleep.
          My job was to take photos that advertised the trail's upcoming events:
          a group ride from NYC to Philadelphia, and a request for funding from
          the White House. The objectives weren't particularly hard, but they
          did feel like{" "}
          <a
            href="https://www.youtube.com/watch?v=DByQzzwnMpI"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ratchet and Clank's
          </a>{" "}
          gold bolts – I had to bike to a certain point at a certain time of
          day, and take a picture of a certain kind of thing. (Did{" "}
          <em>anyone</em> else play Ratchet and Clank?)
        </p>

        <p>
          I wrote as many blogs as I read books, met a handful of people with
          whom I'll keep in touch, and explored American history via its
          critical battlegrounds and metro areas. <em>Rigorous</em> isn't the
          right word, neither is <em>leisure</em>. The word I've come up with is{" "}
          <em>absurd</em>. The whole thing never made sense. And it all started
          with an email.
        </p>

        <p>
          I wrote on{" "}
          <Link
            to="/writing/bike-trip/day11"
            className="text-blue-600 hover:underline"
          >
            day 11
          </Link>{" "}
          that I put myself in positions to be lucky. After all, a handful of
          fortunate things happened that day: I got a handful of free drinks,
          met a{" "}
          <a
            href="https://www.youtube.com/channel/UCw--xPGVVxYzRsWyV1nFqgg"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTuber
          </a>
          , a waiter sent me his short story, and a cyclist offered to join me
          for a few miles. I stand by my tendency to be "lucky," but I think
          that's a bit naïve. Any student of probability would find me crazy for
          saying that, anyway.
        </p>

        <p>
          While I stayed at Jonathan's place in New Jersey, we had a long
          conversation about our similarities. We both read, write, and refuse
          to read while we write. (I've found that my writing starts to sound
          like whatever book I'm on.) He said we each have a "fire" in us, or
          something that motivates us to take the leap. This one didn't sit with
          me as well – after all, I'd thought that I've merely been lucky. I
          disagreed, and then Jonathan disagreed with my disagreement.
        </p>

        <p>
          <em>You call the help number</em>, he said.{" "}
          <em>What kind of person does that?</em>
        </p>

        <p>
          Let me catch you up on a story I never shared. Well, one that I kind
          of shared, but never <em>really</em> shared.
        </p>

        <p>
          I was biking in Fredericksburg and stumbled on a skate park. We know
          how this story goes by now – I obviously fell – and a boy at the park
          helped me up. He also told me to turn around, and that nothing
          interesting was beyond. He even pointed me in the direction of
          Benny's. That's right – 
          <a
            href="https://www.bennysva.com/locations/benny-capellas/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Benny Capella's
          </a>
          , which is only meaningful to you if you, at some point in your life,
          were a fellow Chapel Hill resident. Otherwise this name means nothing
          to you.
        </p>
        <p>
          Benny's is a <del>famous</del> <del>good</del> <del>decent</del>{" "}
          restaurant in Chapel Hill that sells obscenely large slices of pizza.
          Apparently, as this mysterious boy told me, there's also a franchise
          in Fredericksburg. (It also is allegedly the best restaurant there; I
          will not comment what that says about Fredericksburg, though it
          appears I already have.) I got all excited inside – 
          <em>a taste of Chapel Hill! on my trip! how fun!</em> – but I had this
          feeling that I should keep going on. You know how hard it is to turn
          down the chance at Benny's? (Not hard at all; please allow me to
          create dramatic effect.) I decided to keep biking ahead, ignoring this
          mysterious little prince. And you know what I stumbled on?{" "}
          <a
            href="http://www.bankshot.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bankshot
          </a>
          .
        </p>

        <p>
          I've talked about Bankshot far too much already. As a reminder, it's a
          set of basketball hoops, all roughly eight-feet high, stacked in a
          line. You can imagine my surprise not only when I found the
          many-hooped basketball court, but when I remembered that this little
          kid told me I shouldn't go there. Was he out to get me? Did he not
          want me happy? My mind raced at the thought of his devilishness.
        </p>

        <p>
          It was obvious to me that no one else thought this place was that
          cool. But I, a lifelong basketball player, was amazed – what a cool
          product! And I wondered:{" "}
          <em>
            who made it? what are the rules? what's their revenue structure?
          </em>{" "}
          And you know what I did – I found a help number, and I called it.
        </p>

        <p>
          After a brief conversation with the operator, I was referred to the
          founder of the company. We talked for a while, and this man – an
          ostensibly old one – challenged me to a game, as long as I could get to
          the HQ in Rockville, Maryland. And that's what I did.
        </p>

        <p>
          Days later, I'm in the company's headquarters, getting out-shot by a
          85-year-old rabbi, and learning what's kept the company around for 40
          years. And, days after that, I sent him a deck that showcased how an
          operational overhaul could increase revenue 20x. And, days after{" "}
          <em>that</em>, I had an offer to join the C-Suite at this company. All
          because I ignored a little kid who helped me at the skate park, and
          because I called the help number.
        </p>

        <p>
          Let me share one more story, this time with a bit more vagueness. When
          I was biking on the Hudson River Greenway, I got this text from
          Jonathan:
        </p>

        <img
          src="/images/jonathantexts.jpg"
          alt="Jonathan let me know that one of his friends was interested in bringing me back to the startup world."
          className="w-full max-w-lg mx-auto"
        />

        <p>
          For context, I've built out three companies over the past four years.
          First is Wage, a scheduling app that enables dynamic wages for shift
          workers. Basically, a nice computer and a bad computer cost different
          amounts, so why do shifts – Monday afternoon versus a Friday night, for
          instance – pay the same? After a fun trip to present the company at
          Uber, I (mostly) put it down to work on UNCUT.
        </p>

        <p>
          <a
            href="https://www.uncutchapelhill.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNCUT
          </a>{" "}
          is the second business I started. It's a media company designed to
          address the mental health (and now NIL) of student athletes. It's
          quite successful, employing 90+ college kids at eight universities
          across the country. I stepped down around the same time that my friend
          Robbie, a former Microsoft exec, approached me about working on a new
          scheduling app, this time to combat the challenges that COVID-19
          brought to the workforce. That app became{" "}
          <a
            href="https://www.getsplittime.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SplitTime
          </a>
          .
        </p>

        <p>
          Anyway, this isn't meant to be my résumé. You probably get the point:
          I've worked on three companies, and Jonathan could have been referring
          to any of them. I called him and he explained that his friend was
          interested in Wage, but would be intrigued by SplitTime, as well.
        </p>

        <p>
          Next thing I knew, his friend invited me to a private showcase at his
          art gallery. And, of course, I went.
        </p>

        <p>
          It was honestly the most absurd two-hour block of my life. High-class
          people and I – still adorning my Chacos – discussed art, travel plans,
          investment opportunities, and the way God shone through the paintings
          before us. The event itself was absurd, but what was even more absurd
          was that this happened on my bike trip. On this already bizarre
          journey, I swung an invite to a private event at an art gallery in
          Manhattan.
        </p>

        <p>
          To close that story, I declined any business engagement with the
          man – I really want to go to graduate school – but that (hopefully)
          doesn't make it any less cool. Back to what Jonathan was saying: I
          just, well, go after things, and there should never be any reason to
          stop. This trip happened because I went after it. I found my way to an
          art gallery because I went after it, and to a potential leadership
          role at a cool company because I went after it. Metaphorically, though
          there was no external force pressuring me to, I kept biking onward,
          and I called the help number.
        </p>

        <hr className="my-8" />

        <p>
          Along this trip, I maintained rankings of my favorite restaurants,
          coffee shops, breweries/bars, and activities, which you can view at
          your leisure. (Or better yet, if you find yourself on the east coast.)
        </p>

        <p className="flex gap-2 items-center">
          <Link
            to="/writing/bike-trip/restaurants"
            className="text-blue-600 hover:underline"
          >
            restaurants
          </Link>{" "}
          |{" "}
          <Link
            to="/writing/bike-trip/coffee"
            className="text-blue-600 hover:underline"
          >
            coffee
          </Link>{" "}
          |{" "}
          <Link
            to="/writing/bike-trip/brews"
            className="text-blue-600 hover:underline"
          >
            brews
          </Link>{" "}
          |{" "}
          <Link
            to="/writing/bike-trip/varia"
            className="text-blue-600 hover:underline"
          >
            varia
          </Link>
        </p>

        <p>
          In the spirit of useless ordinality, I wanted to share my three
          favorite cities that I visited:
        </p>

        <p className="font-semibold">3. Brooklyn</p>

        <p>
          All the benefits to New York City –  – energy, youth, food, to name a
          few – but without the traffic, noise, smell, and (as much)
          urbanization. The city is actually livable, and boasts a handful of
          parks and markets, too.
        </p>

        <p>
          Manhattan is too much of a "so what do <em>you</em> do?" city for me.
          Living there is unideal, but, like the other boroughs, it has
          beautiful aspects, which are still easily accessible via Brooklyn.
          Win-win.
        </p>

        <p className="font-semibold">2. Philadelphia</p>

        <p>
          Philadelphians are tough. It's a big city but without the import
          culture, and seems to value its roots far more than it does its
          corporations. It was clear to me that people are in Philadelphia
          because they have a tie to Philadelphia. That made staying there a bit
          more special.
        </p>

        <p className="font-semibold">1. Richmond</p>

        <p>
          I love Richmond. Unlike other big cities, nothing dominates it – sure,
          VCU is there (and is huge), but it's a liberal arts school; it merely
          adds some extra flavor and youth to the city.
        </p>

        <p>
          Richmond has a great grid system, top-notch breweries, and amazing
          restaurants. Biking is a highly supported form of travel (bike lanes,
          respectful drivers), and is especially fun along the many bodies of
          water that run through downtown. The southern hospitality is obvious.
          I will continue to go back there any chance I can.
        </p>

        <hr className="my-8" />

        <p>
          I'll conclude this blog with a moment of gratitude. I hope I was able
          to draw you in, and make you feel as happy as I was while riding
          around. Thanks for checking this out.
        </p>

        <p>Signing out for now.</p>
      </div>
    </div>
  );
}
