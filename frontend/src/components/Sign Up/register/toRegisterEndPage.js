import {useHistory} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import ServerConnection from "../../Main Page/Api Connection/serverConnection";


function ToEndPage(props) {
    const history = useHistory();

    async function handleClick() {
        let response = await ServerConnection.register(props.username, props.password).then((result) =>result);
        if (response === "User created successfully.") {
            props.setUserCreated();
            let token = await ServerConnection.auth(props.username, props.password).then((authResponse) =>authResponse);
            if (token){
                props.setToken(token);
                props.setUser(props.username)
                history.push("/registerEnd")
            }
        }
    }


    return (
        <Button block size="lg" type="button" onClick={handleClick}>
            Sign Up
        </Button>
    );
}

export default ToEndPage;