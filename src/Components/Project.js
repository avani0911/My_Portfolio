import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Project.module.css";
import proj1 from "./assets/project1.jpg";
import proj2 from "./assets/project2.png";
import proj3 from "./assets/project3.png";
import proj4 from "./assets/project4.jpg";
import proj5 from "./assets/project5.png";
import proj6 from "./assets/project6.png";
import proj7 from "./assets/project7.png";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Remindify",
    description: "Smart Location Based Reminder App for scheduling and productivity. ",
    image: proj1,
    link: "https://github.com/avani0911/Remindify",
  },
  {
    title: "ClubConnect",
    description: "One-stop communication and management medium for all College Clubs.",
    image: proj2,
    link: "https://github.com/avani0911/ClubConnect",
  },
  {
    title: "Data Structure Virtual Lab",
    description: "An interactive platform combining data science experiments and quizzes to enhance learning through hands-on practice and knowledge testing.",
    image: proj3,
    link: "https://github.com/avani0911/studylab",
  },
  {
    title: "TextUtils",
    description: "A simple React application used for text manipulation.",
    image: proj4,
    link: "https://github.com/avani0911/TextUtils",
  },
  {
    title: "Book Recommendation System",
    description: "An AI-powered book recommendation system that suggests personalized reads based on user preferences.",
    image: proj5,
    link: "https://github.com/avani0911/Internship-2024/tree/main/Project4-%20Book%20Recommendation%20System",
  },
  {
    title: "Diabetes Prediction System",
    description: "An AI-driven diabetes prediction system that analyzes health data to assess risk and provide early warnings.",
    image: proj6,
    link: "https://github.com/avani0911/Internship-2024/tree/main/Project3-%20Diabetes%20Prediction%20%26%20Analysis",
  },
  {
    title: "Sentiment Analysis",
    description: "An AI-powered sentiment analysis system that interprets text to determine emotions and opinions.",
    image: proj7,
    link: "https://github.com/avani0911/Internship-2024/tree/main/Project1-%20Sentiment%20Analysis",
  },
];

const Projects = () => {
  return (
    <section id="Project">
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <motion.p
        className={styles.liner}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bringing ideas to life through code explore the projects that blend innovation, creativity, skills and passion.
      </motion.p>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${inView ? styles.visible : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.projectImage} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a href={project.link} className={styles.projectButton}>
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projects;
