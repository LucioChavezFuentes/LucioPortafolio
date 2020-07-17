import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//Redux
import { connect } from 'react-redux';

//import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'typeface-roboto';

import ProfilePage from "views/ProfilePage/ProfilePage";

// MUI Imports
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Themes Imports
import themes from './themes/constants';

//This test removes the 'fbclid=' in the URL if the Web App is opened from a facebooks's inbox link
if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));

const hist = createBrowserHistory();

function App(props) {

  const {isThemeDark} = props;

    const theme = React.useMemo(
      () => isThemeDark ? themes.darkTheme : themes.lightTheme
    , [isThemeDark]);

    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Router history={hist}>
                <Switch>
                    <Route path="/" render={(props) => <ProfilePage {...props} />}  />
                </Switch>
            </Router>
          </CssBaseline>
        </MuiThemeProvider>
    )
}

const mapStateToProps = (state) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(App)
