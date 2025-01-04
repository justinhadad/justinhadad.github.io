import React from "react";
import { Link, useNavigate } from "react-router-dom";
import withBlogSEO from '../../../utils/withBlogSEO';

export default function Restaurants() {
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
          <h1 className="text-2xl font-bold text-gray-900">restaurants</h1>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
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
            to="/writing/bike-trip/coffee"
            className="text-blue-600 hover:underline mx-2"
          >
            coffee
          </Link>
          |{" "}
          <Link
            to="/writing/bike-trip/brews"
            className="text-blue-600 hover:underline mx-2"
          >
            brews
          </Link>
          |{" "}
          <Link
            to="/writing/bike-trip/varia"
            className="text-blue-600 hover:underline ml-2"
          >
            varia
          </Link>
        </p>

        <hr className="my-8" />

        <div className="space-y-8">
          <div className="space-y-3">
            <div className="mb-2">
              <h3 className="text-lg text-gray-900 leading-tight">
                10.{" "}
                <a
                  href="https://www.dohertysirishpubnc.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Doherty's Irish Pub and Restaurant
                </a>
                , Cary, NC
              </h3>
            </div>
            <p className="leading-relaxed">
              I walked into Doherty's for, quite literally, just an outlet. My
              phone was dead and I didn't know how to get back on the trail. An
              hour and some later, I left Doherty's with a full stomach, a big
              heart, and a new affinity for fish and chips.
            </p>
            <p className="leading-relaxed">
              Doherty's serves classic Irish dishes, some with local twists. The
              waitress told me that people drive hours for their famous
              batter-fried fish and chips, and I see why. I recommend a visit if
              you're in the area.
            </p>
          </div>

          <div className="space-y-3">
            <div className="mb-2">
              <h3 className="text-lg text-gray-900 leading-tight">
                9.{" "}
                <a
                  href="https://charliewasasinner.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charlie was a sinner.
                </a>
                , Philadelphia, PA
              </h3>
            </div>
            <p className="leading-relaxed">
              Google labels the restaurant a "Vegan cafe/bar dishing up
              creative, plant-based small plates & drinks in sexy, dark
              environs." I could not be more accurate than this. Spicy, funky
              cocktails; vegan dishes with creative twists; and excellent,
              "sexy" energy. I definitely recommend.
            </p>
          </div>

          <div className="space-y-3">
            <div className="mb-2">
              <h3 className="text-lg text-gray-900 leading-tight">
                8.{" "}
                <a
                  href="https://www.agorarestaurants.net/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agora
                </a>
                , Washington D.C.
              </h3>
            </div>
            <p className="leading-relaxed">
              My friend Cyrus and I had just suffered an expensive weekend at
              the hands of D.C.'s absurd <del>price gouging</del> prices. He
              wanted to save money and skip lunch, but I was keen on one more
              D.C. favorite. I chose the Agora, and will never regret that fact.
            </p>
            <p className="leading-relaxed">
              Octopus over a bed of sour cream, home-made Kalamata olive oil,
              and seafood soup were all the hype. They were even worth the
              money – a statement I feared I would never utter about anything
              from D.C.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              7.{" "}
              <a
                href="https://ottomantaverna.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ottoman Taverna
              </a>
              , Washington D.C.
            </h3>
            <p className="leading-relaxed">
              The first Michelin-starred restaurant to reach this list, Ottoman
              Taverna boasts a "Trip to Turkey" on its menu. It's authentically
              Mediterranean, and especially worthy of the Michelin (and now
              Justin) label.
            </p>

            <p className="leading-relaxed">
              I ordered thinly sliced beef döner kebap, which came with white
              rice, ezme (turkish salsa), and carrot-red cabbage slaw. A photo
              may satisfy you more.
            </p>
            
            <img
              src="/images/ottomantaverna.jpeg"
              alt="Ottoman Taverna"
              className="w-full"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              6.{" "}
              <a
                href="https://www.hotchickrva.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hot Chick
              </a>
              , Richmond, VA
            </h3>
            <p className="leading-relaxed">
              After I ate at Hot Chick, I was convinced it was going to be the
              number one restaurant on this list. This restaurant is incredible.
            </p>
            <p className="leading-relaxed">
              Chick-fil-A, Popeyes, McDonalds, Burger King, Wendy's, KFC,
              whatever. Those chicken sandwiches pale in comparison to that from
              Hot Chick. A crispy brioche bun is the foil to the moist meat,
              meanwhile ranch slaw and a cold pickle counter the spice. It's
              magic.
            </p>
            <p className="leading-relaxed">
              Their website boasts "BEST DAMN CHICKEN SANDWICH YOU HAVE EVER
              HAD. PERIOD." So far, this holds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              5.{" "}
              <a
                href="https://talulasgarden.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talula's Garden
              </a>
              , Philadelphia, PA
            </h3>
            <p className="leading-relaxed">
              I mentioned in a{" "}
              <Link
                to="/writing/bike-trip/day29"
                className="text-blue-600 hover:underline"
              >
                blog post
              </Link>{" "}
              that, while walking the streets of Philadelphia, I ran into my
              friend Abby. I described the dinner to which her parents treated
              me as follows:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
              There, I ate one of the best meals I've ever had: a tagliatelle
              and mushroom appetizer, seared sea scallops on lemon risotto,
              Abby's leftover pork belly and peaches, and three (!) cocktails,
              one of which was a spicy passionfruit Mezcal.
            </blockquote>
            <p className="leading-relaxed">
              Talula's is worth the lofty price tag. More importantly, I learned
              here that anyone who says they enjoy Old Fashioned's are lying.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              4.{" "}
              <a
                href="http://www.lavarany.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Vara
              </a>
              , New York City, NY
            </h3>
            <p className="leading-relaxed">
              The second Michelin-starred restaurant on this list, La Vara is
              worth all the hype. Small plates (<em>tapas</em>) featuring
              octopus, mussels, and pureed snap peas led the meal, though I got
              hit with the{" "}
              <a
                href="https://www.marzettifoodservice.com/blog/shishito-peppers-come-strong-sometimes/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                shishito pepper curse
              </a>{" "}
              that makes eating hilariously unpleasant. Seriously – the shishito
              peppers that are spicy are <em>so gosh darn spicy</em> that I
              couldn't eat for 15 minutes.
            </p>
            <p className="leading-relaxed">
              Amazing service, even better food, but try your best to dodge the
              killer shishito if you can. 5 stars to La Vara.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3.{" "}
              <a
                href="https://www.zzqrva.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZZQ
              </a>
              , Richmond, VA
            </h3>
            <p className="leading-relaxed">
              My friend John, a Houston native and barbecue connoisseur, told me
              that perhaps the best barbecue in the country is not found in
              Texas, but at Richmond's ZZQ. Please, go to ZZQ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              2.{" "}
              <a
                href="https://www.sobeachyhaitiancuisine.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sobeachy Haitian Cuisine
              </a>
              , Baltimore, MD
            </h3>
            <p className="leading-relaxed">
              I stumbled into Baltimore's Cross Street Market without much of an
              agenda. That is, until I saw Sobeachy, and then I made one.
            </p>
            <p className="leading-relaxed">
              I went up to the chef (his name was Oben) and told him I hadn't
              had Haitian food before, but that I often consume its adjacent
              Trinidadian and Jamaican cuisines. We talked about our respective
              origins for a bit, and he, without asking, started making me a
              bowl. Plantains. Avocados. Slaw. Chicken. Pork. He looked up once,
              only to smile at me and call me <em>my brother</em>. He eventually
              turned around and prepared me a secret drink, the origins of which
              he kept from me. See below for a photo.
            </p>
            <img
              src="/images/IMG_8360.jpeg"
              alt="Sobeachy"
              className="w-full"
            />
            <p className="leading-relaxed">
            Delicious food, though I have no idea how one could order what I
              got. I guess tell him you haven't been to Haiti.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              1.{" "}
              <a
                href="https://www.chamamama.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chama Mama
              </a>
              , New York City, NY
            </h3>
            <p className="leading-relaxed">
              A former Soviet (and at one point, German) state, Georgia bears a
              unique cuisine, full of bread, egg, butter, meat, and, ... well,
              that's just about it.
            </p>
            <p className="leading-relaxed">
              The benefit of 1) rolling 10-deep to a restaurant, and 2) having
              friends who share everything is that we can order the whole menu
              and not feel so bad about it. We ordered just about everything:
              open-faced <em>khachapuri</em> with blended cheese and an egg,{" "}
              <em>adjapsandali</em> (vegetable rogue with eggplant and
              zucchini), chicken and grilled grits, <em>kubdari</em> (a spiced
              pork pizza-esque dish; also the national dish of the Svans), among
              many others. The service was impeccable, the dishes were
              delicious, and the company was superb. In the spirit of the true
              Michelin Guide, go as far out of your way as you need in order to
              eat here. Chama Mama is perfect.
            </p>
            <p className="leading-relaxed">
              A nearby table learned it was my birthday and gifted me a
              Napoleon, a crispy pastry with creamy patisserie inside. It was
              the best dessert I've ever had.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
