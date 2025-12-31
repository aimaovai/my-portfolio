import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className="content">
      <NavBar />
      <div className={styles["content-body"]}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
