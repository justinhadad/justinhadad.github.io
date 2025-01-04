// src/pages/writing/travel-diaries/this-one-bar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function ThisOneBar() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/extra-shot');
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
         <h1 className="text-2xl font-bold text-gray-900">this one bar</h1>
         <h4 className="text-sm font-medium">Kempten, Germany</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/beautiful-homes"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/extra-shot"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I'm spending time in Kempten, Germany – 70,000 people big – to chill out a bit. Life has been hectic.
       </p>

       <p>
         I have the (remote) interview for the Rhodes scholarship in a few days, and I have no idea where I'm going to do it. I'm nervous about performing well but feeling slightly detached; I'm confident graduate school at Oxford isn't the wrong choice, but I'm certain it isn't the <em>only</em> right one either. I've fallen for all the projects I've ever worked on – if this doesn't work out, I'll open my doors again.
       </p>

       <p>
         I've been reading and walking and talking to myself in this tiny town. I got a cheap suit from the local H&M, a turtleneck for fun and for our social hour, and a pair of socks because it's been getting colder. (May the Chacos hibernate well.) A quick thought: Considering solely the extremes, the small-town/big-city dichotomy is a bit tricky. Here I feel at home, I feel people will match my energy when I excitedly ask about their means of growing up and old. In big cities there's an ever-impending need to do; and though I like to do, I'm not sure I like being told to do. Perhaps the{' '}
         <Link 
           to="/biking/day15"
           className="text-blue-600 hover:underline"
         >
           D.C.-Richmond
         </Link>
         {' '}post is worth resurfacing.
       </p>

       <p>
         The I'm-kinda-tired-do-I-drink-an-espresso decision at 9pm has an inconsistent solution. Last night I popped into{' '}
         <a 
           href="https://nova-kempten.de/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           NOVA
         </a>
         {' '}(because it was the only place I saw with lights on at 9pm) and asked for a coffee. And before I knew it, Annika offered me her apartment to take my interview, and Peter told me about translating for the UN and about how homey small places get.
       </p>

       <p>
         So much for prep.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/beautiful-homes"
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

export default withBlogSEO(ThisOneBar, {
  title: "this one bar",
  location: "Kempten, Germany",
  type: "travel"
});