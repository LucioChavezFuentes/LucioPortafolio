import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';

//Themes Imports
import themes from './themes/constants';
import {MuiThemeProvider} from '@material-ui/core/styles';

//React Testing Library
import { render, fireEvent, waitFor, cleanup} from '@testing-library/react';

afterEach(cleanup)

//Remember: even if you call render() again on consecutive tests the state of the component(s) will be different if previous test modified it
const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={themes.THEME_OBJECT}>
        {children}
      </MuiThemeProvider>
    </Provider>
  )
}

const customRender = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options })


  //FIXED-TODO: Why render() returns an empty <body> on next test when I delete this test? WHY?? even if the first test is empty the next tests will render properly
  //FIX: install jest-environment-jsdom-sixteen, modify scripts to "test": "react-app-rewired test --env=jest-environment-jsdom-sixteen" 
  //     and use async helpers like "waitFor" for redux-persist async render (I think, I require further investigation about redux-persist render)

  //TODO: Fix this issue: Isn't supposed to DOM be unmounted aterEach test and render another tree on next?
  
  test('all components mount and dismount accordingly on routing change', async () => {
    const {getByText, getByRole, queryByText } = customRender(<App />);
    //The render is async (maybe for redux-persist) so me must wait to get the first element
    await waitFor(() => expect(getByText('Lucio Chávez')).toBeTruthy())

    const leftClick = {button: 0}

    //These elements shoulbe always avaialable independently of routing location in app's version 1.1.2
    const allProjectsButton = getByText('All Projects');
    const emailIconButton = getByRole('button', {name: '!Send an email to Lucio¡'});

    //Check if profile page component is still mounted after clicking emailIconButton and emailDialog component is mounted and dismounted on close
    fireEvent.click(emailIconButton, leftClick);
    expect(getByText('Lucio Chávez')).toBeTruthy()
    expect(queryByText("Send me a message from here.")).toBeInTheDocument()

    //Dismount emailDialog on click close dialog
    const emailCloseIcon = getByRole('button', {name: "close"});
    fireEvent.click( emailCloseIcon, leftClick);
      // Removing emailDialog is an async action 
    await waitFor(() => expect(queryByText("Send me a message from here.")).not.toBeInTheDocument())

    //Check if projects component is mounted on click "all projects" button and Profile Page is dismounted
    fireEvent.click(allProjectsButton, leftClick);
    expect(getByText("All Lucio's Projects")).toBeTruthy();
    expect(queryByText("Lucio Chavez")).not.toBeInTheDocument();

    //Projects Page stays the same on click email Icon, email Dialog is mounted
    expect(queryByText("All Lucio's Projects")).toBeInTheDocument();
    fireEvent.click(emailIconButton, leftClick);
    expect(queryByText("Send me a message from here.")).toBeInTheDocument();

    //Dismount emailDialog on click close dialog in Projects Page
    

    //Rerurns correctly to ProfilePage on click "About Lucio"
    /*const aboutLucioButton = getByRole('button', {name: "About Lucio"});
    fireEvent.click(aboutLucioButton, leftClick);
    expect(getByText('Lucio Chávez')).toBeTruthy()*/

  });

  test('Dismount emailDialog on click close dialog in Projects Page', async () => {
    const {getByText, getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}
    const anotherEmailCloseIcon = getByRole('button', {name: "close"});
    fireEvent.click(anotherEmailCloseIcon, leftClick);
      // Removing emailDialog is an async action 
    await waitFor(() => expect(queryByText("Send me a message from here.")).not.toBeInTheDocument())

    const aboutLucioButton = getByRole('button', {name: "About Lucio"});
    fireEvent.click(aboutLucioButton, leftClick);
    expect(getByText('Lucio Chávez')).toBeTruthy()
  })




