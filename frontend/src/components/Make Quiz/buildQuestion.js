import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BuildQuestion extends React.Component {
    constructor(props, questionNumber) {
        super (props);
        this.questionNumber = questionNumber;
        this.state = {
            question: '',
            answer: '',

            falseAnswerOne: '',
            falseAnswerTwo: '',
            falseAnswerThree: '',


        }

        this.setQuestion = this.setQuestion.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.setFalseAnswer = this.setFalseAnswer.bind(this);
    }

    questionObjectReturn() {
        const questionNum = "question_" + toString(this.questionNumber + 1);
        const questionObj = {questionNum: {"question": this.state.question,
            "answers": {"correct answer": this.state.answer,
            }}}

        questionObj[questionNum]['answers']["answer_1"] = this.state.falseAnswerOne;
        questionObj[questionNum]['answers']["answer_2"] = this.state.falseAnswerTwo;
        questionObj[questionNum]['answers']["answer_3"] = this.state.falseAnswerThree;

        this.props.addQuestionObj(questionObj);

    }

    setQuestion(question) {
        this.setState({question: question})
    }

    setAnswer(answer) {
        this.setState({answer: answer})
    }

    setFalseAnswer(answer, answerNumber) {
        if (answerNumber === 1) {
            this.setState({falseAnswerOne: answer})

    } else if (answerNumber === 2) {
        this.setState({falseAnswerTwo: answer})
        } else {
            this.setState({falseAnswerThree: answer})
        }
    }

    render() {
        return (<div className="Question">
            <h2>Question {this.props.questionNumber}</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group size="lg" controlId="question">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={this.state.question}
                        onChange={(e) => this.setQuestion(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control
                        type="password"
                        value={this.state.answer}
                        onChange={(e) => this.setAnswer(e.target.value)}
                    />
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Wrong Answer</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.answer}
                            onChange={(e) => this.setAnswer(e.target.value, 1)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Wrong Answer</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.answer}
                            onChange={(e) => this.setAnswer(e.target.value, 2)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Wrong Answer</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.answer}
                            onChange={(e) => this.setAnswer(e.target.value, 3)}
                        />
                    </Form.Group>
                </Form.Group>
                <Button block size="lg" type="submit" onClick={this.questionObjectReturn}>
                    Submit Question
                </Button>
            </Form>
        </div> )

    }
}

export default BuildQuestion;