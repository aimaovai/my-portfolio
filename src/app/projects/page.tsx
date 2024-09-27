'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import uiImage from '../../../public/images/ui.jpg';
import webDevImage from '../../../public/images/web-dev.jpg';
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
                        image={webDevImage}
                        imageCaption={"Web development projects"}
                        link="/webdesign"
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