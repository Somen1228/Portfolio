import React from "react";
import { motion } from "framer-motion";

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold mb-4">Full Stack Developer</h2>
        <p className="text-xl mb-8">
          Infusing creativity into code to create web experiences that resonate!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
