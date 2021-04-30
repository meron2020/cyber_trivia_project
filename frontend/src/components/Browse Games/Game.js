import React from 'react';
import {Link} from "react-router-dom";
import quizImg from './quiz.png';
import './Game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.setQuiz = this.setQuiz.bind(this);
    }

    setQuiz() {
        this.props.setQuiz(this.props.quiz);
    }

    render() {
        return (
            <div className="GameLink">
                <div className="Game-quiz">
                    <h5>{this.props.quiz}</h5>
                </div>
                <div className="link">
                    <Link to='/doQuiz'>
                        <span onClick={this.setQuiz}>Do Quiz</span>
                    </Link>
                </div>
            </div>)
    }

}

export default Game;