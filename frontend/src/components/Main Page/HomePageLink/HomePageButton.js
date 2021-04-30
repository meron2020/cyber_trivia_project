import {useHistory} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";


function BuildQuiz() {
    const history = useHistory();

    function handleClick() {
        history.push('/buildQuiz');
    }

    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Build A Quiz
        </Button>
    );
}

function BrowseQuizzes() {
    const history = useHistory();

    function handleClick() {
        history.push('/browseQuizzes');
    }

    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Build A Quiz
        </Button>
    );
}

export {BuildQuiz, BrowseQuizzes};
