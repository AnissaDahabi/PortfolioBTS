import '../Assets/StyleSheets/style.css';
import '../index'
import React from "react";
import logo from "../Assets/Images/moonLogo.png";
import ellipseS from "../Assets/Images/ellipseSmall.png";
import linkedin from "../Assets/Images/linkedin.png";
import github from "../Assets/Images/github.png";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'

function Home() {
    return (
        <div>
            <div className={"home"} id={"home"}>
                <img src={ellipseS} className={"ellipseSmall"} alt={"Background"}/>

                <img src={logo} className={"moonLogo"} alt={"Moon Logo"}/>

                <div className={"homeContent"}>
                    <div className={"homeText"}>
                        <h1>Anissa Dahabi</h1>
                        <h2>Développeuse</h2>
                        <p>Etudiante en <span className={"bold"}> BTS SIO </span> (Services Informatiques aux Organisations) au
                            sein de l'<span className={"bold"}>EFREI</span>, grande
                            école d'ingénieurs, j'ai choisi l'option <span className={"bold"}>SLAM</span> (Solutions Logicielles
                            et Applications Métiers) dans le
                            but d'appronfondir mes connaissances en développement</p>
                        <p>J'effectue ces études en tant qu'<span className={"bold"}>IT Support Analyst</span> chez
                            <span className={"bold"}> Corum L'Epargne </span></p>
                    </div>

                    <div className={"iconContainer"}>
                        <ul className={"socials list-unstyled"}>
                            <li>
                                <a href={"https://www.linkedin.com/in/anissa-dahabi/"} target={"_blank"}
                                   title={"Profile Linkedin"} className={"socialIcon"}>
                                    <img src={linkedin} className={"logo"} alt={"Linkedin Logo"}/>
                                </a>
                            </li>

                            <li>
                                <a href={"https://github.com/AnissaDahabi"} target={"_blank"}
                                   title={"Profile Github"} className={"socialIcon"}>
                                    <img src={github} className={"logo"} alt={"Github Logo"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;