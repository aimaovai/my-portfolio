'use client'

import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Projects() {
    const router = useRouter();
    return (
        <div className="background2">
            <NavBar />
            <div style={{
                color: "white", fontSize: "xx-large", margin: "20% 10% 0 10%", left: 0, zIndex: 1, position: "relative", textAlign: "center", height: "50%",
            }}>
                <div style={{ color: "white", fontSize: "xx-large", margin: "10%", left: 0, zIndex: 1, position: "relative" }}>
                    <div style={{ paddingBottom: "50px", textDecorationLine: "underline", display: "flex", justifyContent: "space-evenly" }}>
                        <Button color="default" onClick={() => router.push("/uiprototypes")} style={{ fontSize: "larger", height: "100px", whiteSpace: "normal", wordWrap: "break-word", width: "300px", lineHeight: "50px" }}>UI Prototype Projects</Button>
                        <Button color="default" onClick={() => router.push("/webdesign")} style={{ fontSize: "larger", height: "100px", whiteSpace: "normal", wordWrap: "break-word", width: "300px", lineHeight: "50px" }}>Web Dev Projects</Button>
                    </div>
                    <div style={{ paddingBottom: "20px", textDecorationLine: "underline" }}>
                        <Button color="default" onClick={() => router.push("/graphicdesign")} style={{ fontSize: "larger", height: "100px", whiteSpace: "normal", wordWrap: "break-word", width: "300px", lineHeight: "50px" }}>Graphic Design Projects</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}