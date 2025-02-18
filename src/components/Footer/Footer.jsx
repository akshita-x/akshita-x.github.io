import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.madeWith}>
          Made with ❤️ by Akshita
        </div>
        <div className={styles.attribution}>
          Website inspiration from <a href="https://github.com/CodeCompleteYT/react-portfolio">CodeCompleteYT</a>
        </div>
        <div className={styles.attribution}>
          Icon made by Pixel perfect from www.flaticon.com | Icons by Icons8
        </div>
      </div>
    </footer>
  );
};
