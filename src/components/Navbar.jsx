import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { PiSunDim } from "react-icons/pi";
import profilePicture from "../assets/profile-pic.jpg";

const Navbar = ({ activeSection, scrollToSection, toggleDarkMode, darkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-lg w-full">
      <div className="w-full flex justify-between items-center px-4 lg:px-8 py-3">
        {/* Left: Profile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <img
            src={profilePicture}
            alt="profile-pic"
            className="rounded-full w-10 h-10"
          />
          <h2 className="text-xl font-bold">Somen Rajak</h2>
        </motion.div>

        {/* Middle: Links for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          {["home", "projects", "skills", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === section ? "text-blue-500" : "text-gray-400 hover:text-white"
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
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            {darkMode ? <PiSunDim size={35} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Right: Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            {darkMode ? <PiSunDim size={35} /> : <FaMoon size={20} />}
          </button>
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          {["home", "projects", "skills", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => {
                scrollToSection(section);
                toggleMobileMenu();
              }}
              className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 ${
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
    </nav>
  );
};

export default Navbar;
