import '../Assets/StyleSheets/style.css';
import homeButton from "../Assets/Images/homeButton.png";
import '../index'
import React, { useState, useEffect } from "react";

function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Empêcher le scroll quand le menu est ouvert
        document.body.classList.toggle('menu-open', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    const handleLinkClick = (sectionId) => {
        closeMenu();
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navBar">
            <img
                src={homeButton}
                className="homeButton"
                alt="Home Button"
                onClick={() => {
                    closeMenu();
                    const homeSection = document.querySelector('#home');
                    if (homeSection) {
                        homeSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            />

            {/* Menu hamburger */}
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`navBarLinks ${isMenuOpen ? 'active' : ''}`}>
                <a
                    href="#bts"
                    className={activeSection === "bts" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#bts');
                    }}
                >
                    BTS
                </a>
                <a
                    href="#epreuves"
                    className={activeSection === "epreuves" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#epreuves');
                    }}
                >
                    Epreuves
                </a>
                <a
                    href="#parcours"
                    className={activeSection === "parcours" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#parcours');
                    }}
                >
                    Parcours
                </a>
                <a
                    href="#entreprise"
                    className={activeSection === "entreprise" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#entreprise');
                    }}
                >
                    Entreprise
                </a>
                <a
                    href="#veille"
                    className={activeSection === "veille" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#veille');
                    }}
                >
                    Veille Technologique
                </a>
            </div>
        </div>
    );
}

export default NavBar;