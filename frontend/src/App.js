import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register } from "./components/index";


import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jwtToken: ''};
        this.setToken = this.setToken.bind(this);

    }
    setToken(jwtToken) {
        this.setState( {jwtToken: jwtToken})
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <div className="login">
                            <Route path="/login" exact component={() => <Login setToken={this.setToken}/>} />
                            <Route path="/signup" exact component={() => <Register />} />
                        </div>

                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }

}

export default App;