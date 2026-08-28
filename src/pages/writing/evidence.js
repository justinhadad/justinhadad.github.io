// pages/writing/evidence.js
import React from 'react';
import EvidenceList from '../../components/EvidenceList';

const evidenceItems = [
  {
    id: 1,
    title: "Child shot directly in the face in Gaza",
    // description: "Documented missile strike on a civilian apartment complex, resulting in multiple civilian casualties. The building housed no military targets.",
    date: "2024-01-15",
    url: "https://example.com/evidence1",
    tags: ["war crime", "safe zone"]
  },
  {
    id: 2,
    title: "Forced Evacuation of Children from Mariupol",
    description: "Evidence of systematic forced relocation of children from Mariupol to Russian territory without parental consent or proper documentation.",
    date: "2024-01-10",
    url: "https://example.com/evidence2",
    tags: ["women and children", "war crime"]
  },
  {
    id: 3,
    title: "Russian Soldiers Mock Elderly Civilians",
    description: "Video evidence of Russian soldiers mocking elderly civilians at a checkpoint while denying them passage to safe areas.",
    date: "2023-12-28",
    url: "https://example.com/evidence3",
    tags: ["mockery", "safe zone"]
  },
  {
    id: 4,
    title: "Hospital Bombing in Kharkiv Region",
    description: "Direct attack on clearly marked medical facility, violating international humanitarian law. Hospital was actively treating civilian patients.",
    date: "2023-12-15",
    url: "https://example.com/evidence4",
    tags: ["war crime", "safe zone"]
  },
  {
    id: 5,
    title: "School Destruction in Safe Zone",
    description: "Deliberate targeting of educational facility within designated civilian safe zone, occurring during school hours.",
    date: "2023-11-30",
    url: "https://example.com/evidence5",
    tags: ["women and children", "safe zone", "war crime"]
  },
  {
    id: 6,
    title: "Humanitarian Corridor Violation",
    description: "Russian forces opened fire on established humanitarian corridor despite agreed-upon ceasefire, targeting evacuating civilians.",
    date: "2023-11-20",
    url: "https://example.com/evidence6",
    tags: ["war crime", "safe zone"]
  },
  {
    id: 7,
    title: "Recorded Threats to Civilian Population",
    description: "Audio recording of Russian military personnel making explicit threats to civilian population, including mockery of humanitarian concerns.",
    date: "2023-10-15",
    url: "https://example.com/evidence7",
    tags: ["mockery", "safe zone"]
  },
  {
    id: 8,
    title: "Use of Cluster Munitions in Residential Area",
    description: "Documented use of cluster munitions in densely populated civilian area, causing widespread civilian casualties.",
    date: "2023-10-05",
    url: "https://example.com/evidence8",
    tags: ["war crime"]
  },
  {
    id: 9,
    title: "Civilian Shelter Targeting",
    description: "Direct attack on marked civilian shelter despite clear civilian markings and prior notification of civilian presence.",
    date: "2023-09-28",
    url: "https://example.com/evidence9",
    tags: ["war crime", "safe zone"]
  },
  {
    id: 10,
    title: "Treatment of Civilian Detainees",
    description: "Documentation of mistreatment and mockery of civilian detainees by Russian forces, including denial of basic necessities.",
    date: "2023-09-15",
    url: "https://example.com/evidence10",
    tags: ["mockery", "war crime"]
  }
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