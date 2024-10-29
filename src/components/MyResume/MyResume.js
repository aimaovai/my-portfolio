import React from "react";
import Image from "next/image";
import resumePg1 from '/public/images/resume_Page_1.jpg';
import resumePg2 from '/public/images/resume_Page_2.jpg';

export default function MyResume() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Image
                src={resumePg1}
                alt="Resume page 1"
                height={900}
                width={800} />
            <Image
                src={resumePg2}
                alt="Resume page 2"
                height={900}
                width={800} />
        </div>);
}