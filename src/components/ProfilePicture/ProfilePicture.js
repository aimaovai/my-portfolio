import React from "react";
import Image from "next/image";
import aima from "/public/images/aima.jpg";
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={aima} // Replace with your image path
        alt="Descriptive Alt Text" // Describe the image
        width={250} // Original width of the image
        height={200} // Original height of the image
        className={styles.responsiveImage} // Optional custom class
      />
    </div>
  );
}
