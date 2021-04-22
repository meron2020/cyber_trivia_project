import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './index.css'

const SignUp = () => (
  <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
);

export default SignUp;
ReactDOM.render(<SignUp />, document.getElementById('root'));
