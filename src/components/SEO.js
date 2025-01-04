import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
  image = '/default-preview.jpg', // You can set a default preview image
  pathname,
  keywords = [],
  isPublication = false // New prop for academic publications
}) => {
  const siteUrl = 'https://justinhadad.com';
  const siteTitle = 'Justin Hadad';
  const siteDescription = 'Justin Hadad is a graduate student in economic theory at the University of Oxford.';
  
  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`
  };

  // Enhanced schema for academic content
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': isPublication ? 'ScholarlyArticle' : 'WebPage',
    url: seo.url,
    name: seo.title,
    description: seo.description,
    author: {
      '@type': 'Person',
      name: 'Justin Hadad',
      affiliation: {
        '@type': 'Organization',
        name: 'University of Oxford'
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph Tags (used by LinkedIn, Slack, Facebook, etc) */}
      <meta property="og:type" content={isPublication ? 'article' : 'website'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  );
};

export default SEO;