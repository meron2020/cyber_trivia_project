import React from 'react';
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import Game from "./Game";
import { useHistory } from "react-router-dom";
import './Browse Games.css'

class GameBrowser extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            quizzes: ''
        }
        this.getQuizzes = this.getQuizzes.bind(this);
        this.setQuiz = this.setQuiz.bind(this);
    }

    setQuiz(quiz) {
        this.props.setQuiz(quiz)
    }

    componentDidMount() {
        this.getQuizzes().then(json => this.setState({quizzes: json}))
    }


    async getQuizzes() {
        return await ServerConnection.getQuizzes().then(quizzes => quizzes)
    }

    render() {
        if (this.state.quizzes.length === 0) {
            return (
                <span>Loading Quizzes ... </span>
            )}
        let gameList = this.state.quizzes.map((item, index) => (<Game key={index} history={this.props.history} setQuiz={this.setQuiz} quiz={item}/>))
        return (<div className="GameBrowser">
            <div className="text">
                <h2>Game Browser</h2>
            </div>
            <div className="gameList">
                {gameList}
            </div>


        </div>)
    }
}

export default GameBrowser;