"use client";

import NavBar from "@/components/NavBar/NavBar";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import styles from "./about.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <div className="content">
      <NavBar />
      <div className="content-body">
        <div className={styles.container}>
          <div className={styles["h1-container"]}>
            <h1>About Me</h1>
          </div>
          <div className={styles["about-container"]}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <p className={styles.p1} style={{ whiteSpace: "preserve" }}>
                Hey there! I&apos;m Aima Ovai—a full-stack software engineer passionate about building innovative digital experiences that engage, inspire, and create real impact. With a background that balances creativity and technical precision, I&apos;ve dived into everything from UI/UX design to backend development, aiming to bring seamless and smart solutions to life.
                </p>
                <p className={styles.p1} style={{ whiteSpace: "preserve" }}>
                I&apos;m also the creator of <i >The 9ja Techie</i>, a brand where I empower tech enthusiasts by sharing resources, insights, and lessons from my journey as a Nigerian in the tech industry. Rooted in my experiences, <i>The 9ja Techie</i> celebrates the resilience, creativity, and potential of individuals navigating their own paths in tech, offering a space for inspiration, knowledge-sharing, and community building.
                </p>
              </div>
              <ProfilePicture />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.p2}>
              Beyond code and content, I&apos;m a lifelong learner, an advocate for tech that empowers, and a problem-solver who loves to tackle challenges head-on. Whether it&apos;s perfecting front-end interfaces, optimizing backend workflows, or collaborating with cross-functional teams, I thrive on making ideas a reality and simplifying complex problems.
              </p>
              <p className={styles.p2}>
              When I&apos;m not immersed in tech, I enjoy diving into captivating books, binge-watching Asian dramas and movies, exploring art in all its forms, and getting lost in the magic of music. Let&apos;s connect and create something extraordinary together!
              </p>
            </div>
          </div>
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
    </div>
  );
}
