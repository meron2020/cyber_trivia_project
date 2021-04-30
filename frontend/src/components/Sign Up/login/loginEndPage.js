import React from "react";
import HomeButton from "../returnToHomePage";
import './LoginEndPage.css'

class LoginEndPage extends React.Component {
    render() {
        return (
            <div className="login-end-page">
                <div className="login-text">
                    <h2>Logged In!</h2>
                </div>
                <div className="login-home-button" >
                    <HomeButton/>
                </div>
            </div>
        )
    }
}

export default LoginEndPage;