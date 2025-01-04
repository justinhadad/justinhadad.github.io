import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Importing menu and close icons

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseStyles = "relative px-4 py-2 text-base text-gray-600 transition-all duration-200 ease-in-out";
  const hoverStyles = "hover:text-gray-900 hover:bg-gray-50";
  const activeStyles = "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600";

  const getLinkStyles = (path) => {
    return `${baseStyles} ${hoverStyles} ${location.pathname === path ? activeStyles : ''}`;
  };

  // Divider component
  const Divider = ({ color }) => (
    <div className={`w-0.5 h-6 self-center ${color} hidden md:block`} />
  );

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between items-center py-3">
          <Link to="/" className="text-l font-bold text-gray-800">Justin Hadad</Link>
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation - Desktop and Mobile */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block
          ${isMenuOpen ? 'absolute left-0 right-0 bg-white shadow-lg' : ''}
        `}>
          <div className={`
            ${isMenuOpen 
              ? 'flex flex-col items-stretch' 
              : 'flex justify-center items-center'
            } 
          `}>
            {/* Navigation Links */}
            <Link 
              to="/" 
              className={`
                ${getLinkStyles('/')} 
                ${isMenuOpen 
                  ? 'text-center py-3 border-b' 
                  : ''
                }
              `}
              onClick={isMenuOpen ? toggleMenu : undefined}
            >
              home
            </Link>
            {!isMenuOpen && <Divider color="bg-[#002147]" />}
            
            <Link 
              to="/about" 
              className={`
                ${getLinkStyles('/about')} 
                ${isMenuOpen 
                  ? 'text-center py-3 border-b' 
                  : ''
                }
              `}
              onClick={isMenuOpen ? toggleMenu : undefined}
            >
              about
            </Link>
            {!isMenuOpen && <Divider color="bg-[#4B9CD3]" />}
            
            <Link 
              to="/research" 
              className={`
                ${getLinkStyles('/research')} 
                ${isMenuOpen 
                  ? 'text-center py-3 border-b' 
                  : ''
                }
              `}
              onClick={isMenuOpen ? toggleMenu : undefined}
            >
              research
            </Link>
            {!isMenuOpen && <Divider color="bg-[#BB0000]" />}
            
            <Link 
              to="/writing" 
              className={`
                ${getLinkStyles('/writing')} 
                ${isMenuOpen 
                  ? 'text-center py-3 border-b' 
                  : ''
                }
              `}
              onClick={isMenuOpen ? toggleMenu : undefined}
            >
              writing
            </Link>
            {!isMenuOpen && <Divider color="bg-[#590404]" />}
            
            <Link 
              to="/experience" 
              className={`
                ${getLinkStyles('/experience')} 
                ${isMenuOpen 
                  ? 'text-center py-3 border-b' 
                  : ''
                }
              `}
              onClick={isMenuOpen ? toggleMenu : undefined}
            >
              experience
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}