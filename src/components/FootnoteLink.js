import React, { useContext, createContext, useState, useRef } from 'react';

const FootnoteCounterContext = createContext();

export const FootnoteProvider = ({ children }) => {
  const counterRef = useRef(1);
  return (
    <FootnoteCounterContext.Provider value={counterRef}>
      {children}
    </FootnoteCounterContext.Provider>
  );
};

const FootnoteLink = ({ url }) => {
  const counterRef = useContext(FootnoteCounterContext);

  // Capture the number ONCE, when the component first mounts
  const [currentNumber] = useState(() => counterRef.current++);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <sup
        className="text-blue-600 cursor-pointer hover:text-blue-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        [{currentNumber}]
      </sup>
      {isExpanded && (
        <div className="mt-2 mb-4 pl-4 border-l-2 border-gray-200 text-sm text-gray-600 italic break-words">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {url}
          </a>
        </div>
      )}
    </>
  );
};

export default FootnoteLink;
