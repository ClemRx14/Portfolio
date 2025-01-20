import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text-js';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray('p');
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  
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
      <div className="container">
        <div className="text-wrapper">
          <p>Clément Raux</p>
          <p>Frontend Developer</p>
          <p>UI Designer</p>
          <p>Performance Web</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
