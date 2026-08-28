// components/EvidenceList.js
import React, { useState, useMemo } from 'react';
import { Calendar, Tag, Filter } from 'lucide-react';

const EvidenceList = ({ items }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'source'

  const tags = ['safe zone', 'women and children', 'mockery', 'war crime'];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredAndSortedItems = useMemo(() => {
    let filtered = items;
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = items.filter(item => 
        item.tags.some(tag => selectedTags.includes(tag))
      );
    }

    // Sort by date
    filtered = [...filtered].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );

    // Group by month
    const grouped = filtered.reduce((acc, item) => {
      const date = new Date(item.date);
      const monthYear = date.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
      
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(item);
      return acc;
    }, {});

    return grouped;
  }, [items, selectedTags, sortBy]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Filter Controls */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose how to sort content</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedTags.includes(tag)
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Evidence Items */}
      <div className="space-y-8">
        {Object.entries(filteredAndSortedItems).map(([monthYear, monthItems]) => (
          <div key={monthYear}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {monthYear}
            </h3>
            <div className="space-y-4">
              {monthItems.map((item) => (
                <div 
                  key={item.id} 
                  className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-m font-medium">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    </h4>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceList;