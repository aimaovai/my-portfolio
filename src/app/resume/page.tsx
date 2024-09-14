import React from "react";
import Header from "@/components/NavBar/NavBar";
import styles from "./resume.module.css";


export default function Resume() {
    return (
        <div className="background">
            <Header />
            <div className={styles.body}>
                Resume
            </div>
        </div>
    );
}