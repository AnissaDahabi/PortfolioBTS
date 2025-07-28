import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";

function Entreprise () {
    return (
        <div id={"entreprise"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Entreprise</h1>
            </div>

        </div>
    )
}

export default Entreprise;