import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import ServerConnection from "../../Main Page/Api Connection/serverConnection";
import ToEndPage from './redirectToEndPage';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '',
        password: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
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

    async login() {
        let token = await ServerConnection.auth(this.state.username, this.state.password).then((authResponse) => authResponse);
        if (token) {
            this.props.setToken(token);
            this.props.setUser(this.state.username)
            alert("logged in")
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
                    <ToEndPage setToken={this.props.setToken} username={this.state.username} password={this.state.password} setUser={this.props.setUser}/>
                </Form>
            </div>
        );
    }
}

export default Login;