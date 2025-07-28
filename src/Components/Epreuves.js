import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";

function Epreuves () {
    return (
        <div id={"epreuves"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Epreuves</h1>
            </div>

        </div>
    )
}

export default Epreuves;