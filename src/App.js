import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameSection from "./components/GameSection";
import Footer from "./components/Footer";

const App = () => (
    <div>
        <Navbar />
        <Jumbotron />
        <GameSection />
        <Footer />
    </div>
);

export default App;
