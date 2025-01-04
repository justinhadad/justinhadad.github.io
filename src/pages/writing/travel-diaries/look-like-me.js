// src/pages/writing/travel-diaries/look-like-me.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function LookLikeMe() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/goodbye-people-2');
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
         <h1 className="text-2xl font-bold text-gray-900">people who look like me</h1>
         <h4 className="text-sm font-medium">Istanbul, Turkey</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/extra-shot"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/goodbye-people-2"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I've taken for granted that I'm never around people who look like me. Black hair, chest hair, facial hair that rides near my eyes, etc. etc. Sometimes it makes me sad and sometimes, after some concentration on how fruitful it is to be proud of where I come from and what I look like, it makes me happy. Turkey, captured in the words [below] of a few locals, taught me to always be happy about my culture – and if I didn't want to be, they would be happy for me.
       </p>

       <p>
         A waiter asked me where I was from. I said USA. He said "no, you're not USA, you're my brother. You're Turkey."
       </p>

       <p>
         When the clothier asked where I was ~really~ from, I said my family is Syrian. He said he knows Syrian when he sees it, and I'm "damned sure" not Syrian. "You're Turkish."
       </p>

       <p>
         When I asked the guy selling me a PCR test (I've never been more certain someone wasn't a medical professional) if he could speak English, he was stunned. "You look more Turkish than me, and I've never left Turkey."
       </p>

       <p>
         And on my way out, eating the baklava I left in my pocket overnight, I felt more community than I've felt after two-and-a-half months in Switzerland. Not that the Swiss aren't very kind and welcoming at times, but that it's hard to beat a community screaming that I'm one of them. And that internal feeling telling me I'd be happier around my family, that I've been missing out for 22 years – that feeling is hard to describe.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/extra-shot"
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

export default withBlogSEO(LookLikeMe, {
  title: "people who look like me",
  location: "Istanbul, Turkey",
  type: "travel"
});