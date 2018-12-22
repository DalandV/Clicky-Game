import React from "react";
import Picture from "./Picture"
import Characters from "../characters.json"

// const Shuffle = () => {
//     // Characters.forEach(function () {
//     //     return <Picture url={Characters.url} />
//     // });
// };

const GameSection = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="row">
                    <Picture url={Characters[0].url} />
                    <Picture url={Characters[1].url} />
                    <Picture url={Characters[2].url} />
                    <Picture url={Characters[3].url} />
                    <Picture url={Characters[4].url} />
                    <Picture url={Characters[5].url} />
                </div>
            </div>
        </div>
    </div>
);

export default GameSection;