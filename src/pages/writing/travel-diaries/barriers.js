// src/pages/writing/travel-diaries/barriers.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Barriers() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/writing/travel-diaries');
  };

  const handleNavigateNext = () => {
    navigate('/writing/travel-diaries/sevilla');
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
          <h1 className="text-2xl font-bold text-gray-900">barriers</h1>
          <h4 className="text-sm font-medium">Madrid, Spain</h4>
        </div>
        <div className="mb-4">
          <Link
            to="/writing/travel-diaries/tickles"
            className="text-sm text-gray-500 hover:text-gray-700 mr-4"
          >
            previous
          </Link>
          <Link
            to="/writing/travel-diaries/sevilla"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            next
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-gray-600">
        <p>
          Upon my arrival in Madrid, my hosts, friends Josie and Emma, informed me of a sad fact: clubbing until 5am the next day was a requirement.
        </p>
        
        <p>
          That Halloween night/morning, I walked a bit slanted around{' '}
          <a 
            href="https://www.thehostclub.es/" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Host
          </a>
          , incessantly saying "lo siento" to myself and confusing everyone around me. (I was practicing!) I snuck onto the stage of a private party, where absolutely no one spoke English, and for something like an hour, we all jumped around, sharing mere motion and yells, dancing and screaming and enjoying the scene.
        </p>

        <p>
          Inevitably I was spotted. The security approached me, but then one of the private partygoers said something to the guard, and then to me, and then frothed his hands forward with an encouraging nod. I imagine he said something like "just say you're with me" or "give him a few euros" —and it was beautifully devastating that our connection had already reached its peak, had lasted so far without words, and I was thrown out.
        </p>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between">
        <Link
          to="/writing/travel-diaries/tickles"
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

export default withBlogSEO(Barriers, {
  title: "barriers",
  location: "Madrid, Spain",
  type: "travel"
});