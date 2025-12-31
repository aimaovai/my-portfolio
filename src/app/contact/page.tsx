import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import styles from "./contact.module.css";
import {
  BsEnvelope,
  BsArrowRight,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

type ContactCardProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  href: string;
};

function ContactCard({ icon, title, subtitle, ctaLabel, href }: ContactCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.iconBubble} aria-hidden>
          {icon}
        </div>

        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubtitle}>{subtitle}</p>
        </div>
      </div>

      <a className={styles.cardCta} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <span>{ctaLabel}</span>
        <BsArrowRight aria-hidden />
      </a>
    </article>
  );
}
export default function Contact() {
   const email = "ovaiaima@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/aimaovai/";
  const githubUrl = "https://github.com/aimaovai";
  return (
    <div className="content">
      <NavBar />
      <main className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.hero}>
          <h1 className={styles.h1}>Let’s Connect</h1>
          <p className={styles.lede}>
            I’m always open to thoughtful conversations—whether that’s about engineering,
            collaboration, or new opportunities.
          </p>
        </section>

        {/* Primary cards */}
        <section className={styles.stack} aria-label="Primary contact methods">
          <ContactCard
            icon={<BsEnvelope className={styles.icon} />}
            title="Email"
            subtitle={email}
            ctaLabel="Send an Email"
            href={`mailto:${email}`}
          />

          <ContactCard
            icon={<BsLinkedin className={styles.icon} />}
            title={
              <>
                Connect on <span className={styles.linkAccent}>LinkedIn</span>
              </>
              // TS: allow ReactNode by widening type below
            }
            subtitle="Visit my profile or send a connection request."
            ctaLabel="Go to LinkedIn"
            href={linkedinUrl}
          />
        </section>

        {/* Other ways */}
        <section className={styles.otherWays} aria-label="Other ways to reach me">
          <h2 className={styles.h2}>Other Ways to Reach Me</h2>

          <div className={styles.stack}>
            <ContactCard
              icon={<BsGithub className={styles.icon} />}
              title="GitHub"
              subtitle="Explore my projects and code."
              ctaLabel="Go to GitHub"
              href={githubUrl}
            />
          </div>
        </section>
      </div>
    </main>
      {/* <div className={styles["content-body"]}>
        <ContactForm />
      </div> */}
      <Footer />
    </div>
  );
}
