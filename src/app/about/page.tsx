import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Article from "@/components/Article/article";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";


export default function About() {
    const articleHeading = "About Me";
    return (
        <div className="background2">
            <NavBar />
            <div className="body">
                <Article
                    heading={articleHeading} 
                    content={undefined}
                />
                <ProfilePicture />
            </div>
        </div>
    );

}