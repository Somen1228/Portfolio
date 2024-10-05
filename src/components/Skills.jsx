import React from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const Skills = ({ skills, darkMode }) => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
