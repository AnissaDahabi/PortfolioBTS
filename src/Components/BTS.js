import '../Assets/StyleSheets/style.css';
import '../index'
import videoFile from "../Assets/video.mp4";
import React from "react";

function BTS() {
    return (
        <div className={"bts"} id={"bts"}>
            <video className="btsVideo" autoPlay loop muted>
                <source src={videoFile} type="video/mp4"/>
            </video>
            <h1>Qu'est-ce que le BTS SIO?</h1>
            <p>Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO) est un programme
                de niveau Bac+2 et s'adresse aux personnes qui souhaitent se former en deux ans aux métiers
                d'administrateur réseau ou de développeur. <br/>
                Il peut-être réalisable soit en alternance d'une durée de 12 ou de 24 mois ou alors en initial avec
                minimum 10 semaines de stages obligatoire en entreprise d’une durée de 2 à 3 mois, afin de s'initier
                aux réalités du domaine professionnel.</p>
            <p><b>Le BTS SIO propose deux spécialités :</b></p>
            <ul>
                <li><b>Spécialité SISR (réseaux)</b> <br/>
                    Cette spécialité forme sur la gestion, la maintenance des infrastructures réseau.<br/>
                    On y apprend à gérer des systèmes d'exploitation, des services réseaux, mais aussi à sécuriser une
                    infrastructure et à proposer des solutions pour optimiser la performance d'un réseau.</li>
                <br/>
                <li><b>Spécialité SLAM (développement)</b> <br/>
                    Cette spécialité vise à développer des compétences en développement d'applications et de logiciels,
                    à concevoir des bases de données, programmer dans divers langages, tester et déployer des solutions
                    logicielles.
                </li>
            </ul>
        </div>
    );
}

export default BTS;