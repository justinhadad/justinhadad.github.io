// src/pages/writing/loose-leaves/changing.js
import React from 'react';
import withBlogSEO from '../../../utils/withBlogSEO';

function Changing() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 prose prose-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">changing</h1>
      <div className="text-gray-600">
        <p className="italic text-sm mb-4">[5/2023]</p>
        
        <p className="text-sm text-gray-500 mb-6 italic">
          Proxime accessit, Balliol College's Gertrude Hartley Prize
        </p>

        <div className="whitespace-pre-line text-base">
          <p className="mb-6">
            <em>I see the shadow of things</em>, Oscar Wilde. That there is a spoonbill where that egret once was––fly away. Where we almost fell into the Thames after the night on St. Giles is now the garden diving inside itself, green into the firmament. John Ashbery: <em>Everything is like something else</em>. Isn't there a friction. Doesn't it say to hold everything in your veins. Under gray fog I first watched the clock dance inside Magdalen Tower and one day, as it will, ash––a hummingbird flies.
          </p>

          <p>
            How these changing things are charming: <em>It is completely unimportant</em>, Agatha Christie. Sometimes the first step to doing something is wanting to do it. Petronius (about the broken bottles): <em>Vitrea fracta et somniorum interpretamenta</em>. Sometimes these smooth rays demand a shadow ("how a shadow is, and is not"), where there is and is not––don't we have a choice. On the floodplain I can see God. I must (I must, I must) let it happen to me. Oh, it's mine, it flew away but the branch is mine, and then the poplar is mine, it's mine, I've seen it before––you and I, we've seen it before. Let it crawl atop your skin onto your limbs into your eyes on the grass in the meadows in the floodplain on the spoonbill into the tower back into the shadows into the grass into me. <em>Everything is like something else</em>. Everything is where something else used to be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withBlogSEO(Changing, {
  title: "changing",
  type: "blog",
});