'use client';

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "./uiprototypes.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function UIPrototypes() {
  const router = useRouter();
  return (
    <div className="content">
      <NavBar />
      <div className="content-body">
      <div className={styles["back-button"]}>
          <BiArrowBack onClick={() => router.back()} />
        </div>
        <div
        className={styles.imageContainer}
        >
          <div>

            <Image
              src="/images/portfoliodesktop.png"
              alt="logo"
              width={300}
              height={300}
              style={{ border: "1px solid white" }}
            />
            <Link href="https://www.figma.com/design/E02J8NqmmWPSeLiYOrYqsb/Aima's-Website?node-id=0-1&t=uMy8L2ot21kJzU0I-1">My Portfolio</Link>
          </div>
          <div>
            <Image
              src="/images/triplez-desktop.png"
              alt="logo"
              width={300}
              height={300}
              style={{ border: "1px solid white" }}
            />
            <Link href="https://www.figma.com/design/97Ox4OAKMJcBcndeu6ZbS7/Triple-Z-Site?node-id=1-51&t=uMy8L2ot21kJzU0I-1">Triple Z Home Solutions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
