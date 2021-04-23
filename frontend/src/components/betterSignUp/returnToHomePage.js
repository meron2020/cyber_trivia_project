import {useHistory} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";

function HomeButton() {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Go home
        </Button>
    );
}

export default HomeButton;