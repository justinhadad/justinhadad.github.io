// src/pages/writing/travel-diaries/modern-emotions.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';  // Adjust path as needed

function ModernEmotions() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/writing/travel-diaries');
  };

  const handleNavigateNext = () => {
    navigate('/writing/travel-diaries/about-london');
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
          <h1 className="text-2xl font-bold text-gray-900">modern emotions</h1>
          <h4 className="text-sm font-medium">London, England</h4>
        </div>
            <div className="mb-4">
                  <Link
                    to="/writing/travel-diaries/about-london"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    next
                  </Link>
                </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          In March 2020 (everything that follows this phrase is typically sad; this is no exception) my friend Megan and I got funding for a trip to Saint-Paul-lez-Durance, France. I roped in Stef, a friend from the UK who studied abroad at UNC. Obviously given the timing, the trip never happened.
        </p>

        <p>
          Stef and I had been trying to see each other for years, but couldn't quite nail it. So this fall, when my job in Switzerland was delayed but I still had a flight to London, I decided just to <em>go</em>.
        </p>

        <p>
          For my first week of travels, I'm on Stef's living room couch in east London. These days I'm getting up at absurd hours (confirmed by the flatmates) and doing absolutely fuck-all every day. I go to parks, ask random people to have a coffee with me, make friends with store owners (called a Kurdish man "Dad" and he gave me karnabahar pizza for free), use outdoor gyms, walk aimlessly, try different drinks, write, type, and so on.
        </p>

        <p>
          Loneliness is draining. I actively avoid being on my phone because I'm in a new place; if I'm not on my phone it's because I'm doing "something", and constantly doing something is untenable. I don't have a job at the moment so my days are empty, also professionalism probably isn't the solution to sadness (activity <em>can</em> be but see above). Sitting alone with my thoughts is an obvious result but I spiral easily, and I prefer not to do that. Reading is okay.
        </p>

        <p>
          My days are fun and I'm eventually going to be happy living them. So far, at the end of them all, when I'm alone again and inevitably imagining realities of my life at other chronologically even endpoints, I feel a bit lost in the world. I think productivity from this feeling comes with time, maybe productivity is the wrong way to think about this. Maybe my life just needs a change.
        </p>

        <p>
          A bit further: maybe this recognition is enough growth; maybe I'm in the pits of it and the growth is the outcome.
        </p>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between">
        <Link
          to="/writing/travel-diaries/about-london"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          next
        </Link>
      </div>
    </div>
  );
}

export default withBlogSEO(ModernEmotions, {
  title: "Modern Emotions",
  location: "London, England",
  type: "travel",
  customDescription: "Reflections on loneliness and growth during an unexpected stay in London, exploring themes of productivity, change, and finding oneself in a new city."
});