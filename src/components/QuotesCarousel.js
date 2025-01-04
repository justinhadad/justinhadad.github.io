import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const QuotesCarousel = () => {
  const quotes = [
    {
      text: "The humanitarian situation in Gaza is dire and requires immediate attention.",
      author: "UN Secretary-General",
      date: "2024"
    },
    {
      text: "Every human life is precious, and the loss of civilian life is deeply tragic.",
      author: "International Red Cross",
      date: "2024"
    },
    {
      text: "Healthcare facilities are operating under extreme pressure with limited resources.",
      author: "WHO Representative",
      date: "2024"
    },
    // Add more quotes as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative py-4">
        {/* Quote content */}
        <div className="flex flex-col justify-center">
          <p className="text-base text-gray-800 mb-2 italic">
            "{quotes[currentIndex].text}"
          </p>
          <div className="text-gray-600">
            <p className="text-sm font-medium">{quotes[currentIndex].author}</p>
            <p className="text-xs">{quotes[currentIndex].date}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotesCarousel;