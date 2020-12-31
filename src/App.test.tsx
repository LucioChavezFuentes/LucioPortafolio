import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import App from './App';
import { createBrowserHistory } from "history";
//Router
import {Router} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';

//Themes Imports
import themes from './themes/constants';
import {MuiThemeProvider} from '@material-ui/core/styles';

//React Testing Library
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';

import matchMediaPolyfill from 'mq-polyfill'


beforeAll(() => {
  matchMediaPolyfill(window)
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'))
  }
})



//Remember: even if you call render() again on consecutive tests the state of the component(s) will be different if previous test modified it
const resizeWindow = (x = 1024 , y = 768) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

const customRender = (ui, {route = '/' , innerWidth = 1024, ...rest} = {}) => {

  const hist = createBrowserHistory({initialEntries: route });

  const AllTheProviders = ({ children }) => {
  
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
  
  return {...render( ui, { wrapper: AllTheProviders, ...rest }), hist} 

}


  

/*How should I write my tests?

Based on this page: https://kentcdodds.com/blog/test-isolation-with-react

If you are using "async/await" go for the 2nd best option, 

if you are not, go for the 1st best option 

1st best option is faster , if you can make it work with async/await then go for it

currently the 1st best option is been used here, the commented suite at the bottom is the 2nd best option

sometimes my tests work in the 1st best option with async/await, configuration error? other tests conflicts? 
uiSlice test confilcts? perhaps the time spent in one aysnc test  EDIT: Looks like is the timeOut in test function, that's why 
I didn't have any errors in multiple tests because, unlike monotest, that timeOut resests with every test func .

*/

describe('all components mount and dismount accordingly on routing change', () => {

  //FIXED-TODO: Why render() returns an empty <body> on next test when I delete this test? WHY?? even if the first test is empty the next tests will render properly
  //FIX: install jest-environment-jsdom-sixteen, modify scripts to "test": "react-app-rewired test --env=jest-environment-jsdom-sixteen" 
  //     and use async helpers like "waitFor" for redux-persist async render (I think, I require further investigation about redux-persist render)

  //TODO: Fix this issue: Isn't supposed to DOM be unmounted aterEach test and render another tree on next?

  const LUCIO_CHAVEZ_TEXT = "Lucio Chávez";
  const ALL_PROJECTS_BUTTON = "All Projects";
  const ALL_LUCIOS_PROJECTS_TEXT = "All Lucio's Projects";

  const ALL_PROJECTS_TEXT_MOBILE  = "Click or Tap on images to see project details.";
  const LANGUAGE = 'Language';
  const SOCIAL_MEDIA_TITLE = 'Social Media';
  const LUCIO_GITHUB_TEXT = "Lucio's GitHub";
  const EMAIL_BUTTON_TEXT = "!Send an email to Lucio¡";
  const SEND_EMAIL_TITLE_TEXT = "Send me a message from here."
  const SIMPLE_FAST = '!Simple and Fast¡';

  test('WEB: components in web mount and dismount accordingly on routing change', async () => {
    const {getByText, getByRole, queryByText } = customRender(<App />);
    //The render is async (maybe for redux-persist) so me must wait to get the first element
    await waitFor(() => {
      expect(getByText(LUCIO_CHAVEZ_TEXT)).toBeTruthy()
    })

    const leftClick = {button: 0}

    //These elements shoulbe always avaialable independently of routing location in app's version 1.1.2
    const allProjectsButton = getByText(ALL_PROJECTS_BUTTON);
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
    expect(queryByText(ALL_LUCIOS_PROJECTS_TEXT)).toBeInTheDocument();
    expect(queryByText("Lucio Chávez")).not.toBeInTheDocument();

    //Projects Page stays the same on click email Icon, email Dialog is mounted
    expect(queryByText("All Lucio's Projects")).toBeInTheDocument();
    fireEvent.click(emailIconButton, leftClick);
    expect(queryByText("Send me a message from here.")).toBeInTheDocument();

    //Dismount emailDialog on click close dialog in Projects Page
    const anotheremailCloseIcon = getByRole('button', {name: "close"});
    fireEvent.click(anotheremailCloseIcon, leftClick);
      // Removing emailDialog is an async action
    await waitFor(() => {
      expect(queryByText("Send me a message from here.")).not.toBeInTheDocument()
    })

    //Rerurns correctly to ProfilePage on click "About Lucio"
    const aboutLucioButton = getByRole('button', {name: "About Lucio"});
    fireEvent.click(aboutLucioButton, leftClick);
    expect(getByText('Lucio Chávez')).toBeTruthy()

  }, 30000);

  test('Redirect to Landing Page on unvalid route', async () => {

    const { queryByText, getByText, hist } = customRender(<App />);

    const leftClick = {button: 0}
    const allProjectsButton = getByText(ALL_PROJECTS_BUTTON);
    fireEvent.click(allProjectsButton, leftClick);

    expect(queryByText("All Lucio's Projects")).toBeInTheDocument();
    
    //is the same history made before AllProviders component
    hist.push('/something-that-does-not-match');

    //history.pushState({}, 'Redirect', '/something-that-does-not-match')

    //await waitFor(() => {
      expect(queryByText(LUCIO_CHAVEZ_TEXT)).toBeInTheDocument();
    //})
  });

  test('MOBILE: components in mobile mount and dismount accordingly on routing change', () => {

    act(() => {
      window.resizeTo(375, 667);
    })
    
    //looks like render must be executed on each test function
    customRender(<App />);
    
    //The render is async (maybe for redux-persist) so me must wait to get the first element
    
    

    /*act(() => {
      window.innerWidth = 360;
      window.innerHeight = 640;
    })
    fireEvent(window, new Event('resize'))*/
    
    expect(screen.queryByText(SOCIAL_MEDIA_TITLE)).not.toBeInTheDocument();

    const leftClick = {button: 0}

    const menuIcon = screen.getByRole('button', {name: "open drawer"});
    fireEvent.click(menuIcon, leftClick);

    expect(screen.queryByText(SOCIAL_MEDIA_TITLE)).toBeInTheDocument();

    //Make sure the email Dialog is not open.
    expect(screen.queryByText(SIMPLE_FAST)).not.toBeInTheDocument();

    const emailButton = screen.getByRole('button', {name: EMAIL_BUTTON_TEXT});
    fireEvent.click(emailButton, leftClick);

    expect(screen.queryByText(SIMPLE_FAST)).toBeInTheDocument();


  })


});

  /*test('Check if profile page component is still mounted after clicking emailIconButton and emailDialog component is mounted', () => {
    const {getByText, getByRole, queryByText } = customRender(<App />);
    const emailIconButton = getByRole('button', {name: '!Send an email to Lucio¡'});
    const leftClick = {button: 0}
    fireEvent.click(emailIconButton, leftClick);
    expect(getByText('Lucio Chávez')).toBeTruthy()
    expect(queryByText("Send me a message from here.")).toBeInTheDocument()
  });

  test('Dismount emailDialog on click close dialog', async () => {
    const { getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}

    const emailCloseIcon = getByRole('button', {name: "close"});
    fireEvent.click( emailCloseIcon, leftClick);
      // Removing emailDialog is an async action 
    await waitFor(() => {
      expect(queryByText("Send me a message from here.")).not.toBeInTheDocument()
    })
  });


  test('Check if projects component is mounted on click "all projects" button and Profile Page is dismounted', () => {
    const {getByText, getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}
    const allProjectsButton = getByText('All Projects');
    fireEvent.click(allProjectsButton, leftClick);
    expect(getByText("All Lucio's Projects")).toBeTruthy();
    expect(queryByText("Lucio Chavez")).not.toBeInTheDocument();
  });

  test('Projects Page stays the same on click email Icon, email Dialog is mounted', () => {
    const { getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}
    const emailIconButton = getByRole('button', {name: '!Send an email to Lucio¡'});
  
    expect(queryByText("All Lucio's Projects")).toBeInTheDocument();
    fireEvent.click(emailIconButton, leftClick);
    expect(queryByText("Send me a message from here.")).toBeInTheDocument();
  });

  test('Dismount emailDialog on click close dialog in Projects Page', async () => {
    const { getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}
    const emailCloseIcon = getByRole('button', {name: "close"});
    fireEvent.click(emailCloseIcon, leftClick);
      // Removing emailDialog is an async action 
    await waitFor(() => {
      expect(queryByText("Send me a message from here.")).not.toBeInTheDocument()
    })
  });

  test('Returns correctly to ProfilePage on click "About Lucio"', () => {
    const { getByRole, queryByText } = customRender(<App />);
    const leftClick = {button: 0}
    const aboutLucioButton = getByRole('button', {name: "About Lucio"});
    fireEvent.click(aboutLucioButton, leftClick);
    expect(queryByText('Lucio Chávez')).toBeInTheDocument();
  });*/