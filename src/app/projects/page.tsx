import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";

export default function Projects() {    
    return (
        <div className="background">
            <NavBar />
            <div style={{ color: "white", fontSize: "xx-large", margin: "20% 10% 0 10%", left:0, zIndex: 1, position: "relative", top: "30%"
            , textAlign: "center", height: "100vh", wordWrap: "break-word",
             }}>
                <div style={{paddingBottom: "10px", textDecorationLine: "underline"}}>
                <Link href={"https://github.com/aimaovai"}>My Github</Link>
                </div>
                Welcome! My projects page is still in progress. 
                Come back later, and check out other pages in the main time.
            </div>
        </div>
    );
}