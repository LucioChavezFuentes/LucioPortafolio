import React from "react";
import ReactDOM from "react-dom";
import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Themes Imports
import themes from './themes/constants';

import {MuiThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={themes.THEME_OBJECT}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
