import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub, FaDatabase, FaBrain, FaChartBar } from 'react-icons/fa';  // Importing necessary icons
import styles from "./Skills.module.css";
import fig from './assets/figma-logo.png'; 
import vs from './assets/vscode-logo.jpg';
import jp from './assets/bootstrap-logo.jpg';

// Icons mapping for skills
const skillIcons = {
  "JavaScript": <FaJs style={{ color: "#f0db4f", fontSize: "18px" }} />,  
  "CSS": <FaCss3Alt style={{ color: "#2965f1", fontSize: "18px" }} />,  
  "React.js": <FaReact style={{ color: "#61dafb", fontSize: "18px" }} />,  
  "Bootstrap": <img src={jp} alt="Bootstrap" style={{ width: "18px", height: "18px" }} />,  
  "HTML": <FaHtml5 style={{ color: "#e34c26", fontSize: "18px" }} />,  
  "Next.js": <FaReact style={{ color: "#000000", fontSize: "18px" }} />,  
  "Flutter": <FaNodeJs style={{ color: "#02569B", fontSize: "18px" }} />,  
  "Python": <FaPython style={{ color: "#3776ab", fontSize: "18px" }} />,  
  "Node.js": <FaNodeJs style={{ color: "#68a063", fontSize: "18px" }} />,  
  "Express.js": <FaNodeJs style={{ color: "#68a063", fontSize: "18px" }} />,  
  "PHP": <FaReact style={{ color: "#8993be", fontSize: "18px" }} />,  
  "Django": <FaPython style={{ color: "#092e20", fontSize: "18px" }} />,  
  "MySQL": <FaDatabase style={{ color: "#00758f", fontSize: "18px" }} />,  
  "PostgreSQL": <FaDatabase style={{ color: "#336791", fontSize: "18px" }} />,  
  "MongoDB": <FaDatabase style={{ color: "#47a248", fontSize: "18px" }} />,  
  "Firebase": <FaReact style={{ color: "#ffca28", fontSize: "18px" }} />,  
  "NumPy": <FaPython style={{ color: "#313131", fontSize: "18px" }} />,  
  "Matplotlib": <FaPython style={{ color: "#3e3e3e", fontSize: "18px" }} />,  
  "TensorFlow": <FaPython style={{ color: "#ff6f00", fontSize: "18px" }} />,  
  "Pandas": <FaPython style={{ color: "#150b15", fontSize: "18px" }} />,  
  "Scikit-Learn": <FaPython style={{ color: "#f2aa4c", fontSize: "18px" }} />,  
  "Google Colab": <FaPython style={{ color: "#0f9d58", fontSize: "18px" }} />,  
  "Jupyter": <FaPython style={{ color: "#f37626", fontSize: "18px" }} />,  
  "NLP": <FaBrain style={{ color: "#ff8c00", fontSize: "18px" }} />,  
  "VS Code": <img src={vs} alt="VS Code" style={{ width: "18px", height: "18px" }} />,  
  "PyCharm": <FaPython style={{ color: "#1b7037", fontSize: "18px" }} />,  
  "Figma": <img src={fig} alt="Figma" style={{ width: "25px", height: "25px" }} />,  
  "GitHub": <FaGithub style={{ color: "#181717", fontSize: "18px" }} />,  
  "Tableau": <FaChartBar style={{ color: "#e97600", fontSize: "18px" }} />,  
  "Git": <FaGithub style={{ color: "#f1502f", fontSize: "18px" }} />,  
  "C++": <FaLaptopCode style={{ color: "#00599C", fontSize: "18px" }} />,  
};

const skillsData = [
  {
    category: "Frontend",
    skills: ["JavaScript", "CSS", "React.js", "Bootstrap", "HTML", "Next.js", "Flutter"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "C++", "Firebase", "MySQL", "Express.js", "MongoDB", "Django", "PHP", "PostgreSQL", "Python"],
  },
  {
    category: "AIML",
    skills: ["NumPy", "Matplotlib", "TensorFlow", "Pandas", "Scikit-Learn", "Python", "Google Colab", "Jupyter", "NLP"],
  },
  {
    category: "Others",
    skills: ["VS Code", "PyCharm", "Figma", "GitHub", "Tableau", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="Skills">
    <section className={styles.skillsSection}>
      <motion.h2
        className={styles.skillsTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <p className={styles.skillsDescription}>
        I craft dynamic web solutions with a strong foundation in frontend, backend, and AI/ML turning ideas into functional, scalable, and intelligent applications.
      </p>
      <div className={styles.skillsContainer}>
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className={styles.skillCategory}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillIconsContainer}>
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className={styles.skillIcon}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={styles.skillIconContainer}>
                    <span className={styles.icon}>{skillIcons[skill]}</span>
                    <span>{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default Skills;
