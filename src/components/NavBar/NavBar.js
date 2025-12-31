"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  // const pathName = usePathname();
  // const isActive = (path) => path === pathName;
  const [nav, setNav] = useState(false);
  // const onClick = () => setNav(!nav);
  const links = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className={styles.nav}>
      {/* <div style={{ width: "90%" }}> */}
        <div className={`${styles.nav_container}`}>
          {/* Logo */}
          <div
            className={styles["logo-container"]}
          >
            <Link href={"/intro"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          {/* Header links - Hidden on mobile */}
          <div className={`${styles["main-nav-links"]}`}>
            {links.map((link) => (
              <Link key={link.name} href={link.path}>
                <ul>
                  <li className={styles.li}>{link.name}</li>
                </ul>
              </Link>
            ))}
            <ul>
              <li className={styles.li}>
              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              </li>
            </ul>
          </div>
          {/* Hamburger Icon - Visible only on mobile */}
          <div className={styles["burger-menu-container"]}>
            <div className={styles["hamburger"]}>
              {!nav ? (
                <FaBars onClick={() => setNav(!nav)} />
              ) : (
                <FaTimes onClick={() => setNav(!nav)} />
              )}
            </div>
            <div
              className={nav ? `${styles["mobile-menu"]}` : styles["hidden"]}
            >
              {links.map((link) => (
                <Link key={link.name} href={link.path} className={styles.li}>
                  <span>{link.name}</span>
                </Link>
              ))}
              <ul>
              <li className={styles.li}>
              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}
