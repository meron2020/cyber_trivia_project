import {useHistory} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";


function HomeButton() {
    const history = useHistory();

    function handleClick() {
        history.push("/HomePage");

    }

    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Main Menu
        </Button>
    );
}

export default HomeButton;