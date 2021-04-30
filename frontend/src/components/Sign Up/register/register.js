import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../login/login.css";
import ServerConnection from "../../Main Page/Api Connection/serverConnection";
import ToEndPage from "./toRegisterEndPage";
import {Link} from "react-router-dom";





class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
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

    setRedirect() {
        this.setState({
            redirect: true
        })
    }



    async serverRegister() {
        let response = await ServerConnection.register(this.state.username, this.state.password).then((result) =>result);
        if (response === "User created successfully.") {
            this.setUserCreated();
            let token = await ServerConnection.auth(this.state.username, this.state.password).then((authResponse) =>authResponse);
            if (token){
                this.props.setToken(token);
                this.props.setUser(this.state.username)

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
                    <ToEndPage username={this.state.username} password={this.state.password} setToken={this.props.setToken}
                    setUserCreated={this.setUserCreated} setUser={this.props.setUser}/>
                    <Link to={'/login'}>Already signed up? Log in</Link>
                </Form>
            </div>
        );
    }
}

export default Register;