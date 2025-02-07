import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import logo from './assets/newlogo.png'; // Import the logo from the assets folder

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const highlightRef = useRef(null);
  const navRef = useRef(null);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const links = nav.querySelectorAll('a');
    const highlight = highlightRef.current;

    if (!highlight) return;

    const handleMouseEnter = (event) => {
      const linkRect = event.target.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      highlight.style.left = `${linkRect.left - navRect.left}px`;
      highlight.style.width = `${linkRect.width}px`;
    };

    const handleMouseLeave = () => {
      highlight.style.width = '0';
    };

    links.forEach((link) =>
      link.addEventListener('mouseenter', handleMouseEnter)
    );
    nav.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      links.forEach((link) =>
        link.removeEventListener('mouseenter', handleMouseEnter)
      );
      nav.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  

  return (
    <>
      {/* Large Screen Navbar */}
      <nav className={styles.navbarLarge} ref={navRef}>
        <a href="#Content">HOME</a>
        <a href="#Skills">SKILLS</a>
        <a href="#Experience">EXPERIENCE</a>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" /> {/* Use the imported logo */}
          <span className={styles.name}>
            <span>AVANI</span>
            <span>MAHADIK</span>
          </span>
        </div>
        <a href="#Project">PROJECTS</a>
        <a href="#Education">EDUCATION</a>
        <a href="#Contact">CONTACT</a>
        <div className={styles.highlight} ref={highlightRef}></div>
      </nav>

      {/* Small Screen Navbar */}
      <nav className={styles.navbarSmall}>
        <div className={styles.toggleMenu} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" /> {/* Use the imported logo */}
          <span className={styles.name}>
            <span>AVANI</span>
            <span>MAHADIK</span>
          </span>
        </div>

        <div
          className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}
        >
          <a href="#Content" onClick={closeMenu}>HOME</a>
          <a href="#Skills" onClick={closeMenu}>SKILLS</a>
          <a href="#Experience" onClick={closeMenu}>EXPERIENCE</a>
          <a href="#Project" onClick={closeMenu}>PROJECTS</a>
          <a href="#Education" onClick={closeMenu}>EDUCATION</a>
          <a href="#Contact" onClick={closeMenu}>CONTACT</a>
        </div>
      </nav>
    </>
  );
}
