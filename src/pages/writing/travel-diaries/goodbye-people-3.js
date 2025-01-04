// src/pages/writing/travel-diaries/goodbye-people-3.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function GoodbyePeople3() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/swimming');
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
         <h1 className="text-2xl font-bold text-gray-900">goodbye people ?!?!?!</h1>
         <h4 className="text-sm font-medium">Vienna, Austria</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/making-the-most"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/swimming"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I mentioned I met{' '}
         <Link 
           to="/writing/travel-diaries/beautiful-homes"
           className="text-blue-600 hover:underline"
         >
           Zoë and Melissa
         </Link>
         {' '}in Munich some time ago. The three of us have kept up over WhatsApp, periodically checking in with life updates: Zoë isn't totally opposed to leaving her teaching position in Prague, Melissa will plant trees again soon.
       </p>

       <p>
         I mentioned I was in Slovakia and heading back to Zürich in 12 hours. Turns out Zoë was taking vacation in Vienna, double-digit kilometers away from me, and had dreams of getting Ma Belle for lunch in a few hours.
       </p>

       <p>
         So we did this:
       </p>
       
       <img 
         src="/images/zoe.jpg" 
         alt="Seeing Zoë after a spontaneous train to Vienna."
         className="w-full"
       />
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/making-the-most"
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

export default withBlogSEO(GoodbyePeople3, {
  title: "goodbye people (3)",
  location: "Vienna, Austria",
  type: "travel"
});