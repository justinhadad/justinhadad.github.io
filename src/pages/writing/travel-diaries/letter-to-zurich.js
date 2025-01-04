// src/pages/writing/travel-diaries/letter-to-zurich.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import withBlogSEO from '../../../utils/withBlogSEO';

function LetterToZurich() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/writing/travel-diaries");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
      <div className="mb-6">
        <button
          onClick={handleGoBack}
          className="text-sm text-gray-500 hover:text-gray-700 mb-1"
        >
          travel diaries
        </button>
        <div className="flex justify-between items-baseline">
          <h1 className="text-2xl font-bold text-gray-900">letter to zurich</h1>
          <h4 className="text-sm font-medium">Zurich, Switzerland</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/travel-diaries/spaghetti"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          I'll be totally candid. I'm writing this in April. I'm putting
          finishing touches in July. And I left Zurich back in February.
        </p>

        <p>
          It's not for lack of putting aside time to sit idly on my laptop and
          click around until some clickable thing demands lengthy attention.
          I've been doing that: roughly every day for a few hours I sit here,
          know deep within me that I want to write about Zurich, and instead
          continue working on theoretical research questions for Advisor Pycia,
          or write the story I'm working on, or watch{" "}
          <a
            href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            3B1B
          </a>{" "}
          videos. It's hard to condense months of ideological changes, of being
          alone, of making new friends (and fighting thousands-of-miles-distance
          to keep old ones) into one post. To talk about Mohammed and Beatrice
          and Celli and Luisa and Tom and and and.
        </p>

        <p>
          I've spent enough time crafting narratives and watching them fall
          through the cracks. So right now, on this porch couch next to Molly,
          digesting the Durham-favorite{" "}
          <a
            href="https://www.namudurham.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Namu
          </a>
          , I'm setting a twenty-five minute timer, and I am going to write, and
          we are going to see what words bind together.
        </p>

        <p>Begin.</p>

        <p>
          I never had to go to Zurich. That's the crazy thing in hindsight. I
          had been granted the grant from the Morehead-Cain Foundation, who
          solely prescribed that I research something that enhanced my "Global
          Perspective" on the world. At the time of application (and still) my
          research interest was the use of market-design theories on modern
          systems with poor allocations. I'm far more competent in the
          simulation side of research than in the theory side (probably good
          practically, but bad for publications), so I figured I should sink my
          teeth into something out of my academic comfort zone for a few months.
          Working with Marek Pycia checked all the boxes: two-sided matching
          with practical applications in the refugee crisis, working mostly in
          mathematical theory, based in Switzerland. I was going to live alone,
          and it was going to be hard.
        </p>

        <p>
          If it came to it and I emailed Marek and said I couldn't make it to
          Zurich, he would've understood. The world was battling COVID, the
          Swiss government was in a duel with the gods of haste, and I was due
          for an actual job. But I wanted to go, and I waited until the
          government said I could. Finally, in November, I arrived.
        </p>

        <p>
          Now, there is a meaningful distinction between the government
          approving my visit and the University of Zurich being ready for me.
          There are two obvious problems if a mostly-unpaid job isn't ready for
          you and you show up anyway: <em>does the job have work for you?</em>,
          and{" "}
          <em>can they give you any benefits (**like housing**) in time?</em> In
          academia, there's always work to be done; we had that part covered.
          But the benefit I couldn't get in time? Housing.
        </p>

        <p>
          So what did this mean? I had to keep staying in hostels – Swiss-German
          ones, i.e. ridiculously expensive ones – until they could find me a
          place. This wouldn't be a big deal if I weren't tired out of my mind
          of 16-bedroom rooms, of showering with dead roaches. In the first week
          of my time in Switzerland, I stayed in three different places – a
          hostel, a hotel (so I could sleep well before the Rhodes interview),
          and an apartment-hotel hybrid which, while it cost more than the
          hostel, had a merely performative difference, and had perhaps even
          filthier sheets. In these few days I met Pleuni, a biomechanics
          graduate student at the nearby ETH ("MIT of the East," they say), a
          guy named Winnie while on the look-over-Zurich Uetliberg hike (he
          watched me slip off the ice in my chacos – I still had just my
          hostel-backpacking summer wardrobe, mind you – and we walked and
          talked together after he helped me up), and Patrick, Jonas, Ana, and
          others. During this time, I got the Rhodes, celebrated the Rhodes with
          a solo dinner out – pork knuckle and two beers for 110 USD – and went
          back to sleep in my hotel alone.
        </p>

        <p>
          Once UZH got me my own place (a two-bedroom apartment overlooking the
          town of Oerlikon, a few miles north of downtown Zurich), my wellbeing
          somehow got worse. Weird, but I felt awfully alone.
        </p>

        <p>
          Alongside the general <em>how well things are going around me</em>,
          I've found there are two forces that determine my happiness: how cool
          of an environment I'm in, and who's around me to reflect the beauty of
          my days back onto me. The former is well stated in the public sphere –
          traveling is vacation, the beach is bliss – and that part was more
          than fulfilled. But the weight I place on the latter might be a little
          unpopular. I love doing things with people.
        </p>

        <p>
          I remember, early in my travels, I was sad and alone, strolling the
          streets of somewhere (truly I don't remember) and I called my friend
          Sam, Eastern philosophy wiz and nerd. We talked about the Emerson /
          Thoreau / <em>learn-to-be-happy-in-your-isolated-cabin</em> effect
          shed to people around the West. He shared with me that
          self-sufficiency isn't ubiquitously valued, and that dependency is an
          especially appreciated POV in Eastern thought. He told me it's okay to
          feel lonely, that I probably should, and pointed out wisely – as I
          think about to this day – that the truest versions of ourselves are
          not locked away in our brains, but emerge when interacting with others
          and the environment around us. I think that was Heidegger. The timer
          is still going – let me not delay.
        </p>

        <p>
          And so, to explain why I suddenly felt worse: while I <em>was</em> in
          an incredibly cool place, there was a heightened degree of loneliness.
          I wanted to share the beauty with people, but struggled getting to
          know them, even communicating. It was freezing cold, COVID was still
          around, and Swiss German is wildly difficult to learn. I lived alone,
          and I worked alone. There was no outside force pushing me to seize the
          days.
        </p>

        <p>
          I'll skip the weeds and get to the garden: like any journey,
          consistency, it seems, was key. I went to basketball open-gyms four
          times a week. I joined the handball club. I went to a jazz dance
          course, hung out at coffee shops. Befriended the barista at{" "}
          <a
            href="https://www.kafischnaps.ch/de/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kafischnaps
          </a>
          , went there a hundred times. Went on hikes, got awfully close with
          the late-night cashier at the EuroStar, enjoyed walks with faculty.
          Hosted backpackers, took day-trips to Lucerne and Bern and Lausanne,
          went swimming in Lake Zurich. I built a home out of a big place and
          out of the people I met along the way.
        </p>

        <p>There are a few images of home that I would like to share.</p>

        <div className="mt-8 space-y-8">
          <div>
            <p className="font-semibold italic mb-2">
              Thanksgiving, November 2021
            </p>
            <p className="mb-4">
              Pleuni and I talked for hours about what her being Dutch implies
              and what my being American implies. She had grown up thinking that
              Americans were unbearable, I told her she should see Americans at
              Thanksgiving, she said <em>wat</em>. One thing led to another –
              and partly to see if I was telling the truth and partly to see how
              funny it could be, she offered to convert her Friday-night dinner
              plans into a Thanksgiving bash, bringing me as the token American.
            </p>
            <img
              src="/images/thanksgiving.jpeg"
              loading="lazy"
              alt="Thanksgiving."
              className="w-full"
            />
          </div>

          <div>
            <p className="font-semibold italic mb-2">Peanuts, December 2021</p>
            <p className="mb-4">
              Jana and I found a buffet of peanuts in the fourth-floor kitchen
              of the UZH Health Science Library and converted our study table
              into a plate.
            </p>
            <img src="/images/peanuts.jpeg" alt="Peanuts." className="w-full" />
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              Morning espresso off the balcony, December 2021
            </p>
            <p className="mb-4">
              Every morning I poured an espresso shot from the machine left in
              the apartment, opened the sliding door to the outside, and stood
              over the edge leaning over the snow. Around this time it was
              common that I felt Zurich could offer no more to me than the homey
              parts of a house – nooks, comfort zones – but lacked the spiritual
              wholeness provided by a family of friends, consistency, times
              drinking coffees with friends. These morning espressos – silent,
              every morning – offered some kind of fulfillment.
            </p>
            <img
              src="/images/espresso.jpeg"
              loading="lazy"
              alt="Espresso."
              className="w-full"
            />
          </div>

          {/* <div> */}
            {/* <p className="font-semibold italic mb-2">
              The guys who work at Zuri Bistro, December 2021
            </p>
            <p className="mb-4">
              We knew nothing about each other, had shared only the same words
              over and over, but they still insisted on using my hands for a
              marketing video (and giving me discount kebabs). If I can convince
              you of anything, it's to please see my friends over at{" "}
              <a
                href="https://www.zueribistro.ch/"
                className="text-blue-600 hover:underline"
                loading="lazy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zuri Bistro
              </a>{" "}
              (on Schaffhauserstrasse).
            </p>
            <video width="100%" muted controls>
              <source src="/images/zuribistro.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          <div>
            <p className="font-semibold italic mb-2">
              Handball beers, January 2022
            </p>
            <p className="mb-4">
              Handball is awesome, mandatory handball beers afterward is more
              awesome. Over the course of a few weeks I got close with a guy
              named Lukas, who taught me about his year in the Swiss army, and
              more about the gun he got afterward. Once or twice a week, ten or
              so dudes sitting around a table, drinking a few beers, talking
              about nothing. Felt like Ohio.
            </p>
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              Basketball, January 2022
            </p>
            <p className="mb-4">
              One guy pulled me aside and told me I play just like Mike James.{" "}
              <em>Just like Mike James</em>, he said. Who is Mike James, you
              ask? The MVP of the EuroLeague.{" "}
              <em>Just like Mike James, just like Mike James</em>, I hear him
              whisper still.
            </p>
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              The Ski Trip, February 2022
            </p>
            <p className="mb-4">
              In the chronology of things, this is where everything turned
              around. Pleuni made a group chat with people she wanted to ski
              with. Someone said something along the lines of "If you want to
              ski, say I!" and just a few people responded. So Pleuni instead
              said{" "}
              <em>if you don't want to ski on this weekend, leave the chat</em>.
              I had forgotten to respond, and next thing I knew, I got an email
              from SplitWise saying I owed 400 USD for mass transport and for a
              hostel halfway up the Gimmelwald ski village that we booked out.
            </p>
            <p className="mb-4">
              On this wild weekend, I got close with Celli, the roommate of
              Pleuni's classmate, who lived a floor below me. I met Luisa, who
              Celli met at a club somewhere in Zurich. Tom and I bonded over
              shared appreciation for the blue ski runs. I had my first raclette
              (actually made it myself, somehow), watched Viviane totally eat it
              off a cliff (she was fine, somehow), and had fun.
            </p>
            <img
              src="/images/mountain.jpeg"
              loading="lazy"
              alt="Mountain."
              className="w-full"
            />
            <p className="mt-4 italic">
              With two weeks left in Zurich, I found my group, and everything
              changed.
            </p>
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              Dinner parties, February 2022
            </p>
            <p className="mb-4">
              Dinner parties every night over my last two weeks in the Z.
              Generally planned at mine, always held at Celli's.
            </p>
            <img
              src="/images/dinner.jpeg"
              loading="lazy"
              alt="Dinner."
              className="w-full"
            />
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              The Swiss French, February 2022
            </p>
            <p className="mb-4">
              Luisa and I went for a swim in the freezing cold Lake Zurich.
              There were some Swiss French people a few yards down from us, far
              less timid of the water than we were, with whom we started
              chatting – two of them were making fun of us for calling the water
              "warm," the other we couldn't understand literally at all. Around
              this time, an old man walked behind us, and then walked behind us
              again, and I called out that he should join. I joked with Luisa
              that if he walked by one more time, I'd invite him to drinks, and
              I'd ask the folks next to us.
            </p>
            <p className="mb-4">Next thing we knew…</p>
            <img src="/images/z.jpeg" alt="Swiss French." className="w-full" />
            <p className="mt-4 mb-4">
              The Swiss French bunch learned I hadn't tried fondue.{" "}
              <em>I'm lactose intolerant</em>, I say! Truth be told it's really
              just expensive; I eat cheese when it's in front of me and ice
              cream whenever I feel like it. But they were outraged, and
              convinced me to come eat fondue with them. And they treated me,
              saying that when I show them around my home I have to return the
              favor.
            </p>
            <img src="/images/fondue.jpeg" loading="lazy" alt="Fondue." className="w-full" />
          </div>

          <div>
            <p className="font-semibold italic mb-2">Mohammed, February 2022</p>
            <p className="mb-4">
              I went to the nearby EuroStar to get groceries (mainly beer) about
              twice a week. The night cashier (on staff when I'd usually go) was
              named Mohammed – a Turkish man who spoke enough Swiss German but
              with whom I shared only a few unique words.{" "}
              <em>Hey, hello, how are you, good to see you</em>. He always
              checked out my beers with a smile on his face.
            </p>
            <p className="mb-4">
              So with a few days left in my stint in Zurich, I told Mohammed I
              would be heading back to the States. I had been planning a
              farewell party at my apartment (but as these things go, it was to
              be held at Celli's) and I told Mohammed to join for a drink. I
              didn't think he'd come. He <em>did</em> show up. Everyone was like
              "who's this guy?" as he proceeded into a monologue, saying that
              not many people speak to him while he works, and how grateful he
              was that I did. He apologized for not bringing a gift and said he
              would love to show me around his home (Istanbul) sometime.{" "}
              <em>Until next time</em>, he said.
            </p>
          </div>

          <div>
            <p className="font-semibold italic mb-2">
              Beatrice's necklace, February 2022
            </p>
            <p className="mb-4">
              It's pretty hard to put this one into words. "Iamnotreallysure
              howtoshowyouIcare butImadeyouthisnecklace hereyougo," said
              Beatrice. And she held out a necklace in her offering hands.
            </p>
            <img
              src="/images/necklace.jpeg"
              loading="lazy"
              alt="Necklace."
              className="w-full"
            />
          </div>

          <div>
            <p className="mb-4">
              And then I flew back to the states to the home with all my best
              friends in it. They demanded I tell all the stories that made
              Zurich a home, to talk about the people, sing their praises, and
              show the photos and videos that flaunt how real they are.
            </p>
            <img
              src="/images/return.jpeg"
              loading="lazy"
              alt="The return."
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withBlogSEO(LetterToZurich, {
  title: "A Letter to Zurich",
  location: "Zurich, Switzerland",
  type: "travel",
  customDescription: "Recapping several months spent living and working alone in Zurich."
});