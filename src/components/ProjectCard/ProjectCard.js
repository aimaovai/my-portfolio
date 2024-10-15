import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './styles.css';
import { p, style } from "framer-motion/client";

export default function ProjectCard({ image, imageCaption, link, ...props }) {
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