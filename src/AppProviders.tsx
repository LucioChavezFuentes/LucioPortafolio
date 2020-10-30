import React from 'react'
import { createBrowserHistory } from "history";

//Router
import { Router } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Themes Imports
import themes from './themes/constants';
import {MuiThemeProvider} from '@material-ui/core/styles';

const hist = createBrowserHistory();

const AppProviders = ({children}) => {
  return (
  <Provider store={store}>
    <MuiThemeProvider theme={themes.THEME_OBJECT}>
      <Router history={hist}>
        {children}
      </Router>
    </MuiThemeProvider>
  </Provider>
  )
}

export default AppProviders
