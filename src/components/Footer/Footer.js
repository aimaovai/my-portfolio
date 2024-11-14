import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/aimaovai" target="_blank">
        <BsGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/aimaovai/" target="_blank">
        <BsLinkedin />
      </Link>
      <Link
        href="https://learn.codesignal.com/profile/cm0d40pn30006hh0kykue9gtg"
        target="_blank"
      >
        <SiCodesignal />
      </Link>
    </div>
  );
}
