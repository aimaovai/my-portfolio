"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import uiImage from "../../../public/images/ui.jpg";
import githubOfcLogo from "../../../public/images/github-mark-white.png";
import graphicDesginImage from "../../../public/images/graphic-design.jpg";
import styles from "./projects.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Projects() {
    const router = useRouter();
  return (
    <div className="content">
      <NavBar />
      <div className={styles.container}>
        <div className={styles["back-button"]}>
          <BiArrowBack onClick={() => router.push("/home")} />
        </div>
        <div className={styles["card-container"]}>
          <ProjectCard
            image={uiImage}
            imageCaption={"UI projects"}
            link="/uiprototypes"
            cardDescription={
              "Discover my collection of UI projects, each crafted with a focus on intuitive design, responsive layouts, and smooth interactions. Click through to see how I bring user experiences to life, combining functionality with style in every detail!"
            }
          />
          <ProjectCard
            image={githubOfcLogo}
            imageCaption={"GitHub projects"}
            link="https://github.com/aimaovai"
            cardDescription={"Check out my GitHub projects—a mix of coding experiments, problem-solving solutions, and full-stack applications. Dive in to see my work in action, from backend logic to polished user interfaces!"}
          />
          <ProjectCard
            image={graphicDesginImage}
            imageCaption={"Graphic design projects"}
            link="/graphicdesign"
            cardDescription={"Explore my graphic design portfolio, featuring bold visuals, creative layouts, and a flair for detail. See how I bring ideas to life through impactful designs tailored for digital and print!"}
          />
        </div>
      </div>
    </div>
  );
}
