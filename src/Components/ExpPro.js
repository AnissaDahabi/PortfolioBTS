import '../Assets/StyleSheets/style.css';
import '../index'
import star from "../Assets/Images/star.png";
import React from "react";

function ExpPro() {
    return (
        <div className={"parcours"} id={"parcours"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Expériences professionnelles</h1>
            </div>
            <div className={"parcoursContent"}>
                <h2>Cybersecurity apprentice</h2>
                <h3>Corum l’Epargne - de Septembre 2025 à Janvier 2026</h3>
                <p>Analyser les alertes de sécurité générées par les logiciels SIEM (Security Information and Event
                    Management) <br/> Participer aux audits de sécurité pour identifier les vulnérabilités<br/>
                    Documenter les incidents et proposer des mesures correctives</p>
                <hr/>
                <h2>IT Support Analyst</h2>
                <h3>Corum l’Epargne - de Septembre 2024 à Aout 2025</h3>
                <p>Résolution de tickets <br/> Onboardings des nouveaux arrivants <br/> Rédaction de rapports
                    d’intervention et documentation des logiciels d’entreprise</p>
            </div>
        </div>
    );
}

export default ExpPro;