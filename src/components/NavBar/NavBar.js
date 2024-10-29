"use client";

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const pathName = usePathname();
  const isActive = (path) => path === pathName;
  const [nav, setNav] = useState(false);
  const onClick = () => setNav(!nav);
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
      <div className={`${styles.nav_container}`}>
        <div style={{ margin: "0 0 0 5%" }}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`${styles.hidden}`}>
          <ul className={`${styles.nav_items}`}>
            <li className={`${styles.li}`}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${isActive(link.path) ? `${styles.active}` : ""}`}
                  style={{ margin: "0 20px" }}
                >
                  {link.name}
                </Link>
              ))}
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
        <div
          className={`${styles.md_hidden} ${
            nav ? `${styles.block}` : `${styles.hidden}`
          }`}
        >
          <ul
            /*className={`${styles.menu}`}*/ style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <li className={`${styles.li}`}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${
                    isActive(link.path) ? `${styles.active}` : ""
                  } `}
                  style={{ margin: "0 20px" }}
                >
                  {link.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div
          className={`${styles.md_hidden} ${styles.menu_icon}`}
          onClick={onClick}
        >
          {nav ? (
            <FaTimes size={15} style={{ color: "white" }} />
          ) : (
            <FaBars size={15} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </nav>
  );
}
