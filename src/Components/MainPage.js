import '../Assets/StyleSheets/style.css';
import '../index'
import NavBar from "./NavBar";
import BackgroundVideo from "./BackgroundVideo";
import Home from "./Home";
import Apropos from "./Apropos";
import Parcours from "./Parcours";
import BTS from "./BTS";

function MainPage() {
    return (
        <div>
            <NavBar/>
            <BackgroundVideo/>
            <Home/>
            <Apropos/>
            <BTS/>
            <Parcours/>
        </div>
    );
}

export default MainPage;
