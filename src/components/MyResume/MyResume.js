import React from "react";
import Image from "next/image";
import resumeImage from '/public/images/resume.jpg'
import styles from "./MyResume.module.css";

export default function MyResume() {
    return (
        <div>
            <Image src={resumeImage} alt="Resume" className={styles.resume_image}/>
        </div> );
}