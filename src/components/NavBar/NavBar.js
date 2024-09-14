'use client'

import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";

export default function NavBar() {
    const pathName = usePathname();
    const isActive = (path) => path === pathName;
    const links = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Resume",
            path: "/resume"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]
    return (
        <div className={styles.background}>
            <Link href={"/"} style={{margin: "0 0 0 10%"}}>
                    <Image src={logo} alt="logo" />
                </Link>
            <ul className={styles.nav}>
                {links.map((link) => (
                    <Link key={link.name} href={link.path} className={(isActive(link.path) ? 'active':"")} style={{ color: "white", fontSize: "larger", margin: "0 10% 0 10%" }}>{link.name}</Link>
                ))}
                {/* <Link href={"/home"} className={styles.nav_item (isActive(path) ? 'active':"")}>Home</Link>
                <Link href={"/about"} className={styles.nav_item (isActive(path) ? 'active':"")} >About</Link>
                <Link href={"/resume"} className={styles.nav_item (isActive(path) ? 'active':"")}>Resume</Link>
                <Link href={"/projects"} className={styles.nav_item (isActive(path) ? 'active':"")}>Projects</Link>
                <Link href={"/contact"} className={styles.nav_item (isActive(path) ? 'active':"")}>Contact</Link> */}
                {/* <a href="">
                    <li className={styles.nav_item} style={{ color: "white" }}>Home</li>
                </a>
                <li className={styles.nav_item} style={{ color: "white" }}>About</li>
                <li className={styles.nav_item} style={{ color: "white" }}>Contact</li> */}
            </ul>
        </div>
    );
}