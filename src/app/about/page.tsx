"use client";

import NavBar from "@/components/NavBar/NavBar";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className="content">
      <NavBar />

      <div className="content-body">
        <div className={styles.text}>
          <p style={{ whiteSpace: "preserve" }}>
            Aima Ovai is a dedicated software engineer with over two years of
            professional experience specializing in full-stack development,
            scalable web applications, and cloud technologies. With a strong
            technical foundation in Java, Python, and React, Aima brings a
            versatile skill set that allows her to tackle diverse engineering
            challenges effectively. Her background in biomedical engineering
            adds a unique perspective, fostering analytical precision and an
            innovative mindset essential for problem-solving in high-stakes
            environments. Passionate about continuous learning and quick to
            adapt to emerging technologies, Aima is committed to delivering
            user-centered solutions that make a measurable impact. Known for her
            collaborative spirit, Aima thrives in dynamic, cross-functional
            teams, contributing to projects with creativity and strategic
            thinking. Eager to bring meaningful contributions to
            forward-thinking organizations, Aima aims to drive success through
            impactful, reliable software solutions that enhance both user
            experience and team productivity.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}
