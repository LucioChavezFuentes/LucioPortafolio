import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'typeface-roboto';

import ProfilePage from "views/ProfilePage/ProfilePage";

// MUI Imports
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Themes Imports
import themes from './themes/constants';

if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));

const hist = createBrowserHistory();

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

    const theme = React.useMemo(
      () => darkTheme ? themes.darkTheme : themes.lightTheme
    , [darkTheme]);

    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Router history={hist}>
                <Switch>
                    <Route path="/" render={(props) => <ProfilePage {...props} setDarkTheme={setDarkTheme} darkTheme={darkTheme} />}  />
                </Switch>
            </Router>
          </CssBaseline>
        </MuiThemeProvider>
    )
}

export default App
