import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import { quotes } from '../data/quotes';
import SEO from '../components/SEO';

const Home = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    // Skip setting a random quote if a bot is visiting.
    if (!/bot|crawl|spider|google/i.test(navigator.userAgent)) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, []);

  return (
    <>
      <SEO 
        title="Home"
        description="Justin Hadad is a graduate student in economic theory at the University of Oxford."
        pathname="/"
        keywords={[
          'Justin Hadad',
          'economic theory',
          'Oxford University',
          'graduate research',
          'economics',
          'mathematical economics',
          'social science'
        ]}
      />
      <div className="min-h-[60vh] flex flex-col justify-center items-center">
        {randomQuote && (
          <div className="animate-fade-in">
            <Quote {...randomQuote} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
