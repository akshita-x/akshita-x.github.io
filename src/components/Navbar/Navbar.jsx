import React, { useEffect, useState } from "react";

import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarNum, changeAvatarNum] = useState(1);
  // Initialize constructor to call changeAvatarNum
  useEffect(() => {
    var timer = null;
    timer = setInterval(() => {
      changeAvatarNum(num => num%3+1);
    }, 2000)
    
    // Stops the old timer when umount the component.
    return () => clearInterval(timer)
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <p className={styles.home}>
          Akshita <img className={styles.logo} src={getImageUrl(`nav/avatar-0${avatarNum}.png`)}
             alt="logo" />
        </p>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
