// src/pages/writing/travel-diaries/making-the-most.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function MakingTheMost() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/goodbye-people-3');
 };

 return (
   <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
     <div className="mb-6">
       <button
         onClick={handleGoBack}
         className="text-sm text-gray-500 hover:text-gray-700 mb-1"
       >
         travel diaries
       </button>
       <div className="flex justify-between items-baseline">
         <h1 className="text-2xl font-bold text-gray-900">making the most of things</h1>
         <h4 className="text-sm font-medium">Bratislava, Slovakia</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/goodbye-people-2"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/goodbye-people-3"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         A tip to all, courtesy of Eron Lutterman: use Atlas Obscura.
       </p>

       <p>
         I was quite ill when I got to Bratislava. Negative COVID tests assured me it was just a mucus-inducing bug, and coming straight from Budapest, it's not necessarily unexpected. Even so, to play it the most safe, I opted to spend my first full day there alone. How do you find things to do when you're alone, need to be alone, and are in a new place? Atlas Obscura.
       </p>

       <p>
         It's a{' '}
         <a 
           href="https://www.atlasobscura.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           website
         </a>
         {' '}that provides off-the-beaten-path activities in a given city. I used it to guide my many-hours-long walk, and found some pretty awesome things.
       </p>

       <p>
         Unfortunately my photos pale in comparison to the photos available online, so I've provided links.
       </p>

       <ul className="list-none pl-0 space-y-2">
         <li>
           <p>
             <a 
               href="https://www.atlasobscura.com/places/cumil-the-sewer-worker" 
               className="text-blue-600 hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               Cumil the Sewer Worker
             </a>
             , peaking from the pipes beneath.
           </p>
         </li>
         <li>
           <p>
             A{' '}
             <a 
               href="https://www.atlasobscura.com/places/ufo-of-bratislava" 
               className="text-blue-600 hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               UFO
             </a>
             ?
           </p>
         </li>
         <li>
           <p>
             A{' '}
             <a 
               href="https://www.atlasobscura.com/places/most-snp" 
               className="text-blue-600 hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               bridge
             </a>
             {' '}to the UFO?
           </p>
         </li>
         <li>
           <p>
             The world's{' '}
             <a 
               href="https://www.atlasobscura.com/places/hotel-galeria-spirit" 
               className="text-blue-600 hover:underline"
               target="_blank"
               rel="noopener noreferrer"
             >
               brightest hotel
             </a>
             .
           </p>
         </li>
       </ul>

       <p>
         Just to name a few.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/goodbye-people-2"
         className="text-sm text-gray-500 hover:text-gray-700"
       >
         previous
       </Link>
       <button
         onClick={handleNavigateNext}
         className="text-sm text-gray-500 hover:text-gray-700"
       >
         next
       </button>
     </div>
   </div>
 );
}

export default withBlogSEO(MakingTheMost, {
  title: "making the most of things",
  location: "Bratislava, Slovakia",
  type: "travel"
});