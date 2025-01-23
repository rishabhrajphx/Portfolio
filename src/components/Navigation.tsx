import { useState, useEffect, useRef } from 'react';
import { Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

export const Navigation = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? darkMode 
            ? 'bg-gray-900/30' 
            : 'bg-white/30' 
          : darkMode 
            ? 'bg-gray-900/50' 
            : 'bg-white/50'
      } ${darkMode ? 'text-white' : 'text-gray-900'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="flex gap-6">
          <div className="relative" ref={dropdownRef}>
            <span
              className="cursor-pointer transition-colors hover:text-primary text-base"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Web Projects
            </span>
            {isDropdownOpen && (
              <div className={`absolute left-0 top-full mt-2 rounded-lg shadow-lg py-2 min-w-[200px] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <Link
                  to="/job-portal"
                  className={`block px-4 py-2 transition-colors text-base ${
                    darkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Job Application Portal
                </Link>
                <Link
                  to="/mnemosyne-demo"
                  className={`block px-4 py-2 transition-colors text-base ${
                    darkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Mnemosyne Demo
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contacts"
            className="transition-colors hover:text-primary text-base"
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 transition-colors text-xl ${
            darkMode 
              ? 'text-yellow-300' 
              : 'text-gray-700'
          }`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
    </BrowserRouter>
  );
}