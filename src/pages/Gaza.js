import React from 'react';
import QuotesCarousel from '../components/QuotesCarousel'; // adjust path based on your file structure

export default function Gaza() {
    return (
        <div className="max-w-2xl mx-auto px-4"> {/* matching your About page styling */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Gaza</h2>
                <p className="mb-4">Your introductory content here</p>
            </div>
            
            <QuotesCarousel />
            
            <div className="mt-6">
                <p>Additional content after the carousel</p>
            </div>
        </div>
    );
}