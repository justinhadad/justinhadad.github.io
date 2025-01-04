// src/pages/writing/travel-diaries/swimming.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function Swimming() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/lion');
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
         <h1 className="text-2xl font-bold text-gray-900">swimming</h1>
         <h4 className="text-sm font-medium">Lausanne, Switzerland</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/goodbye-people-3"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/lion"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         Market design is not an especially large field. So when an interested student (read: me) comes along, it seems people like to help out.
       </p>

       <p>
         Advisor{' '}
         <a 
           href="https://kylewoodward.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Kyle
         </a>
         {' '}looped me in on an email including{' '}
         <a 
           href="https://poole.ncsu.edu/people/tsmorril/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Thayer
         </a>
         , market-design economist at NC State. Thayer learned I was in Switzerland and told me to meet up with{' '}
         <a 
           href="https://www.bklaus.net/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           Bettina
         </a>
         , a theorist out of Lausanne, who he said was very, very awesome.
       </p>

       <p>
         Bettina and I bantered briefly over email before figuring out the best day I could stop by and see her. Eventually we found a time – a clear-skied Friday afternoon – and we teased a few ideas: meeting her students, sharing research ideas; and she joked about another, namely <em>swimming in the near-freezing Lake Geneva water</em>. Little did she know I would accept.
       </p>

       <p>
         I could barely stand the water – literally, I could barely stand in the water – but I lasted a good few seconds while she swam her daily ten-or-so minutes. More important than the swim was the view: clear waters barricaded by the Alps and a beautiful sunset. 
      </p>
        <p>
         Bettina showed me around Lausanne, cooked me TooGoodToGo romanesco, made fun of the way I ate, introduced me to her students, and enjoyed a G&T with me on her balcony overlooking the city. If this is academia, I'm (probably) in.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/goodbye-people-3"
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

export default withBlogSEO(Swimming, {
  title: "swimming",
  location: "Lausanne, Switzerland",
  type: "travel"
});