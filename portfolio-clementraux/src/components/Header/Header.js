import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text-js';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray('p');
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
  
    titles.forEach((title) => {
      const splitTitle = new SplitText(title, { type: "chars" });
  
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.05,
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.05,
      }, "<1");
    });
  }, []);

  return (
    <header id='home'>
      <div className="top-header">
        <div className="logo-header">
          <a href="#about">
            <img src='/images/logoCR.svg' alt='Logo représentant les initials C et R'></img>
          </a>
        </div>
        <nav className="navbar-header">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#mesprojets">Mes Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="text-wrapper">
        <p>Clément Raux</p>
        <p>Frontend Developper</p>
        <p>UI/UX Designer</p>
        <p>Performance Web</p>
      </div>
      <div className="links-header">
        <a href="#projects">Voir mes projets</a>
        <a href="#contact">Me contacter</a>
      </div>
    </header>
  );
};

export default Header;
