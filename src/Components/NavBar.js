import '../Assets/StyleSheets/style.css';
import '../index'
import videoFile from '../Assets/video.mp4'
import React from "react";

function NavBar() {
    return (
            <div className="navBar">
                <video className="navVideo" autoPlay loop muted>
                    <source src={videoFile} type="video/mp4"/>
                </video>
                <div className="navBarLinks">
                    <a href="#">Accueil</a>
                    <a href="#">A propos</a>
                    <a href="#">Parcours</a>
                    <a href="#">Epreuve 5</a>
                    <a href="#">Epreuve 6</a>
                    <a href="#">Veille Technologique</a>
                    <a href="#">Contact</a>
                </div>
                <hr/>
            </div>
    );
}

export default NavBar;
