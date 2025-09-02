import '../Assets/StyleSheets/style.css';
import homeButton from "../Assets/Images/homeButton.png";
import '../index'
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
        document.body.classList.toggle('menu-open', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    const handleLinkClick = (sectionId) => {
        if (location.pathname !== '/PortfolioBTS') {
            navigate('/PortfolioBTS');
            setTimeout(() => {
                const section = document.querySelector(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        closeMenu();
    };

    return (
        <div className="navBar">
            <img
                src={homeButton}
                className="homeButton"
                alt="Home Button"
                onClick={() => {
                    closeMenu();
                    if (location.pathname !== '/PortfolioBTS') {
                        navigate('/PortfolioBTS');
                        setTimeout(() => {
                            const homeSection = document.querySelector('#home');
                            if (homeSection) {
                                homeSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 300);
                    } else {
                        const homeSection = document.querySelector('#home');
                        if (homeSection) {
                            homeSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }}
            />

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
                    href="#parcours"
                    className={activeSection === "parcours" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('#parcours');
                    }}
                >
                    Expériences Professionnelles
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
                <a
                    href="/epreuves"
                    className={location.pathname === "/epreuves" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/epreuves');
                        closeMenu();
                    }}
                >
                    Epreuves
                </a>
            </div>
        </div>
    );
}

export default NavBar;