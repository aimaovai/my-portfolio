import React from "react";
import Image from "next/image";
import aima from "/public/images/profile-pic.png";
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={aima} // Replace with your image path
        alt="Descriptive Alt Text" // Describe the image
        height={100}
        width={100}
        layout="responsive"
      />
    </div>
  );
}
