import React from 'react';
import BuildQuestion from "./buildQuestion";
import QuizIntro from './QuizIntro';
import Button from "react-bootstrap/Button";
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import './buildQuiz.css'
import ToQuizEndPage from "./toQuizEndPage";


class BuildQuiz extends React.Component {
    constructor(props){
        super (props);
        this.user = this.props.user;
        this.state = {
            questionsObj: {},
            quizName: '',
            questionAmount: '',
            counter: 1}
        this.addQuestionObj = this.addQuestionObj.bind(this);
        this.checkQuizIntro = this.checkQuizIntro.bind(this);
        this.checkQuestionAmount = this.checkQuestionAmount.bind(this);
        this.setQuestionAmount = this.setQuestionAmount.bind(this);
        this.setQuizName = this.setQuizName.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.sendQuizObj = this.sendQuizObj.bind(this);

        this.wholeQuizObj={}
    }

    addQuestionObj(questionObj) {
        let objKey = Object.keys(questionObj)
        let objValue = Object.values(questionObj)
        this.setState(({
            questionsObj: { ...this.state.questionsObj, [objKey]: objValue[0]}
        }))}

    checkQuizIntro() {
        return (this.state.quizName.length === 0 && this.state.questionAmount.length === 0);

    }

    setQuizName(quizName) {
        this.setState({quizName: quizName})

    }

    setQuestionAmount(questionAmount) {
        this.setState({questionAmount: questionAmount})
    }


    checkQuestionAmount() {
        return parseInt(this.state.questionAmount) > Object.keys(this.state.questionsObj).length;
    }

    async sendQuizObj() {
        const response = await ServerConnection.postQuiz(this.state.quizName, this.user, this.state.questionsObj).then(response => response)
        alert(response)

    }

    incrementCounter() {
        let counter = this.state.counter;
        this.setState({counter: counter++})
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     this.setState({prevState});
    // }
    //
    // componentDidUpdate() {
    //     return true;
    // }

    render() {
        let runQuizintro;
        if (this.checkQuizIntro()) {
            runQuizintro = <QuizIntro setQuizName={this.setQuizName} setQuestionAmount={this.setQuestionAmount}/>
        } else {
            runQuizintro = null;

        }

        let buildQuestion;
        if (!this.checkQuizIntro() && this.checkQuestionAmount()) {
            buildQuestion = <BuildQuestion
                addQuestionObj={this.addQuestionObj}
                questionNumber={Object.keys(this.state.questionsObj).length + 1}
                incrementCounter={this.incrementCounter}/>
        } else {
            buildQuestion = null;
        }

        let submitButton;
        if (!this.checkQuestionAmount() && !this.checkQuizIntro()) {
            submitButton = <ToQuizEndPage quizName={this.state.quizName} user={this.user} questionsObj={this.state.questionsObj}/>;
        } else {
            submitButton = null;
        }

        return(<div className="Quiz">
            {runQuizintro}
            {buildQuestion}
            {submitButton}
        </div>)
    }

}

export default BuildQuiz;