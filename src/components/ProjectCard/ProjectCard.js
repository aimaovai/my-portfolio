import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectcard.module.css";

export default function ProjectCard({
  image,
  imageCaption,
  link,
  cardDescription,
}) {
  return (
    <div className={styles["card-container"]}>
    <Link href={link}>
      <div className={styles.card}>
        <div className={styles["image-container"]}>
          <Image
            src={image}
            alt={imageCaption}
            height={150}
            // width="80%"
            // maxWidth="80%"
          />
        </div>
        <div className={styles.caption}>{imageCaption}</div>
        <div className={styles["card-description"]}>
            <p>{cardDescription}</p>
        </div>
      </div>
    </Link>
 </div>
  );
}
