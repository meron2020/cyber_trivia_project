import React from 'react';
import BuildQuestion from "./buildQuestion";
import QuizIntro from './QuizIntro';
import Button from "react-bootstrap/Button";


class BuildQuiz extends React.Component {
    constructor(props, user){
        super (props);
        this.user = user;
        this.state = {
            questionsObj: {},
            quizName: '',
            questionAmount: '',
            counter: 1}
        this.addQuestionObj = this.addQuestionObj.bind(this);
        this.checkQuizIntro = this.checkQuizIntro.bind(this);
        this.setQuizIntro = this.setQuizIntro.bind(this);
        this.checkQuestionAmount = this.checkQuestionAmount.bind(this);
    }

    addQuestionObj(questionObj) {
        this.questionsObj[questionObj.keys()] = questionObj.values();
        this.setState({counter: this.counter++});
    }

    checkQuizIntro() {
        return !(this.state.quizName && this.state.questionAmount);
    }

    setQuizIntro(quizName, questionAmount) {
        this.setState({quizName: quizName});
        this.setState({questionAmount: questionAmount})
    }

    checkQuestionAmount() {
        return this.state.questionAmount > this.state.questionsObj.length;
    }


    render() {

        return(<div className="Quiz">
            {this.checkQuizIntro ? <QuizIntro setQuizIntro={this.setQuizIntro}/>: null}
            {this.checkQuestionAmount ? <BuildQuestion addQuestionObj={this.addQuestionObj} questionNumber={this.state.counter}/> :
                <Button block size="lg" type="submit" onClick={this.setQuizIntro}>Submit Quiz</Button>}
        </div>)
    }




}

export default BuildQuiz;