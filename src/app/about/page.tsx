"use client";

import NavBar from "@/components/NavBar/NavBar";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import styles from "./about.module.css";
import Footer from "@/components/Footer/Footer";

export default function About() {
  return (
    <div className="content">
      <NavBar />
      <div className={styles["content-body"]}>
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
                  I&apos;m Aima Ovai—a full-stack software engineer passionate
                  about building innovative digital experiences that engage,
                  inspire, and create real impact. With a background that
                  balances creativity and technical precision, I&apos;ve dived
                  into everything from UI/UX design to backend development,
                  aiming to bring seamless and smart solutions to life.
                </p>
                <p className={styles.p1} style={{ whiteSpace: "preserve" }}>
                  Beyond code, I&apos;m a lifelong learner, an advocate for tech
                  that empowers, and a problem-solver who loves to tackle
                  challenges head-on. Whether it&apos;s perfecting front-end
                  interfaces, optimizing backend workflows, or collaborating
                  with cross-functional teams, I thrive on making ideas a
                  reality and simplifying complex problems.
                </p>
              </div>
              <ProfilePicture />
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className={styles.p2}>
                When I&apos;m not coding or ideating, you&apos;ll find me
                exploring the latest in tech, fueling up on great coffee, or
                sharing insights with the community. Let&apos;s connect and
                create something extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
