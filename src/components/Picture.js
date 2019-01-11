import React from "react";

const Picture = props => (
  <div className="col-4 text-center my-2">
    <img
      src={props.url}
      alt={props.name}
      onClick={() => props.handleClick(props.name, props.characterData)}
    ></img>
  </div>
);

export default Picture;