import "./index.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleFormChange = (e) => {
      const tagName = e.target.id;
      const tagValue = e.target.value;
  
      setUserData({ ...userData, [tagName]: tagValue });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendEmail();
    };
  
    const sendEmail = () => {
      emailjs
        .send(import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_TEMPLATE_KEY, userData, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(() => {
          message.success("Message Sent Successfully!", 3);
          setTimeout(() => {
            message.success("Thank you for connecting with us!", 3);
          }, 2);
        })
        .catch((err) => {
          message.error("Something went wrong! Please try again later!");
        });
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ["home", "projects", "skills", "contact"];
        const scrollPosition = window.scrollY;
  
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const toggleDarkMode = () => setDarkMode(!darkMode);
  
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const projects = [
      {
        name: "Moviease - Movie Show Booking",
        description:
          "MoviEase is a full-stack MERN application designed to simplify online movie show ticket booking. It combines a powerful backend with an engaging and intuitive frontend to deliver a seamless user experience. Whether on desktop or mobile, users can easily browse movies, check showtimes, and book tickets with just a few clicks.",
        technologies: [
          "Javascript",
          "React.js",
          "Tailwind CSS",
          "Ant-Design",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "Stripe",
        ],
        image: "./src/assets/movie-booking.png",
        link: "https://moviease.onrender.com"
      },
      {
        name: "Kandoo - Kanban Board",
        description:
          "KanDoo is a project management tool built using React.js, Tailwind CSS, uuid, and React Icons. It enables users to create and manage multiple boards for different projects, track tasks, and organize their workflow efficiently. It provides all the necessary functionalities and features that enhance the task management experience.",
        technologies: [
          "Javascript",
          "React.js",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "Context-API",
        ],
        image: "./src/assets/to-do-list.png",
        link: "https://kandoo.netlify.app/"
      },
      {
        name: "Calc - Calculator",
        description:
          "This is a responsive calculator web application that supports basic arithmetic operations and keeps a history of calculations. The application features a clean and modern design with support for light and dark modes, and it is built using HTML, CSS, Tailwind CSS, and JavaScript.",
        technologies: ["Javascript", "HTML", "CSS", "Tailwind", "UUID"],
        image: "./src/assets/calc.jpg",
        link: "https://sonic-calc.netlify.app"
      },
    ];
  
    const skills = [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ];

  return (
    <div className={` px-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-all`}>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Home scrollToSection={scrollToSection} />
      <Projects projects={projects} darkMode={darkMode} />
      <Skills skills={skills} darkMode={darkMode} />
      <Contact userData={userData} handleFormChange={handleFormChange} handleSubmit={handleSubmit} darkMode={darkMode} />
    </div>
  );
};

export default App;
