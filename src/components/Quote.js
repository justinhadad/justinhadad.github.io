// src/components/Quote.js
import React from 'react';

const Quote = ({ quote, author, source, sourceType }) => {
  const renderSource = () => {
    if (!source) return null;
    
    // Since the whole cite is in italics, we need to un-italicize books
    // and keep essays/articles/poems in quotes (which will be italic)
    if (sourceType === 'book') {
      return <span className="not-italic">{source}</span>;
    } else if (sourceType === 'essay' || sourceType === 'article' || sourceType === 'poem') {
      return `"${source}"`;
    } else {
      // Default case - assume it's a book if not specified
      return <span className="not-italic">{source}</span>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <blockquote className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-800">
        "{quote}"
      </blockquote>
      {author && (
        <cite className="block mt-6 text-sm sm:text-base text-gray-600">
          — {author}{source && ', '}{renderSource()}
        </cite>
      )}
    </div>
  );
};

export default Quote;