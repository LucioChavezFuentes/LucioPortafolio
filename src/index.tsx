import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import ProfilePage from "views/ProfilePage/ProfilePage.js";

// MUI Imports
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#f44336',
    },
  },
})


const hist = createBrowserHistory();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={ProfilePage} />
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
