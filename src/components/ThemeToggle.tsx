import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className="fixed top-20 right-4 z-40 w-12 h-12 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/50 transition-all duration-300"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;