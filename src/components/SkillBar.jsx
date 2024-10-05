import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ skill, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-lg`}
    >
      <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      <div className="relative pt-1">
        <div
          className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></motion.div>
        </div>
        <div className="text-right">
          <span
            className={`text-sm font-semibold inline-block ${darkMode ? "text-blue-400" : "text-blue-600"}`}
          >
            {skill.level}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
