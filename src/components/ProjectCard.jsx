import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a target="_blank" rel="noreferrer" href={project.link}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            Project Link
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
