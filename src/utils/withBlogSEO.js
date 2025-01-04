// src/utils/withBlogSEO.js
import React from 'react';
import SEO from '../components/SEO';

const withBlogSEO = (WrappedComponent, seoProps) => {
  return function WithBlogSEO(props) {
    const {
      title,
      location = '',
      type = 'blog',
      customDescription = ''
    } = seoProps;

    // Base keywords that apply to all your writing
    const baseKeywords = ['Justin Hadad', 'personal writing', 'creative writing'];
    
    // Add specific keywords based on content type
    const typeKeywords = {
      'travel': ['travel writing', 'travel diary', 'European travel', location, `visiting ${location}`],
      'bike': ['East Coast Greenway', 'bike journey', 'cycling blog', 'East Coast biking'],
      'blog': ['personal essay', 'reflections', 'creative writing']
    };

    const description = customDescription || 
      (location ? 
        `Personal reflections and experiences from ${location}. Written by Justin Hadad.` : 
        `${title} - A personal essay by Justin Hadad.`);

    return (
      <>
        <SEO 
          title={title}
          description={description}
          pathname={window.location.pathname}
          keywords={[...baseKeywords, ...(typeKeywords[type] || [])]}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withBlogSEO;