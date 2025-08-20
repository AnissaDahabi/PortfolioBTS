import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";

function Entreprise () {
    return (
        <div id={"entreprise"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Corum l'Epargne</h1>
            </div>
            <div id={"entrepriseContent"}>
                <p>J'ai effectué mon alternance de deux ans au sein de l'entreprise Corum l'Epagne. J'ai tout d'abord
                travaillé un an en tant qu'IT Support Analyst avant de migrer au pôle cybersécurité en septembre 2025.</p>
                <h3>Mes missions en tant qu'IT Support Analyst</h3>
                <p> blablabla </p>
                <h3>Mes missions en tant que Cybersecurity Engineer</h3>
                <p> blablabla </p>
                <h3>Mes missions en tant que DevOps</h3>
                <p> blablabla </p>
            </div>
        </div>
    )
}

export default Entreprise;