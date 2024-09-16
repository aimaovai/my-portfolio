'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import about from '/public/images/info.jpg';
import resume from '/public/images/home-resume.jpg';
import projects from '/public/images/projects.jpg';
import contact from '/public/images/contact.jpg';
import Image from "next/image";
import styles from "./Home.module.css";


export default function Home() {
    return (
        <div className="background">
            <NavBar />
            <div style={{
                display: "flex", flexDirection: "column", justifyContent: "space-evenly", left: 0, zIndex: 1, position: "relative", textAlign: "center", height: "100vh",
            }}>
                {/* <div><Button color="primary" onClick={() => router.push("/about")}>About</Button></div> */}
                <div className={styles.row}>
                    <Link href="/about">
                        <Image src={about} alt="about" width={200} height={200} style={{borderRadius: "50%", paddingBottom: "10px"}}/>
                        <Button color="primary">About</Button>
                    </Link>
                    <Link href="/resume" >
                        <Image src={resume} alt="resume" width={200} height={200} style={{borderRadius: "50%", paddingBottom: "10px"}}/>
                        <Button color="primary">Resume</Button>
                    </Link>
                </div>
                <div className={styles.row}>
                    <Link href="/projects" >
                        <Image src={projects} alt="projects" width={200} height={200} style={{borderRadius: "50%", paddingBottom: "10px"}}/>
                        <Button color="primary">Projects</Button>
                    </Link>
                    <Link href="/contact" >
                        <Image src={contact} alt="contact" width={200} height={200} style={{borderRadius: "50%", paddingBottom: "10px"}}/>
                        <Button color="primary">Contact</Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}