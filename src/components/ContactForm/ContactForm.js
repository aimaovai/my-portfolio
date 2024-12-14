"use client";

import React from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button } from "@nextui-org/button";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setStatus("Failed to send message.");
      });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "20px" }}>
          <h3>
            <span className={styles.instructions}>
              Let&apos;s bring your ideas to life!
            </span>
          </h3>
          <h3>
            <span className={styles.instructions}>
              Reach out, and let&apos;s create something amazing together.
            </span>
          </h3>
        </div>
        <div className={styles.entry}>
          <label htmlFor="name" aria-label="Enter your name.">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            aria-label="Enter your name."
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="email" aria-label="Enter your email address.">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            aria-label="Enter your email address."
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="phone" aria-label="Enter your phone number.">Phone</label>
          <input
            type="text"
            id="frm-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            aria-label="Enter your phone number."
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="message" aria-label="Enter your message here.">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.text_area}
            aria-label="Enter your message here."
          />
        </div>
        <div className={styles.button}>
          <Button
            type="submit"
            color="primary" /*onClick={() => router.push("/home")}*/
            style={{
              borderRadius: "5px",
              height: "50px",
              fontSize: "medium",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </div>
        <div>{status && <p className={styles.disappear}>{status}</p>}</div>
      </form>
    </div>
  );
}
