// src/pages/writing/travel-diaries/beautiful-homes.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function BeautifulHomes() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/this-one-bar');
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
         <h1 className="text-2xl font-bold text-gray-900">beautiful homes</h1>
         <h4 className="text-sm font-medium">Munich, Germany</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/uncles"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/this-one-bar"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         In Munich I learned about people's homes. Melissa lives in Canada and plants trees and Kathi wrote a textbook based in German practice and Marcus misses Arizona and Zoë breathes Prague. Mark served in Afghanistan and told me unrepeatable stories and then said Texas is hell. Alfonso covered my drinks because paying it forward is the most important thing, Emmanuel told me to stay at his parents house laid against the Alps because they want to meet me. The corner store-owner told me to never come back and then smiled when I came back.
       </p>

       <p>
         Some pictures that collage:
       </p>

       <p>
         Banana bread and ice cream and coffee and Kathi.
       </p>
       <img 
         src="/images/Kathy.jpeg" 
         alt="Kathi and the 'nanas."
         className="w-full mb-4"
       />

       <p>
         Californian food because Marcus couldn't get enough.
       </p>
       <img 
         src="/images/marcus.jpg" 
         alt="Burritos baby"
         className="w-full mb-4"
       />

       <p>
         Noodle in a tree to last forever, courtesies to Melissa.
       </p>
       <img 
         src="/images/noodle.jpeg" 
         alt="Noodle still there?"
         className="w-full mb-4"
       />

       <p>
         And a quote from <em>The Song of Achilles</em> I enjoyed:
       </p>
       
       <p className="italic">
         I stopped watching for ridicule, the scorpion's tail hidden in his words. He said what he meant; he was puzzled if you did not. Some people might have mistaken this for simplicity. But is it not a sort of genius to cut always to the heart?
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/uncles"
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

export default withBlogSEO(BeautifulHomes, {
  title: "beautiful homes",
  location: "Munich, Germany",
  type: "travel"
});