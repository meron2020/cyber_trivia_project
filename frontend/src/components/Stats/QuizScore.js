import React from 'react';
import './QuizScore.css'

class QuizScore extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (<div className="quiz-score">
            <div className="quiz-score-name">
                {this.props.quizName}
            </div>
            <div className="quiz-score-score">
                {this.props.quizScore}
            </div>
        </div>)
    }
}

export default QuizScore;