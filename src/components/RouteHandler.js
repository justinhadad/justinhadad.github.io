import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RouteHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleRedirect = () => {
      // Get the current path without leading slash
      const path = window.location.pathname.replace(/^\//, '');
      
      if (!window.location.hash && path) {
        // Main page mappings
        const mainRoutes = {
          'about.html': '/about',
          'experience.html': '/experience',
          'index.html': '/',
          'contact.html': '/contact',
          'writing.html': '/writing'
        };

        // Bike trip pages
        const bikeRoutes = {
          'biking.html': '/writing/bike-trip',
          'bikingbrews.html': '/writing/bike-trip/brews',
          'bikingcoffee.html': '/writing/bike-trip/coffee',
          'bikingrestaurants.html': '/writing/bike-trip/restaurants',
          'bikingvaria.html': '/writing/bike-trip/varia',
          'terminus.html': '/writing/bike-trip/terminus'
        };

        // Travel diary mappings
        const travelRoutes = {
          'day1.html': '/writing/travel-diaries/day1',
          'day4.html': '/writing/travel-diaries/day4',
          'day11.html': '/writing/travel-diaries/day11',
          'day15.html': '/writing/travel-diaries/day15',
          'day22.html': '/writing/travel-diaries/day22',
          'day29.html': '/writing/travel-diaries/day29',
          'day39.html': '/writing/travel-diaries/day39',
          'day43.html': '/writing/travel-diaries/day43'
        };

        // Loose leaves mappings
        const looseRoutes = {
          'ashes.html': '/writing',
          'shedevil.html': '/writing/loose-leaves/she-devil',
          'quotes.html': '/'
        };

        // Combine all route mappings
        const routeMap = {
          ...mainRoutes,
          ...bikeRoutes,
          ...travelRoutes,
          ...looseRoutes
        };

        const newRoute = routeMap[path];
        
        if (newRoute) {
          navigate(newRoute);
        } else {
          // If no direct match, check if it's in a subfolder
          const folder = path.split('/')[0];
          if (folder === 'writing' || folder === 'bike-trip' || folder === 'travel-diaries' || folder === 'loose-leaves') {
            navigate(`/${path}`);
          }
        }
      }
    };

    handleRedirect();
  }, [navigate, location]);

  return null;
};

export default RouteHandler;