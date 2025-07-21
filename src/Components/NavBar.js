import '../Assets/StyleSheets/style.css';
import homeButton from "../Assets/Images/homeButton.png";
import '../index'
import React, { useState, useEffect } from "react";

function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        const sections = document.querySelectorAll('[id^="home"], [id^="bts"], [id^="parcours"], [id^="epreuves"], [id^="entreprise"], [id^="veille"]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
            <div className="navBar">
                <img src={homeButton} className="homeButton" alt="Home Button"
                     onClick={() => {
                         const homeSection = document.querySelector('#home');
                         if (homeSection) {
                             homeSection.scrollIntoView({ behavior: 'smooth' });
                         }
                     }}/>
                <div className="navBarLinks">
                    <a href="#bts" className={activeSection === "bts" ? "active" : ""}>BTS</a>
                    <a href="#epreuves" className={activeSection === "epreuves" ? "active" : ""}>Epreuves</a>
                    <a href="#parcours" className={activeSection === "parcours" ? "active" : ""}>Parcours</a>
                    <a href="#entreprise" className={activeSection === "entreprise" ? "active" : ""}>Entreprise</a>
                    <a href="#veille" className={activeSection === "veille" ? "active" : ""}>Veille Technologique</a>
                </div>
            </div>
    );
}

export default NavBar;
