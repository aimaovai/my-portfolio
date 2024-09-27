import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './styles.css';

export default function ProjectCard({ image, imageCaption, link }) {
    return (
        <div className={styles.card}>
            <Link href={link}>
                <Image
                    src={image}
                    alt={imageCaption}
                    height={200}
                    width={200}
                    className={styles.img}
                />
                {imageCaption}
            </Link>
        </div>
    )
}