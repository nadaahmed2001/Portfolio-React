import React from "react";
import './About.css';

function About() {
    return (
        <section id="about" className="about-section container">
        <div className="text-center">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
            I am a Full Stack Web Developer and Software Engineer.
            </p>
        </div>
        <div className="about-content">
            <div className="about-text">
            <h3 className="about-title">Who am I?</h3>
            <p>
            A computer science fresh graduate with a passion for computing and programming,
            always eager to learn and improve. Currently enrolled in the ITI 4-month scholarship program,
            specializing in Full Stack Web Development with Python.
            Excited to dive deeper into web technologies and expand my skills in software engineering
            </p>
            </div>
            {/* <div className="about-image">
            <img
                src={"../assets/Nada.jpeg"}
                alt="Nada Ahmed"
                className="profile-image"
            />
            </div> */}
        </div>

        </section>
    );
}

export default About;

