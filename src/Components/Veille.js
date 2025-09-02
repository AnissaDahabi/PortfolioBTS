import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";

function Veille () {
    return (
        <div id={"veille"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Qu'est-ce que la veille technologique?</h1>
            </div>
            <p>La veille technologique est un processus de surveillance continue et systématique des avancées
                technologiques dans un domaine particulier. Elle vise à identifier les innovations, les tendances,
                les nouvelles technologies et les changements dans l’environnement technologique qui pourraient
                impacter une organisation ou un secteur d’activité.</p>
        </div>
    )
}

export default Veille;