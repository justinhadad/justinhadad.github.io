// src/pages/writing/loose-leaves/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Changing from './changing';
import AshesToFallInLove from './ashes-to-fall-in-love';
import SheDevil from './she-devil';
import Easter from './easter';
import Witness from './witness';
import Leave from './leave';


// import BreakfastEnded from './breakfast-ended';

export default function LooseLeaves() {
  return (
    <Routes>
      <Route path="changing" element={<Changing />} />
      <Route path="ashes-to-fall-in-love" element={<AshesToFallInLove />} />
      <Route path="she-devil" element={<SheDevil />} />
      <Route path="easter" element={<Easter />} />
      <Route path="witness" element={<Witness />} />
      <Route path="leave" element={<Leave />} />


      {/* <Route path="breakfast-ended" element={<BreakfastEnded />} /> */}
    </Routes>
  );
}