import React, { useState } from 'react';

const Footnote = ({ id, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <sup
        className="text-blue-600 cursor-pointer hover:text-blue-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        [{id}]
      </sup>
      {isExpanded && (
        <div className="mt-2 mb-4 pl-4 border-l-2 border-gray-200 text-sm text-gray-600 italic">
          {content}
        </div>
      )}
    </>
  );
};

export default Footnote;