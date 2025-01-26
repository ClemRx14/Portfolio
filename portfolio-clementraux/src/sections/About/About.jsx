import React from 'react';
import { ReactTyped } from 'react-typed';
import './About.css';
import photo from '../../assets/images/AboutClementRaux.webp';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGitAlt, FaFigma, FaNpm } from 'react-icons/fa';

const About = () => {

    const tableauStack = [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaSass, name: "Sass" },
        { icon: FaJs, name: "JavaScript" },
        { icon: FaReact, name: "React" },
        { icon: FaGitAlt, name: "Git" },
        { icon: FaFigma, name: "Figma" },
        { icon: FaNpm, name: "NPM" },
      ];

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
                <div className="about-description-paragraphes">
                    <p>
                        Avec une année d'expérience après avoir suivi une formation certifiante OpenClassrooms, je me suis orienté vers le développement. Avant de me lancer dans ce domaine, j'ai obtenu une licence en sociologie, ce qui m'a permis d'acquérir une approche analytique et une compréhension approfondie des utilisateurs. Cela me permet aujourd'hui de créer des expériences web adaptées aux besoins réels des utilisateurs.
                    </p>
                    <p>
                        Les technologies m'ont toujours fasciné, et c'est naturellement que je me suis dirigé vers le développement. Concevoir des sites web et des applications à la hauteur de vos attentes est pour moi une véritable mission. Chaque projet est une occasion de combiner ma passion pour la technologie et mon engagement à offrir des solutions performantes et innovantes.
                    </p>
                    <p>
                        Je suis particulièrement soucieux des performances et de l'optimisation SEO. Une expérience utilisateur rapide et fluide est essentielle, tout comme la visibilité sur les moteurs de recherche. Mon objectif est de créer des sites web qui ne sont pas seulement fonctionnels, mais également optimisés pour la vitesse et le référencement, garantissant ainsi une visibilité maximale.
                    </p>
                </div>
                <div className="about-stacks">
                    <h3>Mes Technologies</h3>
                    <div className="about-stacks-icons">
                        {tableauStack.map((tech, index) => (
                            <div key={index} className="about-stacks-icon">
                                <tech.icon aria-label={tech.name} className={tech.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;