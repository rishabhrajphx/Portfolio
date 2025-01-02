import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-white/30 py-4' : 'bg-white/50 py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="flex gap-6">
          <Link
            to="/contacts"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
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