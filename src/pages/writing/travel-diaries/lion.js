// src/pages/writing/travel-diaries/lion.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Lion() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/spaghetti');
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
         <h1 className="text-2xl font-bold text-gray-900">the saddest lion</h1>
         <h4 className="text-sm font-medium">Lucerne, Switzerland</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/swimming"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/spaghetti"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         Courtesy of{' '}
         <a 
           href="https://www.atlasobscura.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Atlas Obscura
         </a>
         , Michael, Nina, and I found the Lion of Lucerne, the two-hundred-year-old sandstone monument honoring the Swiss Guards killed in the French Revolution. Like most touristy expeditions, you follow a map until it's obvious where you're supposed to be. I looked down and around until I realized I was supposed to look up.
       </p>

       <p>
         The lion is dying or already dead, a spear broken in his back, the Swiss coat of arms in front of him. I read the Roman numerals – 760 died in the insurrection, 350 survived – and then noticed the French shield which the lion lied upon. The open, tilted mouth, the arched eyes, the left paw dangling, his tail beside him.
       </p>

       <p>
         I felt my heart drop and drop each moment I kept looking onward. Lost for words. The only things I've said about it I've placed here.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/swimming"
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

export default withBlogSEO(Lion, {
  title: "The Saddest Lion",
  location: "Lucerne, Switzerland",
  type: "travel"
});