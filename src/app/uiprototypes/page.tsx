import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function UIPrototypes() {
    // const router = useRouter();
    return (
        <div className="background2">
            <NavBar />
            <div style={{ color: "white", fontSize: "xx-large", margin: "20% 10% 0 10%", left:0, zIndex: 1, position: "relative", textAlign: "center", height: "50%", wordWrap: "break-word",
             }}>
                <div style={{paddingBottom: "10px", textDecorationLine: "underline"}}>
                <Link href={"https://www.figma.com/@aimaovai"}>My Figma Profile</Link>
                </div>
                Welcome! My ui projects page is still in progress. 
                Come back later, and check out other pages in the main time.
            </div>
        </div>
    );
}