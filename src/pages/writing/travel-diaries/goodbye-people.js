// src/pages/writing/travel-diaries/goodbye-people.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function GoodbyePeople() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/uncles');
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
         <h1 className="text-2xl font-bold text-gray-900">goodbye, people</h1>
         <h4 className="text-sm font-medium">Lisbon, Portugal</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/sevilla"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/uncles"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         Fried stingray later, we enjoyed a night on the roof. We sat around a table and talked about our journeys: some taking a year off work, others staying in the hostel until they find permanent work, others in university.
       </p>

       <p>
         After all the stories we share and lessons we take from them, all we have is just those: lessons from stories, and stories to speak of sometime thereafter. Besides that, this group (and probably, any of us) will never (at least spontaneously) find each other again.
       </p>

       <p>
         I asked the group if they felt the same was true. They said yes.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/sevilla"
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

export default withBlogSEO(GoodbyePeople, {
  title: "goodbye people",
  location: "Lisbon, Portugal",
  type: "travel"
});