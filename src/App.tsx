import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white">Loading Portfolio...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-all duration-500`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-all duration-500">
        <ScrollProgress />
        <Navigation darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="relative">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Certifications darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
      </div>
    </div>
  );
}

export default App;