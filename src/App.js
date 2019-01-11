import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameSection from "./components/GameSection";
import Picture from "./components/Picture";
import characters from "./characters.json";
import Footer from "./components/Footer";

class App extends React.Component {

  state = {
    characters,
    clicked: [],
    score: 0,
    topScore: 0
  };

  handleClick = (name, character) => {
    console.log(name)
    if (this.state.clicked.indexOf(character) < 0) {
      this.state.clicked.push(character)
      this.setState({ score: this.state.score + 1 })
      this.setState({ topScore: this.state.topScore + 1 })
      this.setState({
        characters: this.state.characters.sort(function (a, b) { return 0.5 - Math.random() })
      });
      console.log(this.state.clicked)
    }
    else {
      this.setState({ clicked: [] });
      this.setState({ score: 0 });
      this.setState({
        characters: this.state.characters.sort(function (a, b) { return 0.5 - Math.random() })
      });
      console.log(this.state.clicked);
    }
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <GameSection>
          {this.state.characters.map(character => (
            <Picture
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              url={character.url}
              name={character.name}
              characterData={character}
            />
          ))}
        </GameSection>
        <Footer />
      </div>
    )
  }
}
export default App;
