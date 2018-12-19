import React from "react";

const score = 0
const topScore = 0

const Navbar = () => (
    <div>
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Clicky Game</span>
                <span className="nav justify-content-center">Click an image to begin!</span>
                <span className="nav justify-content-end">Score: {score} | Top Score: {topScore} </span>
            </div>
        </nav>
    </div>
);

export default Navbar;