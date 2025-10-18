import '../Assets/StyleSheets/style.css';
import '../index'
import React from "react";
import star from "../Assets/Images/star.png";
import server from "../Assets/Images/serverLogo.png";
import dev from "../Assets/Images/devLogo.png";
import { Link } from "react-router-dom";


function BTS() {
    return (
        <div className={"bts"} id={"bts"}>
            <div className={"buttonContainer"}>
                <a href={"#btsTitle"} className={"button"}>En savoir plus</a>
            </div>
            <div className={"btsTitle"} id={"btsTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Qu'est-ce que le BTS SIO?</h1>
            </div>
            <p>Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO) est un programme
                de niveau <span className={"bold"}>bac +2</span> et s'adresse aux personnes qui souhaitent se former en
                deux ans aux métiers d'<span className={"bold"}>administrateur réseau</span> ou de <span className={"bold"}>
                    développeur</span>. <br/><br/>
                Il peut-être réalisable soit en <span className={"bold"}>alternance</span> d'une durée de 12 ou de
                24 mois ou alors en <span className={"bold"}>initial</span> avec minimum 10 semaines de stage
                obligatoire en entreprise, afin de s'initier aux réalités du domaine
                professionnel.</p>
            <p><b>Le BTS SIO propose deux <span className={"bold"}>spécialités</span> : </b></p>
            <div className={"specs"}>
                <div className={"SISR"}>
                    <img src={server} className={"btsLogo"} alt={"Server Logo"}/>
                    <h3>SISR (réseaux)</h3>
                        <ul>
                            <li>Gestion et la maintenance des <span className={"bold"}>infrastructures réseau</span></li>
                            <li>Gestion des <span className={"bold"}>systèmes d'exploitation</span> et des <span className={"bold"}>services réseaux</span></li>
                            <li><span className={"bold"}>Sécurisation</span> des infrastructures </li>
                            <li><span className={"bold"}>Optimisation</span> des performances d'un réseau</li>
                        </ul>
                </div>
                <div className={"SLAM"}>
                    <img src={dev} className={"btsLogo"} alt={"Dev Logo"}/>
                    <h3>SLAM (développement)</h3>
                    <ul>
                        <li>Développer des compétences en développement d'<span className={"bold"}>applications</span> et de <span className={"bold"}>logiciels</span></li>
                        <li>Conception des <span className={"bold"}>bases de données</span></li>
                        <li><span className={"bold"}>Programmation</span> dans divers langages</li>
                        <li>Tests et déploiement des <span className={"bold"}>solutions logicielles</span></li>
                    </ul>
                </div>
            </div>
            <div className={"buttonContainerBTS"}>
                <a><Link to="/epreuves" className="button">Epreuves 5 et 6</Link></a>
            </div>
        </div>
    );
}

export default BTS;