import React from "react";

const Navbar = (props) => (
  <div>
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="nav justify-content-center">Click an image to begin!</span>
        <span className="nav justify-content-end">Score: {props.score} | Top Score: {props.topScore} </span>
      </div>
    </nav>
  </div>
);

export default Navbar;