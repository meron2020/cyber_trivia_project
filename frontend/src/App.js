import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register, BuildQuiz} from "./components/index";
import './App.css';





class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: '',
            jwtToken: ''};
        this.setToken = this.setToken.bind(this);
        this.setUser = this.setUser.bind(this);
    }
    setToken(jwtToken) {
        this.setState( {jwtToken: jwtToken})
    }

    setUser(user) {
        this.setState( {user: user})
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={() => <Home />} />
                        <div className="login">
                            <Route path="/login" exact component={() => <Login setToken={this.setToken} setUser={this.setUser}/>} />
                            <Route path="/signup" exact component={() => <Register setToken={this.setToken} setUser={this.setUser}/>} />
                        </div>
                        <div className="Create Quiz">
                            <Route path="/buildQuiz" exact component={() => <BuildQuiz/>}/>
                        </div>

                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }
}


export default App;