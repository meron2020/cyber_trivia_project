import React from "react";
import HomeButton from "../returnToHomePage";

class LoginEndPage extends React.Component {
    render() {
        return (
            <div className="signup-end-page">
                <div className="sign-up-text">
                <h2>Signed Up!</h2>
                </div>
                <div className="signup-home-button">
                <HomeButton/>
                </div>
            </div>
        )
    }
}

export default LoginEndPage;