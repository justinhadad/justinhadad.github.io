// src/pages/writing/travel-diaries/goodbye-people-2.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function GoodbyePeople2() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/making-the-most');
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
         <h1 className="text-2xl font-bold text-gray-900">goodbye people ?!</h1>
         <h4 className="text-sm font-medium">Budapest, Hungary</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/look-like-me"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/making-the-most"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I intended to write about impermanence. I'll do that first.
       </p>

       <p>
        When I was in Sevilla, I met Jaad. We struck conversation because we were both obviously Arab, and ended up playing chess and talking about his travels for a bit. One thing led to another and, as you{' '}
         <Link 
           to="/writing/travel-diaries/sevilla"
           className="text-blue-600 hover:underline"
         >
           already read
         </Link>
         , he buzzed my hair with his beard trimmer.
       </p>

       <p>
         In all likelihood he's gone forever. Our conversations mattered minimally beyond their impact on us when they happened, and after that they blend all non-dramatically into the rest of the nonsense I/we have done over the course of travel. That's not to say they don't linger a bit; to me it's kind of like the haircut (here's the silly metaphor): it sticks around for a little while, and your environment may remind you of it for around a month afterward, after which it's just a memory. Especially in modes of impermanence like these, it's all just memories.
       </p>

       <p>
         I woke up yesterday without my passport. I spent the day checking <em>7</em> different bars and clubs to find it, and, long story short, I found it on the floor of{' '}
         <a 
           href="https://instant-fogas.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Instant
         </a>
         , a top-5 most indecent place I've ever entered. So to honor the fact that Instant kept my passport safe, I went back.
       </p>

       <p>
         And I saw Jaad.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/look-like-me"
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

export default withBlogSEO(GoodbyePeople2, {
  title: "goodbye people (2)",
  location: "Budapest, Hungary",
  type: "travel"
});