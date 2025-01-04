import React from "react";
import { Link, useNavigate } from "react-router-dom";
import withBlogSEO from '../../../utils/withBlogSEO';

function HowItTicklesTheTrees() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/writing/travel-diaries");
  };

  const handleNavigateNext = () => {
    navigate("/writing/travel-diaries/barriers");
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
          <h1 className="text-2xl font-bold text-gray-900">
            how it tickles the trees
          </h1>
          <h4 className="text-sm font-medium">London, England</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/travel-diaries/about-london"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
          <Link
            to="/writing/travel-diaries/barriers"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          This weekend, my friend Alex and I watched a modern rendition of
          Ovid's Metamorphoses at [a modern rendition of] Shakespeare's Globe.
          The ancient text is comprised of a series of stories, each of which
          renders the creation of something: how a Thracean king turned into a
          hawk after assaulting his wife's sister and eating his son, how
          wildfires spawned because a teen-angsty boy demanded the Sun's
          chariot, etc. etc.
        </p>

        <p>
          There were just four cast members, each cycling through ancient
          figures, smashing the fourth wall and resuming character with ease.
          Just as giggles erupted when Orpheus' lyre-song was replaced by a
          crowd-led rendition of American Pie (this was insane), you could hear
          your breath as Actaeon's death was recounted to perfect detail: he
          catches the goddess Diana bathing, and she turns him into a stag, just
          like the ones he'd been killing his whole life; then, his hunting dogs
          find him, mutilate him, and he screams, not like a man but like an
          abused deer, groaning and crying and trapped, and his men call for him
          to watch his own, gory, full-circular death.
        </p>

        <p>
          The stories were breathtakingly sad. So at the end of the show, when
          one of the cast members lit a candle and said "Do you want one more
          story?", I expected another death, at best just an injury, pitiful and
          scream-filled.
        </p>

        <p>
          The cast member told us about their niece. Her name is Tillie. The
          other day, while they were babysitting Tillie, playing and sitting and
          passing time, it started to rain. Tillie let out a small smile but
          continued to play and sit.
        </p>

        <p>
          "I asked her why she was so smiley," they said. "She told me she loved
          the rain. She told me it's because the trees must like it." They
          flashed a smile and stared at us, all of us, seemingly at once. "I
          asked her what she meant. She said it was because of the way the rain
          tickles the trees."
        </p>

        <p>
          Because in a world where we play and sit and pass time, the trees
          don't get enough of us. And the rain is a little touch, a gentle love
          blown over the nature we overlook, and surely it tickles a bit.
        </p>

        <p>
          "So whenever it rains," the cast member said, "think of how the rain
          must tickle the trees, and how much they must love it."
        </p>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between">
        <Link
          to="/writing/travel-diaries/about-london"
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

export default withBlogSEO(HowItTicklesTheTrees, {
  title: "how it tickles the trees",
  location: "London, England",
  type: "travel",
  customDescription: "Watching Ovid's Metamorphoses at Shakespeare's Globe in London."

});