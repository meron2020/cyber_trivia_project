import { useHistory } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";


function DoQuizButton() {
    const history = useHistory();
    history.push("/doQuiz");

}

export default DoQuizButton;