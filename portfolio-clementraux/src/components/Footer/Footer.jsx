import React from "react";
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <p>&copy; 2025 Raux Clément. Tous droits réservés.</p>
            </div>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/clément-raux-836436348" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/ClemRx14" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            </div>
        </footer>
    )

};

export default Footer;