import React from "react";
import Image from "next/image";
import resumeImage from '/public/images/resume.jpg'

export default function MyResume() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image
                src={resumeImage}
                alt="Resume"
                height={900}
                width={800} />
        </div>);
}