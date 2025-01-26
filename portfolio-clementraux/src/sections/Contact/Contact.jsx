import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Contactez-moi pour un projet ou une question</h2>
            <ul className="contact-list">
                <li className="contact-item">
                    <span className="contact-label">LinkedIn :</span>
                    <a className="contact-link" href="https://www.linkedin.com/in/clément-raux-836436348" target="_blank" rel="noopener noreferrer">
                        Cliquez ici
                    </a>
                </li>
                <li className="contact-item">
                    <span className="contact-label">Email :</span>
                    <span className="contact-info">clement.raux2@orange.fr</span>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
