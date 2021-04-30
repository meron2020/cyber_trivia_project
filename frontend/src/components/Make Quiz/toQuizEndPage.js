import {useHistory} from "react-router-dom";
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import Button from "react-bootstrap/Button";
import React from "react";

function ToQuizEndPage(props) {
    const history = useHistory();

    async function handleClick() {

        await ServerConnection.postQuiz(props.quizName, props.user, props.questionsObj).then(response => response)
        history.push("/makeQuizEndPage");
        }




    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Create Quiz
        </Button>
    );
}

export default ToQuizEndPage;