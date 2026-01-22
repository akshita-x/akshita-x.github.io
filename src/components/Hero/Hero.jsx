import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akshita!</h1>
        <p className={styles.description}>
          I'm a lead Cybersecurity Analyst @ Archer Aviation with expertise in and Data Loss Prevention (DLP), Security Operations, Threat Detection and Incident Response. 
        </p>
        <p className={styles.description}>
          Let's connect!
        </p>
        <div className={styles.groupHor}>
          <a href="mailto:akshita.sharma11297@gmail.com" className={styles.contactBtn}>
            Email
          </a>
          <a href={getImageUrl("resume/Akshita_resume.pdf")} className={styles.contactBtn} target="_blank">
            Resume
          </a>
          <a href="https://www.linkedin.com/in/akshita-sharma01" className={styles.contactBtn} target="_blank">
            LinkedIn
          </a>        
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
