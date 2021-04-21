import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './index.css'

const App = () => (
  <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
);

export default App;
//ReactDOM.render(<App />, document.getElementById('root'));
