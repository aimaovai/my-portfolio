"use client";

import React from "react";
import { useState } from 'react';
import styles from "./ContactForm.module.css";
import { Button } from "@nextui-org/button";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        setStatus('Failed to send message.');
      });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.entry}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className={styles.input}
        />
      </div>
      <div className={styles.entry}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.entry}>
        <label htmlFor="subject">Phone</label>
        <input
          type="text"
          id="frm-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
          className={styles.input}
        />
      </div>
      <div className={styles.entry}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          className={styles.text_area}
        />
      </div>
      <div className={styles.button}>
        <Button
          type="submit"
          color="default" /*onClick={() => router.push("/home")}*/
        >
          Submit
        </Button>
      </div>
      <div>
      {status && <p className={styles.disappear}>{status}</p>}
      </div>
    </form>
  );
}
