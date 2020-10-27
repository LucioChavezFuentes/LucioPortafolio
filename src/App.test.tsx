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
import { render, fireEvent, waitFor} from '@testing-library/react';

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

describe('app', () => {

  //FIXED-TODO: Why render() returns an empty <body> on next test when I delete this test? WHY?? even if the first test is empty the next tests will render properly
  //FIX: install jest-environment-jsdom-sixteen, modify scripts to "test": "react-app-rewired test --env=jest-environment-jsdom-sixteen" 
  //     and use async helpers like "waitFor" for redux-persist async render (I think, I require further investigation about redux-persist render)

  test('changes to projects page onClick All Projects button', async () => {
    //TODO: Fix this issue: Isn't supposed to DOM be unmounted aterEach test and render another tree on next?
    const {getByText } = customRender(<App />);

    await waitFor(() => expect(getByText('Lucio Chávez')).toBeTruthy())
    
    const leftClick = {button: 0}
    const allProjectsButton = getByText('All Projects');
  
    fireEvent.click(allProjectsButton, leftClick);
  
    expect(getByText("All Lucio's Projects")).toBeTruthy()
  });
  
  test('stays in profile page onClick email icon', () => {
    //TODO: Fix this issue: Isn't supposed to DOM be unmounted aterEach test and render another tree on next?
    const {getByText, getByRole } = customRender(<App />);

    expect(getByText("All Lucio's Projects")).toBeTruthy()
  
    const leftClick = {button: 0}
    const emailIconButton = getByRole('button', {name: '!Send an email to Lucio¡'});
  
    fireEvent.click(emailIconButton, leftClick);
  
    expect(getByText("All Lucio's Projects")).toBeTruthy()
  });
})





