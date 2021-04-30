import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    Login,
    Register,
    BuildQuiz,
    GameBrowser,
    RegisterEndPage,
    LoginEndPage,
    MakeQuizEndPage
} from "./components/index";
import './App.css';
import DoQuiz from "./components/Do Quiz/DoQuiz";




class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {user: '',
            jwtToken: '',
            quiz: ''}
        this.setToken = this.setToken.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setQuiz = this.setQuiz.bind(this);

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    setToken(jwtToken) {
        this.setState( {jwtToken: jwtToken})
    }

    setUser(user) {
        this.setState( {user: user})
    }

    setQuiz(quiz) {
        this.setState( {quiz: quiz})
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/HomePage" exact component={() => <Home />} />
                        <div className="login">
                            <Route path="/login" >
                            <Login setToken={this.setToken} setUser={this.setUser}/><Route path="/" exact component={() => <Register setToken={this.setToken} setUser={this.setUser}/>} />
                            </Route>
                            <Route path="/" exact component={() => <Register setToken={this.setToken} setUser={this.setUser}/>} />
                            <Route path="/registerEnd" exact component={() => <RegisterEndPage/>}/>
                            <Route path="/loginEnd" exact component={() => <LoginEndPage/>}/>

                            <Route path="/buildQuiz" exact component={() => <BuildQuiz user={this.state.user} />} />
                            <Route path="/doQuiz" exact component={() => <DoQuiz user={this.state.user} jwtToken={this.state.jwtToken} quiz={this.state.quiz}/>} />
                            <Route path="/browseQuizzes" exact component={() => <GameBrowser setQuiz={this.setQuiz}/>}/>
                            <Route path={"/makeQuizEndPage"} exact component={() => <MakeQuizEndPage/>}/>
                        </div>




                    </Switch>
                </Router>
            </div>
        )
    }
}


export default App;