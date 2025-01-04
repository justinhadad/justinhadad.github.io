import React from 'react';

const Footer = () => {
  // Rainbow colors for each exponent
  const rainbowColors = [
    'text-red-500',     // 1³ - Red
    'text-orange-500',  // 2³ - Orange
    'text-yellow-500',  // 3³ - Yellow
    'text-green-500',   // 4³ - Green
    'text-blue-500',    // 5³ - Blue
    'text-indigo-500',  // 6³ - Indigo
    'text-purple-500',  // 7³ - Purple
    'text-pink-500',    // 8³ - Pink
    'text-rose-500'     // 9³ - Rose
  ];

  return (
    <footer className="py-6 px-4 border-t border-gray-200 text-sm">
      <div className="container mx-auto max-w-7xl text-center text-gray-600">
        © {rainbowColors.map((color, index) => (
          <React.Fragment key={index}>
            <span className={color}>{index + 1}</span><sup className={color}>3</sup>
            {index < rainbowColors.length - 1 ? ' + ' : ' '}
          </React.Fragment>
        ))}
        <br className="block sm:hidden" />
        justin hadad
      </div>
    </footer>
  );
};

export default Footer;