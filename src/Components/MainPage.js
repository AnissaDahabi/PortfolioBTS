import '../Assets/StyleSheets/style.css';
import '../index'
import NavBar from "./NavBar";
import BackgroundVideo from "./BackgroundVideo";
import Home from "./Home";

function MainPage() {
    return (
        <div>
            <NavBar/>
            <BackgroundVideo/>
            <Home/>
        </div>
    );
}

export default MainPage;
