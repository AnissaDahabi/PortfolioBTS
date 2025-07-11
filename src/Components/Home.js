import '../Assets/StyleSheets/style.css';
import '../Assets/StyleSheets/icons.css';
import '../index'
import 'boxicons'

function Home() {
    return (
        <div className={"home"}>
            <div className={"homeText"}>
                <h1>Anissa Dahabi</h1>
                <h2>Etudiante en BTS SIO</h2>
            </div>

            <div className={"iconContainer"}>
                <ul className={"socials list-unstyled"}>
                    <li>
                        <a href={"https://www.linkedin.com/in/anissa-dahabi/"} target={"_blank"}
                           title={"Profile Linkedin"} className={"socialIcon"}>
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.05-1.68z"/>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href={"https://github.com/AnissaDahabi"} target={"_blank"}
                           title={"Profile Github"} className={"socialIcon"}>
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={"buttonContainer"}>
                <button className={"button"}>A propos</button>
            </div>
        </div>
    );
}

export default Home;