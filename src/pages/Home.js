// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Quote from '../components/Quote';
import { quotes } from '../data/quotes';
import SEO from '../components/SEO';  // Make sure this path matches your SEO component location

const Home = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    setRandomQuote(getRandomQuote());
  }, []);

  return (
    <>
      <SEO 
        title="Home"
        description="Justin Hadad is a  graduate student in economic theory at the University of Oxford."
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
        {/* Add your other Home page content here */}
      </div>
    </>
  );
};

export default Home;