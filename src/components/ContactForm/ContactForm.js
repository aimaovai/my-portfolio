import React from "react";
import styles from "./ContactForm.module.css";
import { Button } from "@nextui-org/button";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.entry}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.entry}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
          className={styles.input}
        />
      </div>
      <div className={styles.entry}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
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
    </form>
  );
}
