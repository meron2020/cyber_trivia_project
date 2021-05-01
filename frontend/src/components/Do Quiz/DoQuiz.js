import React from 'react';
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import DoQuestion from "./DoQuestion";
import Button from "react-bootstrap/Button";
import HomeButton from "../Sign Up/returnToHomePage";
import './DoQuiz.css'
import ToStatsUpdatedEndPage from "./toStatsUpdatedEndpoint";

class DoQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionList: [],
            userAnswers: []
        }
        this.getQuiz = this.getQuiz.bind(this);
        this.getScore = this.getScore.bind(this);
        this.setQuestionComponent = this.setQuestionComponent.bind(this);
        this.addAnswer = this.addAnswer.bind(this);

    }

    componentDidMount() {
        this.getQuiz().then(json => this.setState({questionList: json[0]}))
    }


    async getQuiz() {
        return await ServerConnection.getQuiz(this.props.quiz, this.props.jwtToken).then(response => response);
    }

    addAnswer(answer) {
        let userAnswers = [...this.state.userAnswers];
        userAnswers.push(answer)
        this.setState({userAnswers: userAnswers});
    }

    showResult() {
        return this.state.userAnswers.length < this.state.questionList.length;
    }

    getScore() {
        let trueAnswers = []
        this.state.userAnswers.map(answer => (answer === true ? trueAnswers.push(answer) : null))

        return Math.floor(trueAnswers.length * 100 / this.state.questionList.length);
    }

    async updatePercentage() {
        const percentage = this.getScore();
        const response = await ServerConnection.updatePercentage(this.props.quiz, percentage, this.props.user).then(response => response)
        alert(response)
    }

    setQuestionComponent() {
        let question = this.state.questionList[this.state.userAnswers.length];
        return <DoQuestion question={question} questionNumber={this.state.userAnswers.length + 1}
                           addAnswer={this.addAnswer}/>

    }

    render() {
        if (this.state.questionList.length === 0) {
            return (
                <span>Loading Quiz ... </span>
            )
        } else {
            let quizShow;
            if (this.showResult()) {
                quizShow = this.setQuestionComponent();
            } else {
                quizShow = (
                    <div className="container">
                        <div className="score-text">
                            <h3>You scored {this.getScore()} out of 100!</h3>
                        </div>
                        <div className="submit-button">
                            <ToStatsUpdatedEndPage user={this.props.user} quiz={this.props.quiz}
                                                   userAnswers={this.state.userAnswers}
                                                   questionList={this.state.questionList}/>
                        </div>
                    </div>
                )
            }
            return (<div className="quiz">
                {quizShow}
            </div>)
        }
    }
}



export default DoQuiz;