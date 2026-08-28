import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import MatchingAnimation from "./components/MatchingAnimation";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Writing from "./pages/writing";
import Experience from "./pages/Experience";
import RouteHandler from "./components/RouteHandler";
import GoogleAnalytics from "./components/GoogleAnalytics";



function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteHandler /> {/* Add the RouteHandler here */}
      <GoogleAnalytics /> {/* Add this line */}
      <div className="min-h-screen bg-white flex flex-col">
        <div className="w-full">
          <MatchingAnimation />
        </div>
        <div className="sticky top-0 z-50 bg-white">
          <Navigation />
        </div>
        <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/writing/*" element={<Writing />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
