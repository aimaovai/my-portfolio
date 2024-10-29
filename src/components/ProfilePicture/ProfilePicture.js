import React from "react";
import Image from "next/image";
import aima from "/public/images/aima.jpg";
// import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  return (
    <div className="image-container">
      <Image
        src={aima} // Replace with your image path
        alt="Descriptive Alt Text" // Describe the image
        //layout="responsive"  Responsive layout
        width={300} // Original width of the image
        height={300} // Original height of the image
        className="responsive-image" // Optional custom class
      />
    </div>
  );
}
