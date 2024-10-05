import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { PiSunDim } from "react-icons/pi";

const Navbar = ({ activeSection, scrollToSection, toggleDarkMode, darkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Somen Rajak
          </motion.h1>
          <div className="hidden md:flex items-center space-x-4">
            {["home", "projects", "skills", "contact"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section ? "text-blue-500" : "text-gray-400"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-500 transition duration-300"
            >
              {darkMode ? <PiSunDim size={35}/> : <FaMoon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-500 transition duration-300"
            >
              {darkMode ? <PiSunDim size={35}/> : <FaMoon size={20} />}
            </button>
            <button onClick={toggleMobileMenu} className="text-gray-700">
              {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            {["home", "projects", "skills", "contact"].map((section) => (
              <motion.button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  toggleMobileMenu();
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section ? "text-blue-500" : "text-gray-400"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;