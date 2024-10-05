import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ activeSection, scrollToSection, toggleDarkMode, darkMode }) => {
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
          <div className="flex items-center space-x-4">
            {["home", "projects", "skills", "contact"].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section ? "text-blue-500" : ""
                }`}
              >
                {section}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-opacity-20 backdrop-filter backdrop-blur-lg"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
