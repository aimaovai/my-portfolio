import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
import styles from "./Footer.module.css";

export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/aimaovai/";
  const githubUrl = "https://github.com/aimaovai";
  const codesignalurl = "https://codesignal.com/learn/profile/cm0d40pn30006hh0kykue9gtg";
  return (
    <div className={styles.footer}>
      <a
        className={styles.iconBtn}
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <BsGithub />
      </a>
      <a
        className={styles.iconBtn}
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        className={styles.iconBtn}
        href={codesignalurl}
        target="_blank"
        rel="noreferrer"
        aria-label="CodeSignal"
      >
        <SiCodesignal />
      </a>
    </div>
  );
}
