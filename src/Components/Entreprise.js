import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";
import map from "../Assets/Images/map.png";

function Entreprise () {
    return (
        <div id="entreprise">
            <div className="mainTitle">
                <img src={star} alt="Star" className="star"/>
                <h1>Corum l'Épargne</h1>
            </div>

            <div id="entrepriseContent">
                <div className="corumContent">
                    <p><span className={"bold"}>Corum l'Épargne</span> est une société française indépendante spécialisée
                        dans la <span className={"bold"}>gestion d'épargne à long terme</span>. Elle accompagne ses
                        clients avec des <span className={"bold"}>solutions</span> innovantes, fiables et transparentes
                        pour <span className={"bold"}>sécuriser et valoriser leur patrimoine.</span></p>

                    <h3>Chiffres clés</h3>
                    <ul>
                        <li>140 000 épargnants</li>
                        <li>Plus de 9 milliards d'euros investis</li>
                        <li>250 collaborateurs répartis dans 7 pays</li>
                    </ul>

                    <h3>Structure du groupe</h3>
                    <ul>
                        <li><span className={"bold"}>CORUM Asset Management</span> : gestion des SCPI</li>
                        <li><span className={"bold"}>CORUM Life</span> : assurance-vie et produits retraite</li>
                        <li><span className={"bold"}>CORUM Butler Asset Management</span> : gestion de fonds obligataires</li>
                    </ul>

                    <h3>Valeurs et engagement</h3>
                    <p>Le groupe place l’<span className={"bold"}>engagement, la transparence et l’innovation</span>
                        au cœur de sa stratégie. Chaque collaborateur s'investit pour offrir des <span className={"bold"}>
                        solutions financières</span>performantes et un <span className={"bold"}>suivi personnalisé
                        </span> clients.</p>

                    <h3>Mon expérience</h3>
                    <p>J'ai réalisé mon alternance de <span className={"bold"}>deux ans</span> au sein de l'entreprise.
                        J'ai commencé en tant qu’<span className={"bold"}>IT Support Analyst</span>, puis j'ai rejoint
                        le <span className={"bold"}>pôle cybersécurité</span>. Cela m'a permis de comprendre les
                        enjeux IT et de contribuer à la protection des infrastructures et des données sensibles.</p>
                </div>
            </div>
        </div>
    )
}

export default Entreprise;