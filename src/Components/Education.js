import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";
import clg1 from "./assets/clg1.png";
import clg2 from "./assets/clg2.png";
import clg3 from "./assets/clg3.png";
import { motion } from "framer-motion";

const educationData = [
    {
        institution: "KJ Somaiya Institute of Technology",
        degree: "B Tech in Computer Engineering",
        duration: "2022 - Present",
        grade: "Current GPA: 9.16",
        image: clg1,
        description: "Pursuing a Bachelor's in Computer Engineering, where I am gaining expertise in core subjects such as Computer Networks, Operating Systems, Database Management Systems (DBMS), and Object-Oriented Programming (OOP) and More. Additionally, I am enrolled in a specialized Honours degree in AI and Machine Learning, focusing on Natural Language Processing, Deep Learning, and advanced AI techniques.",
      },

  {
    institution: "SK Somaiya Vinay Mandir,Junior College",
    degree: "HSC (Xll) Science with Bifocal Subject as Computer Technology",
    duration: "2020 - 2022",
    grade: "HSC Percentage: 70%",
    image: clg2,
    description: "I studied Science with Computer technology in SK Somaiya Vinay Mandir, Junior College and Completed my class 12th in year 2022.",
  },
  {
    institution: "Shree Mavli Mandal High School,Thane",
    degree: "SSC(X)",
    duration: "2008 - 2020",
    grade: "Grade: 89.8%",
    image: clg3,
    description: "I completed my class Xth from Shree Mavli Mandal High School, Thane.",
  },
];

const Education = () => {
  return (
    <section id="Education">
    <section className={styles.educationSection}>
      <h2 className={styles.title}>My Education Journey</h2>
      <motion.p
              className={styles.eduliner}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building a strong foundation with knowledge and expertise explore my academic journey that fuels my professional growth.
            </motion.p>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
      
    </section>
    </section>
  );
};

const EducationCard = ({ edu, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.visible : ""}`}>
      <div className={styles.connector}></div>
      <div className={styles.iconWrapper}>
        <FaGraduationCap className={styles.icon} />
      </div>
      <img src={edu.image} alt={edu.institution} className={styles.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.institution}>{edu.institution}</h3>
        <p className={styles.degree}>{edu.degree}</p>
        <p className={styles.duration}>{edu.duration}</p>
        <p className={styles.grade}>{edu.grade}</p>
        <p className={styles.description}>{edu.description}</p>
      </div>
    </div>
  );
};

export default Education;
