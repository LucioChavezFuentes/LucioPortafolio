import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'typeface-roboto';

import ProfilePage from "views/ProfilePage/ProfilePage";

// MUI Imports
import {MuiThemeProvider} from '@material-ui/core/styles';

//Themes Imports
import themes, {LIGHT_THEME} from './themes/constants';

if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));



const hist = createBrowserHistory();

function App() {

    const [themeName, setThemeName] = useState(LIGHT_THEME);

    return (
        <MuiThemeProvider theme={themes[themeName]}>
            <Router history={hist}>
                <Switch>
                    <Route path="/" render={ (props) => <ProfilePage {...props} setThemeName={setThemeName} />}  />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
