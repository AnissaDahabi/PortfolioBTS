import '../Assets/StyleSheets/style.css';
import homeButtonOn from "../Assets/Images/homeButtonOn.png";
import '../index'
import React from "react";

function NavBar() {
    return (
            <div className="navBar">
                <img src={homeButtonOn} className={"homeButton"} alt={"Home Button"}/>
                <div className="navBarLinks">
                    <a href="#bts">BTS</a>
                    <a href="#">Parcours</a>
                    <a href="#">Epreuves</a>
                    <a href="#entreprise">Entreprise</a>
                    <a href="#">Veille Technologique</a>
                </div>
            </div>
    );
}

export default NavBar;
