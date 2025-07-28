import '../Assets/StyleSheets/style.css';
import React from "react";
import '../index'
import star from "../Assets/Images/star.png";

function Veille () {
    return (
        <div id={"veille"}>
            <div className={"mainTitle"}>
                <img src={star} className={"star"} alt={"Star"}/>
                <h1>Veille technologique</h1>
            </div>

        </div>
    )
}

export default Veille;