import React from 'react';
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import QuizScore from "./QuizScore";
import HomeButton from "../Sign Up/returnToHomePage";
import './Stats.css'

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageScore: '',
            quizzes: [],
            quizScores: []
        }
        this.getStats = this.getStats.bind(this);
    }

    async componentDidMount() {
        let stats = await this.getStats().then(response=> response);
        this.setState({averageScore: stats['average'],
            quizzes: stats['quizzes'], quizScores: stats['quiz_scores']})
    }

    async getStats() {
        return await ServerConnection.getStats(this.props.user).then(response => response);
    }

    render() {
        if (this.state.quizzes.length === 0) {
            return (
                <span>Loading Stats ... </span>
            )
        } else {
            let quizScores = this.state.quizzes.map((quiz, index) => <QuizScore quizName={quiz} quizScore={this.state.quizScores[index]}/>)
            return (<div className="stats">
                <div className="stats-username">
                    <h2>{this.props.user}</h2>
                </div>
                <div className="stats-average-score">
                    <h4>Average Score: {this.state.averageScore}</h4>
                </div>
                {quizScores}
                <HomeButton/>

            </div>) }

    }
}

export default Stats;