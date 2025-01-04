// src/pages/writing/travel-diaries/sevilla.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Sevilla() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/goodbye-people');
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
         <h1 className="text-2xl font-bold text-gray-900">sevilla</h1>
         <h4 className="text-sm font-medium">Sevilla, Spain</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/barriers"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/goodbye-people"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I can do no better than to describe an individual moment in Sevilla. I had arrived maximally lost: this was my first time not on a friend's couch; I still could hardly communicate in Spanish, despite my efforts; and I had literally no idea what I was doing here. Surely I'll explore, surely I'll have fun, but just as much it's unclear: <em>what am I doing here?</em>
       </p>

       <p>
         I arrived at the hostel, said my hi's, and asked the volunteer for a lunch rec. She was excited by my ostensive excitement, and suggested I try the restaurant around the corner. Bodega Santa Cruz, forever incarnated in my feasty dreams, dreamy feasts.
       </p>

       <p>
         The waiter placed me outdoors and left me a menu. I decided to stall my anxiety by half-assedly describing in my journal the physical things in front of me: a couple popping champagne at an outdoor restaurant, a busker, the sunlight. As I wrote the waiter came back to my seat and said just two words: "Hungry, hungry!" I smiled, said "Hungry, hungry!" and rubbed my stomach; then he rubbed his own in turn, then we laughed and rubbed our stomachs and chanted "Hungry, hungry!" together. He asked if it was my first day, I said <em>si</em>, and he took the menu. "I will bring you my favorites," he said.
       </p>

       <p>
         As he walked away, I asked for water. He said no. "Beer, beer!" It was 10am, nonetheless I consented, nonetheless I ended up having three.
       </p>

       <p className="font-medium mt-6">Other brevities:</p>
       <ul className="list-none pl-0 space-y-4">
         <li>
           I met a man, Jaad, who looked like me (he was Lebanese) but better looking: taller, groomed beard, shaved head, etc. We chatted a bit, connecting over our heritage and travels, and, after some conversation about our hair (?), I asked if he wanted to shave my head. And so: Jaad used his beard trimmer to buzz my hair on the hostel's roof.
         </li>

         <li>
           I had a beautiful art session on the patio of{' '}
           <a 
             href="https://www.catedraldesevilla.es/" 
             className="text-blue-600 hover:underline"
             target="_blank"
             rel="noopener noreferrer"
           >
             Catedral de Sevilla
           </a>
           {' '}with Lizzy, a volunteer at the hostel, where I was spontaneously inspired to draw dragons.
         </li>

         <li>
           My necklace is still in Sevilla if you happen to find it.
         </li>

         <li>
           Travels are who you meet. I loved Sevilla in large part because I met cool people, perhaps the coolest of whom is Matt, who invited me to a Michelin-starred Spanish restaurant with him and toured the bar scene with me. More adventures from us in the future; luckily he's a Londonite, so we have some years ahead.
         </li>
       </ul>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/barriers"
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

export default withBlogSEO(Sevilla, {
  title: "sevilla",
  location: "Sevilla, Spain",
  type: "travel"
});