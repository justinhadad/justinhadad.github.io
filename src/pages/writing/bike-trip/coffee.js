import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

const Coffee = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/writing/biking');
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
          <h1 className="text-2xl font-bold text-gray-900">coffee</h1>
        </div>
      </div>

      <div className="space-y-6 text-gray-600">
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
          <Link to="/writing/bike-trip/brews" className="text-blue-600 hover:underline mx-2">
            brews
          </Link>
          |{" "}
          <Link to="/writing/bike-trip/varia" className="text-blue-600 hover:underline ml-2">
            varia
          </Link>
        </p>

        <hr className="my-8" />

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              5.{" "}
              <a
                href="https://www.newsbarny.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Newsbar
              </a>
              , New York City, NY
            </h3>
            <p>
              Manhattan prices are no joke, and Newsbar is no exception. Nonetheless, the lox bagel, cozy outdoor seating (pretty uncommon in the city), and on-draft oat milk lattes make up for the steep costs. Seriously––get the oat milk latte, if you go.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              4.{" "}
              <a
                href="https://www.coladashop.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colada
              </a>
              , Washington D.C.
            </h3>
            <p>
              The wharf in Washington D.C. is a pretty overwhelming place. Seafood bars line the street, there's a scooter rack every few feet, and little kids seem to intentionally run in your way. But a bright spot shines through: Colada. Colada is a vibrant but chic spot for Cuban cuisine, small plates, and coffee, the lattermost of which was especially tasty. Also, the Café con Leche is a must-have for the espresso-drinkers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3.{" "}
              <a
                href="https://ironcladcoffee.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ironclad Coffee
              </a>
              , Richmond, VA
            </h3>
            <p>
              The layout of Ironclad is gorgeous: the kitchen is in panopticon formation to the rest of the shop, while a balcony (with a legion of outlets) overhangs it. Lavender syrup and kumquats are intriguing additions to the drinks, though they ultimately work well. Ironclad does it right.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              2.{" "}
              <a
                href="https://www.facebook.com/cafecouleurphilly/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Café Couleur
              </a>
              , Philadelphia, PA
            </h3>
            <p>
              Two employees, just mom and pop. Shining lights spelling "LELE" named after mom. A coffee drink called "The Pete" (featuring turmeric, ginger and dates) named after pop. Transactions via Venmo. Smoothies, jackfruit banh mi, and spaghetti squash. What more could you want?
            </p>
            <p>
              Everyone knows the "Can I get that light on ice?" trick. For coffee drinks, you get more caffeine; for alcoholic drinks, you get more alcohol. For the first time ever, I was denied upon request. "The ice is made of coffee––you don't want light on ice," Pete retorted. He turned out to be right.
            </p>
            <p>
              Though their shop has only been open since the middle of the pandemic, Pete and Lele sure make amazing drinks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              1.{" "}
              <a
                href="https://www.sirwaltercoffee.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sir Walter Coffee
              </a>
              , Raleigh, NC
            </h3>
            <p>
              To some people, it's an especial bummer when the first place that you visit is the eventual top choice. To me, it's a treat to know that my favorite coffee spot ever is minutes away from my college town. Sir Walter, though it bears regrettable nominal origins, serves creative and delicious coffee drinks, and offers beautiful bagels for those interested. Amazing service, great interior, and top-of-the-line waffles make this place the go-to on the East Coast.
            </p>
            <p>
              (And no, it's not my favorite because I met Anish Giri's cousin there.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;