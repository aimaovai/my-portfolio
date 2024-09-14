import React from "react";
import Image from "next/image";
import aima from '/public/images/aima.jpg';
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
    return (
        <div className={styles.picture_body}>
            <Image src={aima} alt="Aima" width={400} height={500}/>
        </div> );
}