import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {

    return (
        <div className={styles.background}>
            <ul className={styles.nav}>
                <Link href={"/home"} className={styles.nav_item} style={{ color: "white" }} >Home</Link>
                <Link href={"/about"} className={styles.nav_item} style={{ color: "white" }} >About</Link>
                <Link href={"/contact"} className={styles.nav_item} style={{ color: "white" }}>Contact</Link>
                {/* <a href="">
                    <li className={styles.nav_item} style={{ color: "white" }}>Home</li>
                </a>
                <li className={styles.nav_item} style={{ color: "white" }}>About</li>
                <li className={styles.nav_item} style={{ color: "white" }}>Contact</li> */}
            </ul>
        </div>
    );
}