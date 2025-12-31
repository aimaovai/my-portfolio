"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "./home.module.css";
import Image from "next/image";
import styles from "./home.module.css";

type ExperienceHighlight = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type ExperienceRole = {
  company: string;
  role: string;
  highlights: ExperienceHighlight[];
};

export default function HomeMain() {
  // You can add more roles here as you grow the page
  const roles: ExperienceRole[] = [
    {
      company: "American Express",
      role: "Java Engineer || Software Engineer II",
      highlights: [
        {
          title: "Backend Development",
          description:
            "Design and develop backend services and APIs using Java within a large-scale, distributed enterprise environment.",
        },
        {
          title: "Collaboration & Code Quality",
          description:
            "Contribute to system reliability, performance, and maintainability through clean architecture, code reviews, and testing best practices.",
        },
      ],
    },
    {
      company: "Dell Technologies",
      role: "Software Engineer II",
      highlights: [
        {
          title: "Frontend Microservices",
          description:
            "Led development of modular, scalable frontend microservices using React, TypeScript, and JavaScript, enabling integration of multiple Dell storage systems.",
        },
        {
          title: "API & Backend Integration",
          description:
            "Supported full-stack feature development by authoring Protobuf-based service contracts, generating service models, and collaborating on Go-based backend systems to improve API integration, data handling, and system reliability.",
        },
      ],
    },
    {
      company: "Dell Technologies",
      role: "Software Engineer Intern",
      highlights: [
        {
          title: "System Optimization & Data Protection",
          description:
            "Refactored and optimized scalable software solutions to enhance storage management and data protection for enterprise clients.",
        },
        {
          title: "Monitoring & Real-Time Insights",
          description:
            "Developed a data monitoring tool to improve real-time system visibility and performance tracking for storage platforms.",
        },
      ],
    },
    {
      company: "American Family Insurance",
      role: "IT Intern",
      highlights: [
        {
          title: "Internal Tool Revamp",
          description:
            "Enhanced internal tool efficiency by revamping front-end components with React.js, HTML, and CSS, leading to an increase in user satisfaction and faster feature deployment.",
        },
        {
          title: "Team Productivity Boost",
          description:
            "Boosted team productivity by creating reusable and responsive components, reducing development time by 10% and improving the overall codebase maintainability.",
        },
      ],
    },
  ];

  const currentStatus =
    "Currently: Software Engineer II building backend systems with Java & Vert.x.";

  const featuredRole = {
    company: "American Express",
    role: "Java Engineer",
    imageAlt: "American Express",
    // Replace with your actual image path
    imageSrc: "/images/amex-logo-png.png",
  };

  const thinkingBullets = [
    {
      title: "Clarity over cleverness",
      text: "Code should be easy to understand, maintain, and evolve.",
    },
    {
      title: "Systems, not just features",
      text: "I consider reliability, scalability, and long-term impact.",
    },
    {
      title: "Collaboration + continuous learning",
      text: "Across frontend, backend, and infrastructure.",
    },
  ];

  const learningBullets = [
    {
      title: "Java Expertise",
      text: "Deepening expertise in Java-based backend systems and event-driven architectures",
    },
    {
      title: "API Development",
      text: "Gaining proficiency in designing and implementing RESTful APIs using Java and Spring Boot.",
    },
    {
      title: "System Performance & Observability",
      text: "Focusing on monitoring, logging, and improving system performance across all layers.",
    },
  ];

  const projectBullets = [
    {
      title: "Triple Z Home Improvement",
      text: "A full-stack web application for managing home improvement projects, built with React, Node.js, and Vercel.",
      url: "https://triple-z-home-solutions.vercel.app/",
    },
    {
      title: "The TechBioverse Blog",
      text: "A personal blog focused on technology trends, software development, and career growth.",
      url: "https://thetechbioverse.wordpress.com/",
    }
  ];

  return (
    <div className={styles["content"]}>
      <NavBar />
      <main className={styles.wrapper}>
        {/* <div
        className={styles["content-body"]}
        // style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      > */}
        <section className={styles.topGrid}>
          <div className={styles.hero}>
            <h1 className={styles.h1}>Hi, I’m Aima.</h1>

            <p className={styles.subhead}>
              Software Engineer building thoughtful, scalable systems — from
              user experience to backend logic.
            </p>

            <div className={styles.statusPill} aria-label="Current status">
              <span className={styles.statusDot} aria-hidden />
              <span className={styles.statusText}>{currentStatus}</span>
            </div>
          </div>

          <aside
            className={styles.featureCard}
            aria-label="Featured experience"
          >
            <div className={styles.featureCardInner}>
              <div className={styles.featureText}>
                <h3 className={styles.featureCompany}>
                  {featuredRole.company}
                </h3>
                <p className={styles.featureRole}>{featuredRole.role}</p>
              </div>

              <div className={styles.featureImageWrap}>
                {/* Use next/image for optimized images */}
                <Image
                  src={featuredRole.imageSrc}
                  alt={featuredRole.imageAlt}
                  className={styles.featureImage}
                  width={120}
                  height={60}
                  priority={true}
                />
              </div>
            </div>
          </aside>
        </section>

        {/* Divider + Experience heading */}
        <section className={styles.sectionHeader}>
          <h2 className={styles.h2}>Experience</h2>
          <div className={styles.rule} />
        </section>

        {/* Two-column grid: Experience card + "How I Think" card */}
        <section className={styles.bottomGrid}>
          <article className={styles.card}>
            {roles.map((r) => (
              <div key={`${r.company}-${r.role}`} className={styles.roleBlock}>
                <div className={styles.roleHeader}>
                  <div className={styles.roleBadge} aria-hidden>
                    {/* simple badge icon */}
                    <span className={styles.badgeIcon}>🛡️</span>
                  </div>

                  <div className={styles.roleTitleWrap}>
                    <div className={styles.roleTitleLine}>
                      <span className={styles.company}>{r.company}</span>
                      <span className={styles.dash}>—</span>
                      <span className={styles.role}>{r.role}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.highlights}>
                  {r.highlights.map((h) => (
                    <div key={h.title} className={styles.highlightRow}>
                      <div className={styles.highlightIcon} aria-hidden>
                        {/* switch icons later if you want */}
                        📌
                      </div>
                      <div>
                        <h4 className={styles.h4}>{h.title}</h4>
                        <p className={styles.pMuted}>{h.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.moreHint}></div>
              </div>
            ))}

            {/* Built-in “more content below” affordance */}
            {/* <div className={styles.moreHint}>
            More experience and projects below ↓
          </div> */}
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>How I Think as an Engineer</h3>

            <ul className={styles.bullets}>
              {thinkingBullets.map((b) => (
                <li key={b.title} className={styles.bulletItem}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <div>
                    <span className={styles.bulletStrong}>{b.title}</span>
                    <span className={styles.bulletText}> — {b.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <section className={styles.sectionHeader}>
              <h2 className={styles.h2}>Current Learning</h2>
              <div className={styles.rule} />
            </section>
            <ul className={styles.bullets}>
              {learningBullets.map((b) => (
                <li key={b.title} className={styles.bulletItem}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <div>
                    <span className={styles.bulletStrong}>{b.title}</span>
                    <span className={styles.bulletText}> — {b.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <section className={styles.sectionHeader}>
              <h2 className={styles.h2}>Projects</h2>
              <div className={styles.rule} />
            </section>
            <ul className={styles.bullets}>
              {projectBullets.map((b) => (
                <li key={b.title} className={styles.bulletItem}>
                  <span className={styles.check} aria-hidden>
                    ✓
                  </span>
                  <div>
                    <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
                      <span className={styles.bulletStrong}>{b.title}</span>
                    </a>
                    <span className={styles.bulletText}> — {b.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Placeholder for the rest of the home page (more sections below) */}
        <section className={styles.nextSections}>
          {/* Add more roles/cards/sections here */}
        </section>
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
