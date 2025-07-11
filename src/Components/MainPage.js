import '../Assets/StyleSheets/style.css';
import '../index'
import NavBar from "./NavBar";
import BackgroundVideo from "./BackgroundVideo";
import Home from "./Home";
import Apropos from "./Apropos";

function MainPage() {
    return (
        <div>
            <NavBar/>
            <BackgroundVideo/>
            <Home/>
            <Apropos/>
        </div>
    );
}

export default MainPage;
