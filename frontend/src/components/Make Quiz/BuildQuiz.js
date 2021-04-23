import React from 'react';
import BuildQuestion from "./buildQuestion";
import QuizIntro from './QuizIntro';


class BuildQuiz extends React.Component {
    constructor(props, user){
        super (props);
        this.user = user;
        this.state = {
            questionsObj: {},
            quizName: '',
            questionAmount: ''}
        this.addQuestionObj = this.addQuestionObj.bind(this);
        this.checkQuizIntro = this.checkQuizIntro.bind(this);
        this.setQuizIntro = this.setQuizIntro.bind(this);
    }

    addQuestionObj(questionObj) {
        this.questionsObj[questionObj.keys()] = questionObj.values();
    }

    checkQuizIntro() {
        return !(this.state.quizName && this.state.questionAmount);
    }

    setQuizIntro(quizName, questionAmount) {
        this.setState({quizName: quizName});
        this.setState({questionAmount: questionAmount})
    }

    render() {
        let counter = 1;
        return(<div className="Quiz">
            {this.checkQuizIntro ? <QuizIntro setQuizIntro={this.setQuizIntro}/>: null}
            <BuildQuestion addQuestionObj={this.addQuestionObj} questionNumber={counter}/>
        </div>)
    }




}

export default BuildQuiz;