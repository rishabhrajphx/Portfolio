import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const MnemosyneDemo = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen pt-20 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        {/* Content will go here */}
      </div>
    </div>
  );
};

export default MnemosyneDemo; 