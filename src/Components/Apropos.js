import '../Assets/StyleSheets/style.css';
import '../index'

function Apropos() {
    return (
        <div className={"apropos"} id={"apropos"}>
            <h1>A Propos</h1>
            <p><b>Etudiante en BTS SIO</b> (Services Informatiques aux Organisations) au sein de l'<b>EFREI</b>, grande
                école d'ingénieurs, j'ai choisi l'option <b>SLAM</b> (Solutions Logicielles et Applications Métiers) dans le
                but d'un jour devenir développeuse spécialisée en Java</p>
            <p>J'effectue ces études en tant qu'<b>IT Support Analyst</b> chez Corum L'Epargne</p>
            <button className={"btn2"} id={"entreprise"}>En apprendre plus</button>
        </div>
    );
}

export default Apropos;