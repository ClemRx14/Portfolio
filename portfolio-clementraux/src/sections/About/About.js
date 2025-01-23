import React from 'react';
import {ReactTyped} from 'react-typed';
import './About.css';
import photo from '../../assets/images/AboutClementRaux.webp';


const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-photo">
                    <img src={photo} alt="Photographie de Clément Raux, façon dessin." loading="lazy"></img>
                </div>
                <div className="about-description">
                    <h2 id='about'>À propos de moi</h2>
                    <div className="typed-animation">
                    <ReactTyped
                    strings={["Bonjour je suis Clément Raux, Développeur Frontend, bienvenue sur mon Portfolio !"]}
                    typeSpeed={60}
                    backSpeed={30}
                    backDelay={1000}
                    backspaceDelay={500}
                    showCursor={true}
                    cursorChar="_"
                    loop={true}
                    />
                    </div>
                </div>
                <div className="about-stacks">

                </div>
            </div>
        </section>
    );
}

export default About;