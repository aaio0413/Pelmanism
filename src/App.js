import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ContentWrapper from "./components/ContentWrapper";
import Head from "./components/Head";
import Container from "./components/Global/Container";
import friends from "./pictures.json";
import "./App.css";

// Random shuffle
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    bestScore: 0,
    result: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleEndOfGame = () => {
    this.setState({ result: "You win!" });
    alert("Wonderfull!!!! You made it!");
    this.handleReset();
    this.setState({ bestScore: 0 });
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    if (newScore > 19) {
      return this.handleEndOfGame();
    }
    this.setState({
      currentScore: newScore,
      result: "You guessed correctly!"
    });
    if (newScore >= this.state.bestScore) {
      this.setState({ bestScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      bestScore: this.state.bestScore,
      result: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <ContentWrapper>
        <Navbar
          title="React Pelmanism Game"
          score={this.state.currentScore}
          bestScore={this.state.bestScore}
          result={this.state.result}
          lecture="How many times you can keep clicking on an image without choosing the
          same picture."
        />

        <Container>
          {this.state.friends.map(friend => (
            <Card
              key={friend.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={friend.id}
              image={friend.image}
            />
          ))}
        </Container>
      </ContentWrapper>
    );
  }
}
export default App;
