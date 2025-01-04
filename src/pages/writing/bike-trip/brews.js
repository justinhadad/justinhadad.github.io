import React from "react";
import { Link, useNavigate } from "react-router-dom";
import withBlogSEO from '../../../utils/withBlogSEO';

export default function Brews() {
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
          <h1 className="text-2xl font-bold text-gray-900">brews</h1>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p className="text-sm">
          See also:{" "}
          <Link to="/writing/bike-trip" className="text-blue-600 hover:underline mr-2">
            blog
          </Link>
          |{" "}
          <Link to="/writing/bike-trip/restaurants" className="text-blue-600 hover:underline mx-2">
            restaurants
          </Link>
          |{" "}
          <Link to="/writing/bike-trip/coffee" className="text-blue-600 hover:underline mx-2">
            coffee
          </Link>
          |{" "}
          <Link to="/writing/bike-trip/varia" className="text-blue-600 hover:underline ml-2">
            varia
          </Link>
        </p>

        <hr className="my-8" />

        <p>
          NB: Some recommendations may no longer be available. All beer hyperlinks send you to{" "}
          <a
            href="https://untappd.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Untappd
          </a>
          , a website that lets you review and track your drinks. I am not sponsored by them, though I'd like to be.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              5.{" "}
              <a
                href="https://www.visitprinceton.org/listing/alchemist-%26-barrister-restaurant-%26-pub/5421/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alchemist and Barrister
              </a>
              , Princeton, NJ
            </h3>
            <p>
              Good beer seems pretty unbecoming of Princeton. Just off the historic Nassau Street, though, you can find a solid drink – and a darn good chicken sandwich – at the locally renowned Alchemist and Barrister. Beware: <del>soccer</del> football fans get pretty rowdy there.
            </p>
            <p>
              Recommendation:{" "}
              <a
                href="https://untappd.com/b/yards-brewing-co-thomas-jefferson-s-tavern-ale-bourbon-barrel-aged/52555"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thomas Jefferson's Tavern Ale
              </a>
              , a bourbon-barrel aged golden ale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              4.{" "}
              <a
                href="https://ardentcraftales.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ardent
              </a>
              , Richmond, VA
            </h3>
            <p>
              There's nothing better than a kind brewer who lets you try all the beer. Well, I thought that, until the other brewer told me that he had written a short story and offered to share it with me – there's <em>really</em> nothing better than that. The beer was good, too.
            </p>
            <p>
              Recommendation:{" "}
              <a
                href="https://untappd.com/b/ardent-craft-ales-honey-ginger/703251"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Honey Ginger
              </a>
              , an herbed beer with locally sourced honey and hand-peeled ginger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3.{" "}
              <a
                href="https://www.yelp.com/biz/bonners-irish-pub-philadelphia"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bonners Irish Pub
              </a>
              , Philadelphia, PA
            </h3>
            <p>
              Quaint Irish pub that screams a sense of belonging to Philadelphia, so much so that I'm surprised it claims Irish descent. People were pretty mean there, which I heard in Philadelphia means they're nice.
            </p>
            <p>
              Recommendation:{" "}
              <a
                href="https://www.urbandictionary.com/define.php?term=Citywide%20Special"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Citywide Special
              </a>
              {" "}(you have no other choice), a shot of whiskey mixed into a PBR.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              2.{" "}
              <a
                href="https://www.lynnwoodgrill.com/lynnwood-brewing-concern/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lynnwood Brewing Concern
              </a>
              , Raleigh, NC
            </h3>
            <p>
              If you thought Raleigh was only known for its tech, college towns, and family homes, think again. Lynnwood was packed to the brim, and when I asked the bartender how he handled an 8-person queue at 4 p.m., he responded, "You should see what it'll be like tomorrow." I did; he was right. Lynnwood seems pretty packed, all the time, and for good reasons: good drinks, big TVs, and lots of dogs.
            </p>
            <p>
              Recommendation:{" "}
              <a
                href="https://untappd.com/b/lynnwood-grill-and-brewing-concern-mosaic-pale-ale/529063"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mosaic Pale Ale
              </a>
              , a solid single hop with fruity aromas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              1.{" "}
              <a
                href="https://www.theveilbrewing.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Veil
              </a>
              , Richmond, VA
            </h3>
            <p>
              Stop at The Veil if you can. Phenomenal drinks, open space, kind people, and a surplus of food trucks.
            </p>
            <p>
              Recommendation:{" "}
              <a
                href="https://shop.theveilbrewing.com/product/tootie-rebelz-4-pack-16oz-cans/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tootie Rebelz
              </a>
              , a smoothie-style sour that tastes like Fruity Pebbles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}