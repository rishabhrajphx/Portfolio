import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import InteractiveAI from '../components/InteractiveAI';

const MnemosyneDemo = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen pt-20 flex items-center justify-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <InteractiveAI />
    </div>
  );
};

export default MnemosyneDemo; 