import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`py-8 px-4 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section - Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Vignesh Gade. All rights reserved.
        </div>

        {/* Center Section - Quick Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/vigneshgade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vigneshgade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/vigneshgade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:vigneshgade769@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
