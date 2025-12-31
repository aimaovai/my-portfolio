"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "./home.module.css";
import Image from "next/image";
import styles from "./home.module.css";


export default function Home() {
  const highlights = [
    {
      image: "/images/dell.png",
      description:
        "Refactored and optimized scalable software solutions to enhance storage management and data protection for enterprise clients.",
      heading: "Dell Technologies",
    },
    {
      image: "/images/dell2.png",
      description:
        "Developed a data monitoring tool to improve real-time insights and system performance tracking for storage solutions.",
      heading: "Dell Technologies",
    },
    {
      image: "/images/amfam.png",
      description:
        "Redesigned internal tools to improve user experience and streamline workflows for insurance operations.",
      heading: "American Family Insurance",
    },
  ];
  return (
    <div className={styles["content"]}>
      <NavBar />
      <div
        className={styles["content-body"]}
        // style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      >
        <div className={styles.intro}>
          <h1>Hi, I&apos;m Aima.</h1>
          <p>
            I&apos;m a software engineer with a focus on frontend development
            and an educational background in biomedical engineering. A highlight
            of my experience is below.
          </p>
        </div>
        <div className={styles.container}>
          {highlights.map((highlight, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className={styles.section}>
                  <div className={styles["text-right"]}>
                    <h2 className={styles.h2}>{highlight.heading}</h2>
                    <p className={styles.p}>{highlight.description}</p>
                  </div>
                  <div>
                    <Image
                      src={highlight.image}
                      alt="highlight"
                      width={650}
                      height={500}
                      className={styles.image}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.section} style={{ order: -1 }}>
                  <div>
                    <Image
                      src={highlight.image}
                      alt="highlight"
                      width={650}
                      height={500}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles["text-left"]}>
                    <h2 className={styles.h2}>{highlight.heading}</h2>
                    <p className={styles.p}>{highlight.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
