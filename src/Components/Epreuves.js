import '../Assets/StyleSheets/style.css';
import star from "../Assets/Images/star.png";

function Epreuves () {
    return (
        <div className="epreuves" id="epreuves">
            <div className="E5">
                <h1>Epreuves du BTS SIO</h1>
                <div className="content">
                    <div className="mainTitle">
                        <img src={star} className="star" alt="Star" />
                        <h1>Epreuve 5: Support et mise à disposition de services informatiques</h1>
                    </div>
                    <h3>Objectif:</h3>
                    <p>Cette épreuve vise à évaluer chez la personne candidate l’acquisition des compétences dans le cadre
                        du "Support et mise à disposition de services informatiques".</p>
                    <h3>Modalités d'évaluation:</h3>
                    <p>Cette épreuve consiste en un oral de 40 minutes.
                        <br/>
                        L’épreuve comporte deux phases consécutives:</p>
                    <ul>
                        <li><strong>Phase 1:</strong> Présentation de 10 minutes maximum du parcours de professionnalisation</li>
                        <li><strong>Phase 2:</strong> Entretien de 30 minutes avec le jury pour approfondir les réalisations</li>
                    </ul>
                    <a>Mon Tableau de synthèse</a>
                </div>
            </div>
            <div className="E6">
                <div className="mainTitle">
                    <img src={star} className="star" alt="Star" />
                    <h1>Epreuve 6: Conception et développement d'applications</h1>
                </div>
                <h3>Objectif:</h3>
                <p>Cette épreuve vise à évaluer chez la personne candidate l’acquisition des compétences dans le cadre
                    de la "Conception et développement d'applications".</p>
                <p>Cette épreuve évalue les compétences suivantes:</p>
                <ul>
                    <li>Concevoir et développer une solution applicative</li>
                    <li>Assurer la maintenance corrective ou évolutive d'une solution applicative</li>
                    <li>Gérer les données</li>
                </ul>
                <h3>Modalités d'évaluation:</h3>
                <p>Cette épreuve consiste en un oral de 40 minutes suite à environ 1h30 de préparation.
                    <br/>
                    L’épreuve comporte deux phases consécutives:</p>
                <ul>
                    <li><strong>Phase 1:</strong> Préparation de 30 minutes suivie d’un entretien de 20 minutes maximum</li>
                    <li><strong>Phase 2:</strong> Préparation d’une heure suivie d’un entretien de 20 minutes maximum</li>
                </ul>
            </div>
        </div>
    );
}

export default Epreuves;