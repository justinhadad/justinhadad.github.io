import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Day22() {
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
            Day 22: The Best Meditations
          </h1>
          <h4 className="text-sm font-medium">June 26, 2021</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/bike-trip/day15"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
          <Link
            to="/writing/bike-trip/day29"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <>
          <p>
            Today marks the halfway point of the trip. I am overwhelmed with
            thoughts on that fact. To avoid such reflection now, I have instead
            included episodes and musings from the past week.
          </p>

          <hr />

          <p>
            I decided to groom my beard yesterday. My new friend Michael, with
            whom I've fortunately bonded these last few days in D.C., lent me
            his trimmer. The product is a man whom you wouldn't expect to be
            biking up the coast, or to be without a steady bathroom.
          </p>

          <hr />

          <p>
            I learned a lot from Fredericksburg, VA.{" "}
            <a
              href="https://www.nps.gov/frsp/learn/historyculture/chatham.htm"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chatham Manor
            </a>
            , the well known residence and plantation that Washington,
            Jefferson, and eventually Lincoln once visited, was especially
            curious, if not solely problematic. Per a woman named Cathy, every
            winter season, a local man dresses as Santa and sits atop the house
            steps, but substitutes the classic red suit for Civil War garb. To
            the delight of kids and parents alike, he doles out seasonal
            trinkets and War memorabilia, teaching about the Confederate ideals
            for which the South fought. An especially troubling scene.
          </p>

          <p>
            Outside of Chatham <strike>Horror</strike> Manor, I learned of
            Phoenix's special O.J. Espresso, which I have sworn to make myself
            every morning once I am steadily home (wherever that is; see next
            section). While on the topic, here's a list, in decreasing order of
            exposure, of the foods, drinks, and toppings that I have consumed
            along the way which I want to learn to make:{" "}
          </p>

          <blockquote>
            <p>
              <em>
                Habibi Sauce – 
                <a
                  href="https://www.falafelinc.org/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falafel Inc.
                </a>
                , Washington D.C.
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              a spicy relish made from garlic and jalapeño
            </p>

            <p>
              <em>
                Amaro Cider – 
                <a
                  href="https://capitolciderhouse.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Capitol Cider House
                </a>
                , Washington D.C.
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              hot apple cider, Amaro, Grand Marnier, fresh lemon juice, freshly
              ground peppercorns, and lemon wheel garnish
            </p>

            <p>
              <em>
                Poisson Rouge – 
                <a
                  href="https://www.sobeachyhaitiancuisine.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sobeachy Haitian Cuisine
                </a>
                , Baltimore, MD
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              red snapper marinated and fried in sos Ti-Malice
            </p>

            <p>
              <em>
                Homemade Olive Oil – 
                <a
                  href="https://agoradc.net/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agora
                </a>
                , Washington D.C.
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              kalamata olives salted and pressed into extra virgin
            </p>

            <p>
              <em>
                Pad Kee Mao – 
                <a
                  href="https://www.sabairva.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sabai
                </a>
                , Richmond, VA
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              spicy flat noodles with pork belly, baby corn, fresh basil, and
              scallions
            </p>

            <p>
              <em>
                Humphrey Gilbert – 
                <a
                  href="https://www.sirwaltercoffee.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sir Walter Coffee
                </a>
                , Raleigh, NC
              </em>
            </p>
            <p style={{ marginLeft: "20px" }}>
              cold brew and Kahlua base, shaken with mocha and topped with
              Baileys-infused whipped cream
            </p>
          </blockquote>

          <hr />

          <p>
            You may be confused at the order of the above: indeed, I have gone
            through D.C. to Baltimore, and now back. I invited my friends
            Kimathi and Eron to visit for a weekend, and D.C. is a fair meeting
            place where other UNC folks are available. So I came back down.
            Tonight, we are invited to a dinner hosted by UNC alum Sebastian
            Elie-York, who has accepted a $20 fee for a home-cooked meal,
            seven-courses included. More on that to come, I imagine.{" "}
          </p>

          <p>
            Baltimore was a kind, albeit brief visit; Fredericksburg the same.
            Bike rides and the people in each were pleasant.
          </p>

          <hr />

          <p>
            During winter break of my first year of college, my buddy Kimathi
            and I co-wrote a book of poems and essays, which we ended up
            submitting for a national creative writing competition. The book
            turned out terrible – the judges agreed – and, to our delight, the
            book is not available anywhere on the inter-webs.{" "}
          </p>

          <p>
            There are, however, a bit of gems throughout that I think of to this
            day. I like this one a lot:
          </p>

          <p>
            <em>
              The best meditations move at breakneck pace, the second best are
              completely stationary. Aurelius was a master horseman, but know
              that it was the horse that moved and not the Emperor.{" "}
            </em>
          </p>

          <p>
            Your best thoughts happen when you're moving, we thought. You can
            judge the accuracy of this statement by your perception of the
            quality of this blog. Here's another:
          </p>

          <p>
            <em>
              Home is real, which is to say definite, which is to say material.
              Your conscious projection – or "where the heart is" – means
              nothing. It's just a sublimation. We found it a long time ago.
              It's in your chest. It beats to the rhythm of a
            </em>{" "}
            where<em>.</em>
          </p>

          <p>
            My homes aren't something I can easily write about. The feelings I
            get from them – Avery Park, where I grew up playing basketball;
            Horton Residence Hall study lounges; the rightward steps on UNC's
            Wilson Library; to name a few – are inarticulable, if not as
            meaningful (or meaningless) to you as the other words on this page.
            You wouldn't understand these feelings unless you grew up like me,
            just like I wouldn't understand your homes unless I grew up like
            you. Home can point you to a place, sure, but you don't decide when
            you're there. Something has to tell you.
          </p>

          <p>
            I've found that you can't go too far without home being brought to
            you again. So, it is fitting that Kimathi – and Eron, again – joined
            me this weekend. Home is here with me, whistling, singing, and
            bringing drinks on arrival. These last few days, I found home in a
            Caribbean brother, and again in a twenty-minute call with my dad.
            While it hid in D.C., it burst in my friend Julia's childhood home,
            in the Asian market to which she introduced me, and again when her
            parents told me how they met.
          </p>

          <hr />

          <p>
            Since we last spoke, I have finished{" "}
            <a
              href="https://bookshop.org/books/the-stranger-9780679720201/9780679720201"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>The Stranger</em>
            </a>{" "}
            and{" "}
            <a
              href="https://bookshop.org/books/the-alchemist-9780062315007/9780062315007"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>The Alchemist</em>
            </a>
            . It is no secret to those close to me that I am easily affected by
            my most recent reads, or by the things nearest to me in general. As
            a result, the beginning of D.C. was tough, because I basically
            surrendered my wayward search for meaning (thanks Camus).{" "}
            <em>The Alchemist</em> had my mind flowing again.
          </p>

          <p>
            It's lucky that I'm writing this a few days removed from the
            nihilist pursuit. These days, I am wondering what – of the many
            possible options – is important to me. I'm not sure if I'll find
            answers while reading Louise Penny's{" "}
            <a
              href="https://bookshop.org/books/still-life-a-chief-inspector-gamache-novel/9780312541538"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Still Life</em>
            </a>
            , though I can dream.{" "}
          </p>
        </>
      </div>
    </div>
  );
}
