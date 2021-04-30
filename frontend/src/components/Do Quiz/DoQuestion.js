import React from 'react';
import './DoQuestion.css'

class DoQuestion extends React.Component {
    constructor(props) {
        super (props);
        this.answerList = []

        this.getCorrectAnswer = this.getCorrectAnswer.bind(this);
        this.checkUserAnswer = this.checkUserAnswer.bind(this);
        this.updateAnswerList = this.updateAnswerList.bind(this);
        this.returnAnsweredQuestion = this.returnAnsweredQuestion.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
    }



    getCorrectAnswer() {
        return this.props.question["answer_dict"]['correct_answer']
    }

    checkUserAnswer(userAnswer, correctAnswer) {
        return userAnswer === correctAnswer;
    }

    shuffleArray(array) {   for (let i = array.length - 1; i > 0; i--) {
        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

        return array;
    }

    updateAnswerList() {
        let answerList = [this.props.question["answer_dict"]['correct_answer']]
        this.props.question["answer_dict"]['wrong_answers'].forEach(answer => {
            answerList.push(answer)
        })

        this.shuffleArray(answerList);
        this.answerList = answerList;
    }

    returnAnsweredQuestion(event, answerOption) {
        event.preventDefault();
        const correctAnswer = this.getCorrectAnswer()
        const tOrF = this.checkUserAnswer(answerOption, correctAnswer)
        this.props.addAnswer(tOrF);

    }

    render() {
        this.updateAnswerList()
        return (<div className ="question">
        <div className="question-text">
            <div className="question-count">
                <span>Question {this.props.questionNumber}</span>
            </div>
            <div className="question-text">
                {this.props.question['question']}
            </div>
            <div className="answer-section">
                {this.answerList.map((answerOption) => {
                    return <button onClick={(event) => this.returnAnsweredQuestion(event, answerOption)}>{answerOption}</button>
                })}
            </div>
        </div>
        </div>)
    }
}

export default DoQuestion;