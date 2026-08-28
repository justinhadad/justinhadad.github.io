// pages/writing/evidence.js
import React from 'react';
import EvidenceList from '../../components/EvidenceList';

const evidenceItems = [
  {
    id: 1,
    title: "Example Evidence Item",
    description: "Description of the evidence...",
    date: "2024-01-15",
    url: "https://example.com/evidence1",
    tags: ["war crime", "women and children"]
  },
  // Add more items here
];

const EvidencePage = () => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Documentation of Human Rights Violations</h1>
          <p className="text-gray-600 text-lg">
            This page presents documented evidence of human rights violations committed by Russian forces 
            against Ukrainian civilians during the ongoing conflict. Each piece of evidence has been 
            verified and categorized to provide a clear understanding of these incidents.
          </p>
        </header>

        <EvidenceList items={evidenceItems} />
      </div>
    </div>
  );
};

export default EvidencePage;