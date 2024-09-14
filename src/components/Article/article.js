import React from "react";
import styles from "./article.module.css";


export default function Article({ heading, content }) {

    const aboutText = `Aima Ovai is a  software engineer with a background in biomedical engineering and nearly three years of full-stack development experience. Based in Austin, TX, Aima has worked on various projects that involve designing, building, and deploying scalable web and cloud applications. With proficiency in programming languages such as Java, Python, React, JavaScript, SQL, and C++, Aima is skilled at tackling complex problems and finding innovative solutions. Aima is passionate about learning new technologies and contributing to high-performing teams.

                Aima's professional journey includes roles at prominent organizations like Dell Technologies, where she led initiatives that significantly improved system performance and reduced defects. Aima has a proven ability to collaborate with cross-functional teams to deliver innovative solutions, and has developed strong skills in problem-solving, making her a strong candidate for technical positions in both software engineering and cybersecurity. Aima is a dedicated learner who is always looking to expand her knowledge and skills. Passionate about continuous learning, Aima is always looking to expand her expertise, having recently begun exploring Sass and pursuing certifications in Docker and cybersecurity.

                With a solid foundation in software development principles, a strong technical skill set, and a drive to make impactful contributions, Aima is committed to pushing boundaries and to advancing her career in roles that focus on both back-end and front-end development, cloud services, and cybersecurity.`;
    return (        
        <article className={styles.article}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.paragraph}>{content===undefined?aboutText:content}</p>
        </article>
    );
}