import './App.css';
import React from 'react';
import aiImage from '../Game Search Bar/ai-machine-learning.png'
import BuildQuizLink from "../Build Quiz Link/BuildQuizLink";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };



  }

  render() {
    return (
        <div className="home">
          <div className="container">
            <h1>Trivia Game</h1>
            <div className="image">
              <img src={aiImage} />
            </div>
            <BuildQuizLink/>
            {/*<GameList games={this.state.games}/>*/}
          </div>

        </div>
    )
  }


}



export default Home;
