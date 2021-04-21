import GameList from "../GameList/GameList";
import './App.css';
import React from 'react';
import SearchBar from "../Game Search Bar/searchBar";
import ServerConnection from '../Api Connection/serverConnection'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };

    this.searchAPI = this.searchAPI.bind(this);
    this.getQuizzes = this.getQuizzes.bind(this);

    this.getQuizzes();


  }
  getQuizzes() {
    ServerConnection.getQuizzes().then(games => {
      this.setState( {games: games});
    });
  }

  searchAPI(quiz, jwtToken) {
    ServerConnection.getQuiz(quiz, jwtToken).then(game => {
      this.setState({games: [game]});
    }) }

  render() {
    return (
        <div className="app">
          <h1>Trivia Game</h1>
          {/*<SearchBar searchAPI={this.searchAPI}/>*/}
          <GameList games={this.state.games}/>
        </div>
    )
  }


}
export default App;
