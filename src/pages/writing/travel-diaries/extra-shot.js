// src/pages/writing/travel-diaries/extra-shot.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import withBlogSEO from '../../../utils/withBlogSEO';

function ExtraShot() {
 const navigate = useNavigate();

 const handleGoBack = () => {
   navigate('/writing/travel-diaries');
 };

 const handleNavigateNext = () => {
   navigate('/writing/travel-diaries/look-like-me');
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
         <h1 className="text-2xl font-bold text-gray-900">extra shot</h1>
         <h4 className="text-sm font-medium">Paris, France</h4>
       </div>
       <div className="mb-4">
         <Link
           to="/writing/travel-diaries/this-one-bar"
           className="text-sm text-gray-500 hover:text-gray-700 mr-4"
         >
           previous
         </Link>
         <Link
           to="/writing/travel-diaries/look-like-me"
           className="text-sm text-gray-500 hover:text-gray-700"
         >
           next
         </Link>
       </div>
     </div>

     <div className="space-y-4 text-gray-600">
       <p>
         I moved to Zurich safely and soundly – staying steadily still over the last month or so – but have been feeling awfully too at home in my one-person two-bedroom. Michael is in London and wanted to hang out over the weekend, so I decided to slowly drift my way there and catch him by Friday. Luckily Paris is somewhere in between. Ticket: bought.
       </p>

       <p>
         I arrived in Paris after spending a rainy day pasted against the night-train windowsill. The 10pm ETA, with a bit of a delay and a 90-minute walk to the hostel, means a short night if one at all. (No Ubers or cabs purchased in my travels yet!) I was ready to meet new people, but it <em>was</em> a little late, right?
       </p>

       <p>
         With depleted energy and a slanted <em>bonjour</em>, I checked in and was redirected swiftly to the bar lying in the center of the hostel. The bartender messed around with me for a bit (Do you always carry your toothbrush in your pocket?) before handing me a Kronenbourg. I told him my situation – got in late, wanted friends – and asked for a shortcut to meeting anyone around here that wasn't him. (At that point we were already friends; only later did I learn he was a{' '}
         <a 
           href="https://www.therestlessviking.com/" 
           className="text-blue-600 hover:underline"
           target="_blank"
           rel="noopener noreferrer"
         >
           viking
         </a>
         . Super cool guy.) I told him to keep his eyes peeled for some cool people, and he said he would have my back.
       </p>

       <p>
         I FaceTimed Eron from a corner table and updated him on my day. From across the room I heard a shout – Justin, Justin! – and it's a group of three waving me over. The story goes: They went to the bar and asked for three shots, with our buddy Moon (bartender; viking) telling them he'd give them an extra shot for free if they invited me over. They accepted, then I accepted. It was midnight.
       </p>

       <p>
         Viviane, Denise, Ronan and I opted to sit together after our introduction. We talked over jaeger and fries, about how the Netherlands were different from Ireland, about the bar where Ronan puked on the waiter last night. After much debate and adding a few lingering hostel-goers, we went back to Ronan's infamous palace – La Maison Blanche – and talked and drank and sat and talked. Two blinks and it was 5:30am.
       </p>

       <p>
         Other brevities: Cockroach in the food. Line for the Mona Lisa was way too long. Baguettes <em>are</em> that much better here.
       </p>
     </div>

     <hr className="my-6" />

     <div className="flex justify-between">
       <Link
         to="/writing/travel-diaries/this-one-bar"
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

export default withBlogSEO(ExtraShot, {
  title: "extra shot",
  location: "Paris, France",
  type: "travel",
  customDescription: "A late-night arrival in Paris leads to unexpected friendships at a hostel bar, featuring a viking bartender, new international friends, and classic Parisian experiences."
});