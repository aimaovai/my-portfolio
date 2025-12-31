"use client";

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";
import styles from "./graphicdesign.module.css";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/Footer";
// import { isMobile, isTablet, isDesktop } from 'react-device-detect';

export default function GraphicDesign() {
  const cards = [
    {
      link: "https://www.canva.com/design/DAGO65IvjPw/xM7mP79-vjq54iyBXvgYcQ/view?utm_content=DAGO65IvjPw&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/mybusinesscard.png",
      company: "Aima Ovai",
    },
    {
      link: "https://www.canva.com/design/DAFg4sEFUs0/cuuZ3_yFal2fPFtSoQhAbw/view?utm_content=DAFg4sEFUs0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/triplez.png",
      company: "Triple Z Home Solutions",
    },
    {
      link: "https://www.canva.com/design/DAFy9AbZpUo/V3utD12shHJ_UWkBgfh0IA/view?utm_content=DAFy9AbZpUo&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/garlandsbyasi.png",
      company: "Garlands by Asi",
    },
  ];
  const flyers = [
    {
      link: "https://www.canva.com/design/DAF6BNBTwAg/Nqa6t61jRg-xIWqqwl00NA/view?utm_content=DAF6BNBTwAg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/babychristening.svg",
      event: "Baby Christening",
    },
    {
      link: "https://www.canva.com/design/DAGAYzAZO-M/GAZWKYKCpPKe2wZF2w0onQ/view?utm_content=DAGAYzAZO-M&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/60thinvitation.svg",
      event: "60th Birthday Invitation",
    },
    {
      link: "https://www.canva.com/design/DAFye8z57h8/75QIiJdxreoiXJBYmFWQrQ/view?utm_content=DAFye8z57h8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      image: "/images/heavensharmony.svg",
      event: "RCCG Heaven's Harmony",
    },
  ];
  const router = useRouter();
  return (
    <div className="content">
      <NavBar />
      <div className={styles.container}>
        <div className={styles["content-body"]}>
          <div className={styles["back-button"]}>
            <BiArrowBack onClick={() => router.back()} />
          </div>
          <div className={styles.sectionHeader}>
            <h1>Business Cards</h1>
            <hr />
          </div>
          <div className={styles["card-container"]}>
            <div>
              {cards.map((card) => (
                <span key={card.link}>
                  <Link href={card.link}>
                    <Image
                      src={card.image}
                      alt="Business card"
                      width={500}
                      height={500}
                    />
                    <span className={styles["card-text"]}>{card.company}</span>
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.sectionHeader}>
            <h1>Event Invites & Flyers</h1>
            <hr />
          </div>
          <div className={styles["flyer-container"]}>
            <div>
              {flyers.map((flyer) => (
                <span key={flyer.link}>
                  <Link href={flyer.link}>
                    <Image
                      src={flyer.image}
                      alt="logo"
                      width={200}
                      height={200}
                    />
                    <span className={styles["card-text"]}>{flyer.event}</span>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
