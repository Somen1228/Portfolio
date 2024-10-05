import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ projects, darkMode }) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
