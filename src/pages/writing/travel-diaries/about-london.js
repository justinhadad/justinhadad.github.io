// src/pages/writing/travel-diaries/about-london.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function AboutLondon() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/writing/travel-diaries');
  };

  const handleNavigateNext = () => {
    navigate('/writing/travel-diaries/tickles');
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
          <h1 className="text-2xl font-bold text-gray-900">about london</h1>
          <h4 className="text-sm font-medium">London, England</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/travel-diaries/modern-emotions"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
          <Link
            to="/writing/travel-diaries/tickles"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          I personally am not at a stage in my life where I feel even remotely motivated to share the things I know (I'm 22, I know nothing), but I <em>am</em> aware that there are [edge] cases where people may benefit from some disclosure of the things I've learned.
        </p>
        <p>
          I've been totally floored by a few Londonian idiosyncrasies. Here are some things that have struck me.
        </p>
          <h4 className="font-bold">Hot sauce</h4>
          <p>
            Story one: As we youth often do, I was at a McDonald's quite late the other day. I ordered chicken nuggets with *sour cream and chive dip* because everything else was far out of my taste buds' range (this should say something), and, matching intuition, I was wildly dissatisfied. But hot sauce is always a fair bet – if it tastes bad, just drench it in some spice, ya? Well I went to the counter and asked for some. "This is a McDonald's" the cashier said.
          </p>
          <p>
            Story two: Stef and I went to The Yurt so that I could try the English-famous "bubble and squeak," an absurd mix of leftovers. They were out of whatever goes in bubble and squeak, so I got a kidney bean and lentil soup instead. Of course, I wanted hot sauce, so I went to the cashier and asked for some. "There's mustard to your left," he said.
          </p>
          <h4 className="font-bold">Guns</h4>
          <p>
            My head was down on a long walk home, during which I mindlessly scrolled away and rinsed Lorde's "Stoned at the Nail Salon." All of a sudden my vision was interrupted by an orange dot at the center of my jacket. I looked up to see a ski-masked person holding *something that looked like a gun* with both hands, something like six or so feet away.
          </p>
          <p>
            I immediately booked it in the other direction, running faster than I thought was possible through all kinds of alleyways. (This was probably a bad idea.) To the lectures of literally everybody I've told about this, walking home that late won't happen again.
          </p>
          <p>
            I thought it was impossible – aren't guns banned here? – but there have been more than 20,000 incidents of gun violence over the last decade in London.
          </p>
          <h4 className="font-bold">Peng and peak!</h4>
          <p>Peng means sexy, peak means not.</p>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between">
        <Link
          to="/writing/travel-diaries/modern-emotions"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          previous
        </Link>
        <button
          onClick={handleNavigateNext}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default withBlogSEO(AboutLondon, {
  title: "about london",
  location: "London, England",
  type: "travel",
  customDescription: "Takeaways from a trip to London"
});