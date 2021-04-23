import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import ServerConnection from "../Main Page/Api Connection/serverConnection";

class Register extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.register = this.register.bind(this);
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


    register() {
        const register = ServerConnection.register(this.state.username, this.state.password);
        if (register === "User created successfully.") {
            alert("User created successfully.")
            const token = ServerConnection.auth(this.username, this.password);
            if (token){
                this.props.setToken(token);
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
                    <Button block size="lg" type="submit" disabled={!this.validateForm()} onClick={this.register}>
                        Sign Up
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;