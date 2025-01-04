// src/pages/writing/travel-diaries/spaghetti.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Spaghetti() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/letter-to-zurich');
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
         <h1 className="text-2xl font-bold text-gray-900">spaghetti</h1>
         <h4 className="text-sm font-medium">Zermatt, Switzerland</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/lion"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/letter-to-zurich"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         It's in Zermatt that I'm compiling many of these loose leaves. Now is my last weekend away from Zurich; this coming week is my last in Switzerland. Right now (forgive my present tense) I am drinking a glühwein outdoors enjoying Italian daylight, staring at the Matterhorn peak that establishes this village as an international must-see. Neehaar and Kiran are visiting me (and are skiing right now), Adelaide and Alex visited me last week, and every night of late has been bliss, with Celli, Luisa, Tom, Beatrice, and others. Periodically it sets in that I'm leaving (periodically it sets in that I was ever here) and now is one of those times.
       </p>

       <p>
         I've decided to write everything out. It's hard, you know; days are full and crazy and the gnarlier the day the less I write. Last night Neehaar, Kiran, and I went to an Italian restaurant at 1am, unfortunately interacted with (as was told to us) some Los Angeles actors (there is no clearer explanation), went to a live{' '}
         <a 
           href="https://cocoandthebutterfields.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           CoCo and The Butterfields
         </a>
         {' '}show (where Kiran spent far too much money on a vinyl, and where I got my neck signed), spent Kiran's company's money on chocolate, and got told by some kids that I "need to get prettier" so that I can get a girlfriend.
       </p>

       <p>
         Anyway, as I said, I've decided to write everything out. Here goes.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/lion"
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

export default withBlogSEO(Spaghetti, {
  title: "spaghetti",
  location: "Zermatt, Switzerland",
  type: "travel"
});