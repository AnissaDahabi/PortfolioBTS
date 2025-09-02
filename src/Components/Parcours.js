import '../Assets/StyleSheets/style.css';
import '../index'
import star from "../Assets/Images/star.png";
import React from "react";

function Parcours() {
    return (
        <div className={"parcours"} id={"parcours"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Mon parcours</h1>
            </div>
        </div>
    );
}

export default Parcours;