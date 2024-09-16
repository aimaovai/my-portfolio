import React from "react";
import NavBar from "@/components/NavBar/NavBar";


export default function Home() {
    return (
        <div className="background">
            <NavBar />
            <div style={{ color: "white", fontSize: "xx-large", margin: "20% 10% 0 10%", left:0, zIndex: 1, position: "relative", top: "30%"
            , textAlign: "center", height: "100vh",
             }}>
                Welcome! Page still in progress. Check out other pages in the main time!
            </div>
        </div>
    );

}