import GameList from "../GameList/GameList";
import './App.css';
import React from 'react';
import SearchBar from "../Game Search Bar/searchBar";
import ServerConnection from '../Api Connection/serverConnection'
import aiImage from '../Game Search Bar/ai-machine-learning.png'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };

    // this.searchAPI = this.searchAPI.bind(this);
    this.getQuizzes = this.getQuizzes.bind(this);
    // this.getQuizzes();


  }
  getQuizzes() {
    ServerConnection.getQuizzes().then(games => {
      this.setState( {games: games});
    });
  }

  render() {
    return (
        <div className="home">
          <div className="container">
            <h1>Trivia Game</h1>
            <div className="image">
              <img src={aiImage} />
            </div>


            {/*<GameList games={this.state.games}/>*/}
          </div>

        </div>
    )
  }


}



export default Home;
