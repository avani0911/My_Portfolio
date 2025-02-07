import React from "react";
import styles from "./Content.module.css";
import { ReactTyped } from "react-typed";
import profileImage from "./assets/avaniimage.png";
import { FaLinkedin, FaEnvelope, FaGithub, FaDownload } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <section id="Content">
    <div className={styles.profileSection}>
      <button className={styles.helloButton}>Hello!</button>

      <h1 className={styles.title}>
        I'm <span className={styles.highlight}>Avani,</span>
        <br />
        &nbsp;
        <ReactTyped
          strings={[
            "Software Engineer",
            "Full-Stack Developer",
            "Tech Enthusiast",
            "UI/UX Designer",
            "AIML Engineer",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </h1>

      <div className={styles.contentContainer}>
        {/* Left Side - Quote & Social Icons */}
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            "Passionate about engineering with a focus on building innovative and impactful solutions."
          </p>
          <br />
          <div className={styles.icons}>
  <a href="https://www.linkedin.com/in/avani-mahadik-b10674299/" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
    <FaLinkedin className={styles.icon} /> <span>LinkedIn</span>
  </a>
  <a href="mailto:avani.mahadik2020@gmail.com" className={styles.iconButton}>
    <FaEnvelope className={styles.icon} /> <span>Mail</span>
  </a>
  <a href="https://github.com/avani0911" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
    <FaGithub className={styles.icon} /> <span>GitHub</span>
  </a>
</div>
        </div>

        {/* Center - Image with Blue Circle */}
        <div className={styles.imageContainer}>
          <div className={styles.blueCircle}></div>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>

        {/* Right Side - CGPA, Degree & Download CV */}
        <div className={styles.detailsContainer}>
          <div className={styles.rating}>
            <span className={styles.stars}>⭐⭐⭐⭐</span>
            <span className={styles.cgpa}>9.16 CGPA</span>
          </div>
          <p className={styles.degree}>B.Tech Computer Engineer</p>
          <br/>
          {/* Download CV Button */}
          <a href="https://drive.google.com/file/d/1yfRXL48FThl296urRaugrG9RHXE-Niiw/view?usp=sharing" download className={`${styles.iconButton} ${styles.narrowButton}`}>
      <FaDownload className={styles.icon} /> View Resume </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProfileSection;
