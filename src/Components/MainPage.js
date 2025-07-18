import '../Assets/StyleSheets/style.css';
import '../index'
import NavBar from "./NavBar";
import Home from "./Home";
import Parcours from "./Parcours";
import BTS from "./BTS";

function MainPage() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <BTS/>
        </div>
    );
}

export default MainPage;
