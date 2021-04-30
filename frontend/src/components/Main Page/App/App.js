import './App.css';
import React from 'react';
import aiImage from '../Game Search Bar/ai-machine-learning.png'
import {Link} from "react-router-dom";
import LinkList from "../LinkList/LinkList";

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
            <LinkList/>
          </div>

        </div>
    )
  }


}



export default Home;
