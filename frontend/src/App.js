import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, SignUp } from "./components/index";
import './App.css';
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/signup" exact component={() => <SignUp />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;