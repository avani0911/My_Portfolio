import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";
import imga from "./assets/company-a.png";
import imgb from "./assets/company-b.png";
import imgc from "./assets/company-c.jpg";
import imge from "./assets/company-e.jpg";
import { motion } from "framer-motion";

const companyData = [
  {
    name: "Applied Cloud Computing",
    role: "AIML Intern",
    duration: "December 2024 - January 2025",
    description:
      "During my internship, I worked on a project to classify handwritten digits using the MNIST dataset. My main tasks were: Adding quadratic polynomial features to improve classification and comparing their accuracy with simple linear features. Checking how the regularization parameter changes when we use quadratic features instead of linear ones. Building and testing a neural network to see how it performs compared to logistic regression with polynomial features, both in accuracy and training time. Using K-means clustering to group similar images so that fewer labels were needed, making the labeling process faster and easier. Through this project, I gained practical experience in machine learning, feature engineering, model tuning, and clustering, helping me understand how different techniques impact performance and efficiency.",
    image: imga,
  },
  {
    name: "Azure Microsoft ReSkill Internship",
    role: "NLP Trainee",
    duration: "June 2024 - July 2024",
    description:
      "Completed a 30-day intensive NLP internship, delivering four real-world projects in book recommendations, sentiment analysis, diabetic detection, and data analysis. Achieved 95%+ accuracy in sentiment analysis using advanced NLP techniques. Gained hands-on experience with MindsDB and CloudML for model development and deployment.",
    image: imgb,
  },
  {
    name: "CodeAI",
    role: "Digital Media Manager and Tech Member",
    duration: "April 2024 - Present",
    description:
      "As the Digital Marketing Manager (DMM) of CodeAI, I lead the promotion and outreach efforts, ensuring our initiatives reach the right audience through strategic campaigns and content. Additionally, as a Tech Team Member, I am actively involved in building and optimizing CodeAI’s website, enhancing its functionality, and improving user experience to support the committee’s mission effectively.",
    image: imgc,
  },
  {
    name: "Prodigy Infotech",
    role: "Web Developer Intern",
    duration: "November 23 - December 23",
    description:
      "Contributed to the development of an internal tool using JavaScript, HTML, and CSS. Worked as a Web Development Intern, gaining hands-on experience in HTML, CSS, and JavaScript. Developed multiple projects, including a Weather App, implementing real-time API integration for accurate forecasts. Built interactive and responsive web applications, enhancing front-end functionality and user experience.",
    image: imge,
  },
];

const Experience = () => {
  return (
    <section id="Experience">
    <section className={styles.experienceSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Professional Journey
      </motion.h2>
      
      <motion.p
        className={styles.introduction}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        From coding challenges to real-world applications, my journey is built on hands-on learning and innovation explore the experiences that have shaped my path.
      </motion.p>
      
      <div className={styles.timelineContainer}>
        {companyData.map((company, index) => (
          <div key={index} className={styles.timelineWrapper}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

const CompanyCard = ({ company }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${styles.timelineEntry} ${inView ? styles.visible : ""}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={company.image}
          alt={company.name}
          className={styles.companyImage}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.companyName}>{company.name}</h3>
        <p className={styles.role}>{company.role}</p>
        <p className={styles.duration}>{company.duration}</p>
        <p className={styles.description}>{company.description}</p>
      </div>
    </div>
    
  );
};

export default Experience;