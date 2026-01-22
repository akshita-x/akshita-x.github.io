import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.miniImage} src={getImageUrl("about/cybersec.svg")} alt="Security icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Analyst</h3>
              <p>
                I'm a Cybersecurity Analyst with 4+ years of experience in the DLP/Security Operations domain.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.miniImage} src={getImageUrl("about/leader.svg")} alt="Professional icon" />
            <div className={styles.aboutItemText}>
              <h3>Professionally Proven</h3>
              <p>
                I have Led a 24/7 SOC team of 15 analysts and have been involved in Incident Response and Threat Detection.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.miniImage} src={getImageUrl("about/archer-like.svg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Currently Unlocking the Skies with Archer Aviation </h3>
              <p>
                Leading DLP initiatives that keep Archer's electric aviation dreams from taking off with sensitive data - securing sustainable flight, one byte at a time!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
