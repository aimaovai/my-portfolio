'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import uiImage from '../../../public/images/ui.jpg';
import githubOfcLogo from '../../../public/images/github-mark-white.png'
import graphicDesginImage from '../../../public/images/graphic-design.jpg';
import styles from './projects.module.css';

export default function Projects() {
    return (
        <div className="background2">
            <NavBar />
            <div>
                <div className={styles.container}>
                    <ProjectCard
                        image={uiImage}
                        imageCaption={"UI projects"}
                        link="/uiprototypes"
                    />
                    <ProjectCard
                        image={githubOfcLogo}
                        imageCaption={"GitHub projects"}
                        link="https://github.com/aimaovai"
                    />
                    <ProjectCard
                        image={graphicDesginImage}
                        imageCaption={"Graphic design projects"}
                        link="/graphicdesign"
                    />
                </div>
            </div>
        </div>
    );
}