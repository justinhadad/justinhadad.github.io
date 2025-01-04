// src/components/Quote.js
import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <blockquote className="text-2xl font-light leading-relaxed text-gray-800">
        "{quote}"
      </blockquote>
      {author && (
        <cite className="block mt-6 text-lg text-gray-600">
          — {author}
        </cite>
      )}
    </div>
  );
};

export default Quote;