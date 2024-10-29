import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './projectcard.module.css';

export default function ProjectCard({ image, imageCaption, link}) {
    return (
        <div className="card">
            <Link href={link}>
                <Image
                    src={image}
                    alt={imageCaption}
                    height={200}
                    // width="100%"
                    maxWidth="100%"
                    className={styles.image}
                />
                <div className="caption">{imageCaption}</div>
            </Link>
        </div>
    )
}