import React from 'react';

class Question {
    constructor(question, answer, falseAnswers, questionNumber) {
        this.question = question;
        this.answer = answer;
        this.falseAnswers = falseAnswers;
        this.questionNumber = questionNumber;

    }
}

export { Question };

class QuizBuilder {
    constructor(questionDict, quizName, user) {
        this.questionList = questionDict["questionList"];
        this.answerList = questionDict["answerList"];
        this.falseAnswersList = questionDict["falseAnswersList"];
        this.user = user;

    }

    makeQuiz() {
        const questionAmount = this.questionList.length;

    }
}