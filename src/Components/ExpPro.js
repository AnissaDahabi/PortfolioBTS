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
                <p>Déploiement de mises à jour correctives (patch management) pour combler les failles de sécurité sur
                    les postes de travail <br/> Conception et envoi de campagnes de phishing interne pour tester la
                    vigilance des collaborateurs <br/>  Communication pédagogique auprès des équipes : sensibilisation
                    aux bonnes pratiques de cybersécurité et débriefings post-campagnes <br/> Rédaction et mise à jour
                    de documentation de sécurité informatique (guides, procédures, supports de sensibilisation) <br/>
                    Monitoring des incidents et alertes de cybersécurité, avec remontée et traitement en collaboration
                    avec l’équipe IT</p>
                <hr/>
                <h2>IT Support Analyst</h2>
                <h3>Corum l’Epargne - de Septembre 2024 à Aout 2025</h3>
                <p>Gestion et résolution de tickets utilisateurs (niveau 1 et 2) <br/> Onboarding des nouveaux arrivants
                    : accueil, présentation du matériel et des bonnes pratiques de sécurité, assistance à la connexion
                    aux logiciels et outils internes <br/> Configuration des postes de travail, création et gestion des
                    accès utilisateurs <br/> Rédaction et mise à jour de la documentation technique et des rapports
                    d’intervention <br/> Contribution à l’amélioration continue des processus de support IT </p>
            </div>
        </div>
    );
}

export default ExpPro;