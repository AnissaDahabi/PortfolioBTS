import '../Assets/StyleSheets/style.css';
import star from "../Assets/Images/star.png";

function Epreuves () {
    return (
        <div className="epreuves" id="epreuves">
            <div className="mainTitle">
                <img src={star} className="star" alt="Star" />
                <h1>Epreuves</h1>
            </div>
            <div className="content">
                <p>Voici un aperçu des épreuves du BTS SIO :</p>
                <ul>
                    <li><strong>E5 :</strong> Projet de développement</li>
                    <li><strong>E6 :</strong> Support et cybersécurité</li>
                </ul>
            </div>
        </div>
    );
}

export default Epreuves;