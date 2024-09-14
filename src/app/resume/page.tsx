import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import MyResume from "@/components/MyResume/MyResume";

export default function Resume() {
    return (
        <div className="background">
            <NavBar />
            <div className="body">
                <MyResume />
            </div>
        </div>
    );
}