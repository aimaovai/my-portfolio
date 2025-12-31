"use client";

import NavBar from "@/components/NavBar/NavBar";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import styles from "./about.module.css";
import {
  BsRocketTakeoff,
  BsLaptop,
  BsArrowRight,
  BsEnvelope,
} from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodesignal } from "react-icons/si";

type StoryCard = {
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
  bullets?: string[];
};
export default function About() {
  const storyCards: StoryCard[] = [
    {
      title: "Started in Biomedical\nEngineering",
      subtitle: "",
      body: "I found my direction at the crossroads of science and technology while studying Biomedical Engineering. Through coursework and projects, I developed a strong foundation in analytical thinking, programming, and solving complex problems under real constraints. More importantly, I learned how to ask better questions—an essential skill that continues to shape my work as an engineer.",
      icon: <span className={styles.storyEmoji}>🧬</span>,
    },
    {
      title: "Transitioned\ninto Software",
      subtitle: "",
      body: "My curiosity led me deeper into software when I realized how quickly ideas could become impactful tools. Building my first meaningful applications in my programming classes showed me the power of software to scale solutions and improve lives. I shifted my focus fully into software engineering, energized by the pace of learning, the creativity involved, and the ability to build systems that evolve over time.",
      icon: <BsRocketTakeoff className={styles.storyIcon} aria-hidden />,
    },
    {
      title: "Evolved into\nFull-Stack",
      subtitle: "",
      body: "I enjoy building complete, user-focused applications—balancing clean UX with reliable backend systems. I care about scalable, maintainable solutions that teams can evolve confidently.",
      icon: <BsLaptop className={styles.storyIcon} aria-hidden />,
      bullets: [
        "Design systems that are robust, scalable, and a joy to use.",
        "Share insights to empower other aspiring technologists.",
      ],
    },
  ];
  return (
    <div className="content">
      <NavBar />
      <div className={styles["content-body"]}>
        <div className={styles.container}>
          <main className={styles.page}>
            <div className={styles.container}>
              {/* HERO */}
              <section className={styles.hero}>
                <div className={styles.heroLeft}>
                  <h1 className={styles.h1}>About Me</h1>

                  <p className={styles.lede}>
                    <span className={styles.ledeStrong}>
                      Hey! I’m Aíma Ovai
                    </span>
                    , a full-stack software engineer passionate about building
                    thoughtful, seamless digital experiences.
                  </p>

                  <div className={styles.bioBox}>
                    <p className={styles.bioLine}>
                      What excites me most about engineering is the ability to
                      translate abstract ideas into systems that people can rely
                      on. I enjoy working across the stack—not because I need to
                      touch everything, but because understanding the full
                      picture helps me design better, more resilient solutions.
                    </p>
                    <p className={styles.bioLine}>
                      I care deeply about clarity, intentional design, and
                      building software that holds up over time—both technically
                      and in how it serves users. From an early interest in
                      biomedical engineering to diving deep into the software
                      world, I’ve always aimed to balance creativity with
                      technical excellence.
                    </p>
                  </div>
                </div>

                {/* Optional right-side slot (kept empty to match your “no-headshot” option if you want) */}
                <div className={styles.heroRight} aria-hidden="true">
                  <div className={styles.heroPlaceholder}>
                    {/* Decorative panel: leave empty or add a graphic later */}
                    {/* <div className={styles.placeholderGlow} /> */}
                    <ProfilePicture />
                  </div>
                </div>
              </section>

              {/* SECTION TITLE */}
              <section className={styles.sectionTitle}>
                <h2 className={styles.h2}>Started in Biomedical Engineering</h2>
                <p className={styles.sectionSubtitle}>
                  Found my direction at the crossroads of science and
                  technology, studying Biomedical Engineering. Developed a
                  strong foundation in problem-solving, programming, and pushing
                  the boundaries of possibility to improve human health.
                </p>
              </section>

              {/* STORY CARDS */}
              <section className={styles.cardsGrid} aria-label="Story cards">
                {storyCards.map((card) => (
                  <article key={card.title} className={styles.storyCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIconWrap}>{card.icon}</div>

                      <h3 className={styles.h3}>
                        {card.title.split("\n").map((line, idx) => (
                          <span key={idx} className={styles.blockLine}>
                            {line}
                          </span>
                        ))}
                      </h3>
                    </div>

                    <p className={styles.cardBody}>{card.body}</p>

                    {card.bullets && (
                      <ul className={styles.cardBullets}>
                        {card.bullets.map((b) => (
                          <li key={b} className={styles.bulletItem}>
                            <span className={styles.check} aria-hidden>
                              ✓
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </section>

              {/* TECHBIOVERSE CTA */}
              <section className={styles.cta} aria-label="TechBioverse section">
                <div className={styles.ctaInner}>
                  <div className={styles.ctaLeft}>
                    <a href="https://thetechbioverse.wordpress.com/">
                      <div className={styles.brandCard}>
                        <div className={styles.brandMark} aria-hidden>
                          ⟡
                        </div>
                        <div>
                          <h3 className={styles.brandTitle}>
                            The TechBioverse
                          </h3>
                          <p className={styles.brandText}>
                            The TechBioverse is where I explore the intersection
                            of my technical background, curiosity, and
                            creativity. It’s a space for reflection, learning,
                            and sharing insights—especially for those navigating
                            non-linear paths into tech.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className={styles.ctaRight}>
                    <h3 className={styles.ctaTitle}>
                      Beyond Tech:{" "}
                      <span className={styles.ctaAccent}>The TechBioverse</span>
                    </h3>

                    <p className={styles.ctaSubtitle}>
                      Through writing and community engagement, I aim to
                      demystify complex topics, highlight emerging ideas, and
                      encourage others to build with confidence and intention.
                    </p>

                    <div className={styles.emailRow}>
                      <div className={styles.emailBox}>
                        <BsEnvelope className={styles.emailIcon} aria-hidden />
                        <span className={styles.emailText}>
                          ovaiaima@gmail.com
                        </span>
                      </div>

                      <a
                        className={styles.emailAction}
                        href="mailto:ovaiaima@gmail.com"
                      >
                        <span>Connect</span>
                        <BsArrowRight aria-hidden />
                      </a>
                    </div>

                    <div className={styles.socialRow} aria-label="Social links">
                      <a
                        className={styles.socialBtn}
                        href="https://github.com/aimaovai"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub aria-hidden />
                      </a>
                      <a
                        className={styles.socialBtn}
                        href="https://www.linkedin.com/in/aimaovai"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin aria-hidden />
                      </a>
                      <a
                        className={styles.socialBtn}
                        href="https://codesignal.com/learn/profile/cm0d40pn30006hh0kykue9gtg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SiCodesignal aria-hidden />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Spacer for next content below */}
              <div className={styles.bottomSpace} />
            </div>
          </main>
          {/* <div className={styles["h1-container"]}>
            <h1>About Me</h1>
          </div>
          <div className={styles["about-container"]}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <p className={styles.p1} style={{ whiteSpace: "preserve" }}>
                Hey there! I&apos;m Aima Ovai—a full-stack software engineer
                passionate about building innovative digital experiences that
                engage, inspire, and create real impact. With a background that
                balances creativity and technical precision, I&apos;ve dived
                into everything from UI/UX design to backend development, aiming
                to bring seamless and smart solutions to life.
              </p>
              <ProfilePicture />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.p2} style={{ whiteSpace: "preserve" }}>
                I&apos;m also the founder of{" "}
                <i>
                  <a
                    href="https://www.techbioverse.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <u>
                      <b>The TechBioverse</b>
                    </u>
                  </a>
                </i>
                , a personal brand & blog that is a reflection of my personal journey in
                Biomedical Engineering and Software Engineering, and a space to
                shed light on cutting-edge research and advancements in these
                fields. Rooted in my experiences, <i>The TechBiovers</i>{" "}
                celebrates the resilience, creativity, and potential of
                individuals navigating their own paths in tech, offering a space
                for inspiration, knowledge-sharing, and community building.
              </p>
              <p className={styles.p2}>
                Beyond code and content, I&apos;m a lifelong learner, an
                advocate for tech that empowers, and a problem-solver who loves
                to tackle challenges head-on. Whether it&apos;s perfecting
                front-end interfaces, optimizing backend workflows, or
                collaborating with cross-functional teams, I thrive on making
                ideas a reality and simplifying complex problems.
              </p>
              <p className={styles.p2}>
                When I&apos;m not immersed in tech, I enjoy diving into
                captivating books, binge-watching Asian dramas and movies,
                exploring art in all its forms, and getting lost in the magic of
                music. Let&apos;s connect and create something extraordinary
                together!
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
