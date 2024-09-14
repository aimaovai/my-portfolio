import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Article from "@/components/Article/Article";


export default function About() {
    const articleHeading = "About Me";
    return (
        <div className="background">
            <NavBar />
            <div className="body">
                <Article
                    heading={articleHeading} 
                    content={undefined}                />
            </div>
        </div>
    );

}