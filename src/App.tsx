import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'typeface-roboto';

import ProfilePage from "views/ProfilePage/ProfilePage";

// MUI Imports
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

//Themes Imports
import themes, {LIGHT_THEME} from './themes/constants';

if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));



const hist = createBrowserHistory();

function App() {

    const [darkTheme, setDarkTheme] = useState(false);
    const theme = createMuiTheme({
      palette: {

        type: darkTheme ? 'dark' : 'light',

        primary: {
          main: '#43a047',
        },
        secondary: {
          main: '#f44336',
        },
      },
    })

    return (
        <MuiThemeProvider theme={theme}>
            <Router history={hist}>
                <Switch>
                    <Route path="/" render={(props) => <ProfilePage {...props} setDarkTheme={setDarkTheme} darkTheme={darkTheme} />}  />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
