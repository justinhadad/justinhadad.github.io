// src/pages/writing/travel-diaries/uncles.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Uncles() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/beautiful-homes');
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
         <h1 className="text-2xl font-bold text-gray-900">uncles</h1>
         <h4 className="text-sm font-medium">Prague, Czech Republic</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/goodbye-people"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/beautiful-homes"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         For my first meal in Prague I went to{' '}
         <a 
           href="https://www.porks.cz/"
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Pork's
         </a>
         , selling famous Czech dishes at standard Czech prices. (Incredibly cheap.) I shared with the waiter that it was my first time in this country, my first meal in this country, my first beer in this country; and he sat me over a daunting glass panel fending a gaping, gaping hole. He brought me pork knuckle – a huge fist of pork, really – and an on-the-house shot of Becherovka, typically used to welcome visitors or close out meals. I read about the drink; a bit of the history is akin to that of Coca Cola: from viable source{' '}
         <a 
           href="https://en.wikipedia.org/wiki/Becherovka"
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Wikipedia
         </a>
         , "only two people know the secret of the entire production process and are allowed to enter the Drogikamr room – where, once a week, they mix the herbs and spices used in the drink."
       </p>

       <p>
         But I was too wrapped up in the man next to me to ask more about the food. He was Portuguese, was traveling into Prague for the first time, and was a full-time cryptocurrency investor. <em>Fun</em> was his priority, and because Prague is a fun city, he made a week-long trip.
       </p>

       <p>
         In hindsight it feels moments like this one (a talk about Ethereum with a traveling stranger) consumed the trip. I wish I learned more about Prague's history in my few days there, but I felt so consumed by people. And a lot of those connections are hard to summarize here. All that's easy to share is that Lucy and Danny and I will hang out at Oxford.
       </p>

       <p>
         In the spirit of <em>people</em>, extended family is a tricky thing. I've kept most of my personal explorations into this topic off the interwebs, nonetheless (you imagine) they are incredibly important to me, nonetheless navigating their de facto importance (irrespective of the amount that I've interacted with them) has been nontrivial. To solve their placement in the hierarchy of priorities, I listen closely to how other people view extended family, especially when they don't live nearby.
       </p>

       <p>
         It turns out a friend of mine has an uncle in Prague. It turns out he – David - is courageous enough to pick up his North Carolina-founded life and move to the Czech Republic. We met over <em>makový koláček</em> and discussed the intentional foams placed on beer mugs, maade different sizes for different places around the world. We walked and talked and drank at a bookstore, and he told me about Buddhism and intentionality and consequentiality. About how life is best a function of exploration – when you go for the thing that you want, and what you'll regret not doing the most. I felt quite comfortable with him. And I hope that this is how I feel about my family as I meet more of them, and as I travel to places from which my family surely came.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/goodbye-people"
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

export default withBlogSEO(Uncles, {
  title: "uncles",
  location: "Prague, Czech Republic",
  type: "travel",
});
