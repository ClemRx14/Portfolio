import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text-js';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray('.text-wrapper p');
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
  
    titles.forEach((title) => {
      const splitTitle = new SplitText(title, { type: "chars" });
  
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.02,
      }, "<1");
    });
  }, []);

  return (
    <header>
      <div className="top-header">
        <div className="logo-header">
          <a href="#about" aria-label="Aller à la section À propos">
            <img src='/images/logoCR.svg' alt='Logo représentant les initials C et R'></img>
          </a>
        </div>
        <nav className="navbar-header">
          <ul>
            <li><a href="#about" aria-label="Section À propos">A propos</a></li>
            <li><a href="#mesprojets" aria-label="Voir mes projets">Mes Projets</a></li>
            <li><a href="#contact" aria-label="Page de contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="text-wrapper">
        <p aria-label="Nom complet de l'auteur">Clément Raux</p>
        <p aria-label="Profession de l'auteur">Frontend Developper</p>
        <p aria-label="Expertise en conception">UI/UX Designer</p>
        <p aria-label="Expertise en Performance">Performance Web</p>
      </div>
      <div className="links-header">
        <a href="#mesprojets" aria-label="Voir mes projets en détail">Voir mes projets</a>
        <a href="#contact" aria-label="Formulaire de contact">Me contacter</a>
      </div>
    </header>
  );
};

export default Header;
