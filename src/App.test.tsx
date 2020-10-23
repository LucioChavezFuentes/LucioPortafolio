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
import { render, fireEvent, cleanup} from '@testing-library/react'

//Remember: even if you call render() again on consecutive tests the state of the component(s) will be different if previous test modified it
const tree = (
  <Provider store={store}>
    <MuiThemeProvider theme={themes.THEME_OBJECT}>
      <App />
    </MuiThemeProvider>
  </Provider>
)

/*let n = 0
let i = 0

afterEach(() => {
  n = i + 1
  i++
  cleanup(tree)
  
  console.log(n)
} )*/

/*function renderTree() {
  const utils = render(tree)
  //const counterButton = utils.getByText(/^count/i)
  return {...utils,}
}*/

/*beforeEach(() => {
  renderTree()
})*/

/*beforeEach(cleanup)

afterAll(cleanup)*/

describe('app', () => {

  //TODO: Why render() returns an empty <body> on next test when I delete this test? WHY?? even if the first test is empty the next tests will render properly
  test('just make it work', () => {

  })

  test('changes to projects page onClick All Projects button', () => {
    //Isn't supposed to DOM be unmounted aterEach test and render another tree on next?
    const {getByText, getByLabelText, } = render(tree)
    expect(getByText('Lucio Chávez')).toBeTruthy()
  
    const leftClick = {button: 0}
    const allProjectsButton = getByText('All Projects');
  
    fireEvent.click(allProjectsButton, leftClick);
  
    expect(getByText("All Lucio's Projects")).toBeTruthy()
  });
  
  test('stays in profile page onClick email icon', () => {
    const {getByText, getByRole, debug } = render(tree)
    expect(getByText("All Lucio's Projects")).toBeTruthy()
  
    const leftClick = {button: 0}
    const emailIconButton = getByRole('button', {name: '!Send an email to Lucio¡'});
  
    fireEvent.click(emailIconButton, leftClick);
  
    expect(getByText("All Lucio's Projects")).toBeTruthy()
  });
})





