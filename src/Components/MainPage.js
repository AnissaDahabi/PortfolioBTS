import '../Assets/StyleSheets/style.css';
import '../index'
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Parcours from "./Parcours";
import BTS from "./BTS";
import Entreprise from "./Entreprise";
import Veille from "./Veille";
import Epreuves from "./Epreuves";

function MainPage() {
    return (
        <Routes>
            <Route path="/PortfolioBTS" element={
                <>
                    <NavBar />
                    <Home />
                    <BTS />
                    <Parcours />
                    <Entreprise />
                    <Veille />
                </>
            } />
            <Route path="/epreuves" element={
                <>
                    <NavBar />
                    <Epreuves />
                </>
            } />
        </Routes>
    );
}

export default MainPage;
