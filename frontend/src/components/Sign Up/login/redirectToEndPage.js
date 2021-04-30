import {useHistory} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import ServerConnection from "../../Main Page/Api Connection/serverConnection";


function ToEndPage(props) {
    const history = useHistory();

    async function handleClick() {
        let token = await ServerConnection.auth(props.username, props.password).then((authResponse) => authResponse);
        if (token) {
            props.setToken(token);
            props.setUser(props.username)
            history.push("/loginEnd");
        }

        }



    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Log In
        </Button>
    );
}

export default ToEndPage;