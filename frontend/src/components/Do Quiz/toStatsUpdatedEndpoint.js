import ServerConnection from "../Main Page/Api Connection/serverConnection";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

function ToStatsUpdatedEndPage(props) {
    const history = useHistory();

    function getScore() {
        let trueAnswers = []
        props.userAnswers.map(answer => (answer === true ? trueAnswers.push(answer): null))
        return Math.floor(trueAnswers.length * 100 / props.questionList.length);
    }


    async function handleClick() {
        const percentage = getScore();
        const response =  await ServerConnection.updatePercentage(props.quiz, percentage, props.user).then(response => response)
        if (response === "Stats updated.") {
            history.push("/statsUpdated")
        } else {
            alert ("Error!")
        }


        }



    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Submit Quiz
        </Button>
    );
}

export default ToStatsUpdatedEndPage;