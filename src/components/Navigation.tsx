import { useState, useEffect } from 'react';

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold">
          Portfolio
        </a>
        <div className="flex gap-6">
          <a
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};