import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "./assets/newlogo.png";

const Contact = () => {
  return (
    <section id="Contact">
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.middleSection}>
        <img src={logo} alt="Avani Logo" className={styles.logo} />
          <p className={styles.description}>
          Got a brilliant idea or a challenge to solve? I’m just a message away and ready to collaborate with you to create something truly remarkable!
          </p>
          <div className={styles.socialIcons}>
            <a href="mailto:avani.mahadik2020@gmail.com" className={styles.icon}><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/avani-mahadik-b10674299/" className={styles.icon}><FaLinkedin /></a>
            <a href="https://github.com/avani0911" className={styles.icon}><FaGithub /></a>
            <a href="https://www.instagram.com/mahadikavani_/?locale=en_gb&hl=en" className={styles.icon}><FaInstagram /></a>
          </div>
        </div>
        </div>
    </section>
    </section>
  );
};

export default Contact;