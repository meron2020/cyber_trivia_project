import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './quizIntro.css'

class QuizIntro extends React.Component {
    constructor(props) {
        super (props);
        this.state = {quizName: '',
        questionAmount: ''}
        this.setQuizName = this.setQuizName.bind(this);
        this.setQuestionAmount = this.setQuizName.bind(this);
        this.setQuizIntro = this.setQuizIntro.bind(this);


    }

    setQuizName(quizName) {
        this.setState({quizName: quizName});
    }

    setQuestionAmount(questionAmount) {
        this.setState({questionAmount: questionAmount});
    }

    setQuizIntro(){
        this.props.setQuizName( this.state.quizName)
        this.props.setQuestionAmount( this.state.questionAmount)
    }

    render() {
        return (<div className="quizIntro">

            <Form onSubmit={this.handleSubmit}>
                <Form.Group size="lg" controlId="quizName">
                    <Form.Label>Quiz Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={this.state.quizName}
                        onChange={(e) => this.setState({quizName: e.target.value})}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="questionAmount">
                    <Form.Label>Question Amount</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={this.state.questionAmount}
                        onChange={(e) => this.setState({questionAmount:e.target.value})}
                    />
                </Form.Group>

                <Button block size="lg" type="submit" onClick={this.setQuizIntro}>
                    Next
                </Button>
            </Form>
        </div>)
    }
}

export default QuizIntro;