import '../Assets/StyleSheets/style.css';
import '../index'
import NavBar from "./NavBar";
import Home from "./Home";
import Parcours from "./Parcours";
import BTS from "./BTS";
import Entreprise from "./Entreprise";
import Veille from "./Veille";

function MainPage() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <BTS/>
            <Parcours/>
            <Entreprise/>
            <Veille/>
        </div>
    );
}

export default MainPage;
