import React from "react";

const log = () => (
  console.log("You clicked a picture!")
);

// const Picture = (props) => (

// );

class Picture extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    if (this.state.clicked === false) {

    }
    this.setState({clicked: true})
    console.log(this.state.clicked)
    // console.log('this is:', this);
  };

  render() {
    return (
      <div className="col-4 text-center my-2">
        <img src={this.props.url} onClick={this.handleClick}></img>
      </div>
    );
  }
}

export default Picture;