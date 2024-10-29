"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import "./home.module.css";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import about from "/public/images/info.jpg";
import resume from "/public/images/home-resume.jpg";
import projects from "/public/images/projects.jpg";
import contact from "/public/images/contact.jpg";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className="content">
      <NavBar />
      <div
        className="content-body"
        style={{ flexDirection: "column", justifyContent: "space-evenly" }}
      >
        <div className={styles.matrixContainer}>
          <div className={styles.matrixItem}>
            <Link href="/about" className={styles.itemFlex}>
              <Image
                src={about}
                alt="about"
                // width={200}
                // height={200}
                // layout="fill"
                objectFit="contain"
                style={{ borderRadius: "50%", marginBottom: "10px", position: "inherit" }}
              />
              <Button color="primary" size="sm">About</Button>
            </Link>
          </div>
          <div className={styles.matrixItem}>
            <Link href="/resume" className={styles.itemFlex}>
              <Image
                src={resume}
                alt="resume"
                // width={200}
                // height={200}
                // layout="fill"
                objectFit="contain"
                style={{ borderRadius: "50%", marginBottom: "10px", position: "inherit" }}
              />
              <Button color="primary" size="sm">Resume</Button>
            </Link>
          </div>
          <div className={styles.matrixItem}>
            <Link href="/projects" className={styles.itemFlex}>
              <Image
                src={projects}
                alt="projects"
                // width={200}
                // height={200}
                // layout="fill"
                objectFit="contain"
                style={{ borderRadius: "50%", marginBottom: "10px", position: "inherit" }}
              />
              <Button color="primary" size="sm">Projects</Button>
            </Link>
          </div>
          <div className={styles.matrixItem}>
            <Link href="/contact" className={styles.itemFlex}>
              <Image
                src={contact}
                alt="contact"
                // width={200}
                // height={200}
                // layout="fill"
                objectFit="contain"
                style={{ borderRadius: "50%", marginBottom: "10px", position: "inherit" }}
              />
              <Button color="primary" size="sm">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
