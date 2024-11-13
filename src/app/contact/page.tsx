import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contact.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { SiCodesignal } from "react-icons/si";

export default function Contact() {
  return (
    <div className="content">
      <NavBar />
      <div className="content-body">
        <ContactForm />
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
      </div>
      
    </div>
  );
}
