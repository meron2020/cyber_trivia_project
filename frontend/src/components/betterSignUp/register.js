import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import ServerConnection from "../Main Page/Api Connection/serverConnection";
import HomeButton from './returnToHomePage';





class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userCreated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.serverRegister = this.serverRegister.bind(this);
        this.setUserCreated = this.setUserCreated.bind(this);
    }


    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    setUsername(newUsername) {
        this.setState({username: newUsername})
    }

    setPassword(newPassword) {
        this.setState({password: newPassword})
    }

    setUserCreated() {
        if (!this.state.userCreated) {
            this.setState({userCreated: true})
        }
    }



    async serverRegister() {
        let response = await ServerConnection.register(this.state.username, this.state.password).then((result) =>result);
        if (response === "User created successfully.") {
            this.setUserCreated();
            let token = await ServerConnection.auth(this.state.username, this.state.password).then((authResponse) =>authResponse);
            if (token){
                this.props.setToken(token);
                alert("You are signed upp.")
            }
        }
    }




    render() {

        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={this.username}
                            onChange={(e) => this.setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.password}
                            onChange={(e) => this.setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={this.password}
                            onChange={(e) => this.setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!this.validateForm()} onClick={this.serverRegister}>
                        Sign Up
                    </Button>
                    <HomeButton/>
                </Form>
            </div>
        );
    }
}

export default Register;