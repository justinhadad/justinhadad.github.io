import React from 'react';

const Footer = () => {
  const terms = [
    { base: 1, count: 2, color: 'text-red-500' },
    { base: 2, count: 3, color: 'text-blue-500' },
    { base: 10, count: 2, color: 'text-purple-500' }
  ];

  return (
    <footer className="py-6 px-4 border-t border-gray-200 text-sm">
      <div className="container mx-auto max-w-7xl text-center text-gray-600">
        © {terms.map((term, i) =>
          Array.from({ length: term.count }).map((_, j) => (
            <React.Fragment key={`${i}-${j}`}>
              <span className={term.color}>{term.base}</span>
              <sup className={term.color}>3</sup>
              {(i !== terms.length - 1 || j !== term.count - 1) && ' + '}
            </React.Fragment>
          ))
        )}
        <br className="block sm:hidden" />
<span className="ml-2">justin hadad</span>
      </div>
    </footer>
  );
};

export default Footer;
