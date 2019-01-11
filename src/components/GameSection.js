import React from "react";

const GameSection = (props) => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);

export default GameSection;