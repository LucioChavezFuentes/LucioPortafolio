import '@testing-library/jest-dom/extend-expect'

/*
const customRender = async ( options?) => {
  const utils = render( <App />, { wrapper: AllTheProviders, ...options })

  //These elements shoulbe always avaialable independently of routing location in app's version 1.1.2
  let allProjectsButton
  //const emailIconButton = utils.getByRole('button', {name: '!Send an email to Lucio¡'});
  //const aboutLucioButton = utils.getByRole('button', {name: "About Lucio"});

  await waitFor(() => {
    allProjectsButton = utils.getByText('All Projects');
  })

  const leftClick = {button: 0}

  return {...utils, allProjectsButton, /*emailIconButton, aboutLucioButton,*//* leftClick }
}

test('all components mount and dismount accordingly on routing change', () => {
  customRender().then(({getByText}) => {
    expect(getByText('Lucio Chávez')).toBeTruthy()
  });
  //The render is async (maybe for redux-persist) so me must wait to get the first element
  
});*/

/*test('Check if profile page component is still mounted after clicking emailIconButton and emailDialog component is mounted', () => {
  const {getByText, emailIconButton, queryByText, leftClick } = customRender();

  fireEvent.click(emailIconButton, leftClick);
  expect(getByText('Lucio Chávez')).toBeTruthy()
  expect(queryByText("Send me a message from here.")).toBeInTheDocument()
});

test('Dismount emailDialog on click close dialog', async () => {
  const {getByRole, queryByText, leftClick } = customRender();
  const emailCloseIcon = getByRole('button', {name: "close"});
  fireEvent.click( emailCloseIcon, leftClick);
    // Removing emailDialog is an async action 
  await waitFor(() => expect(queryByText("Send me a message from here.")).not.toBeInTheDocument())
});

test('Check if projects component is mounted on click "all projects" button and Profile Page is dismounted', () => {
  const {getByText, queryByText, leftClick, allProjectsButton } = customRender();

  fireEvent.click(allProjectsButton, leftClick);
  expect(getByText("All Lucio's Projects")).toBeTruthy();
  expect(queryByText("Lucio Chavez")).not.toBeInTheDocument();
});

test('Projects Page stays the same on click email Icon, email Dialog is mounted', () => {
  const {getByText, queryByText, leftClick, emailIconButton } = customRender();

  expect(queryByText("All Lucio's Projects")).toBeInTheDocument();
  fireEvent.click(emailIconButton, leftClick);
  expect(queryByText("Send me a message from here.")).toBeInTheDocument();
});

test('Dismount emailDialog on click close dialog in Projects Page', () => {
  const {getByRole, queryByText, leftClick } = customRender();

  const anotherEmailCloseIcon = getByRole('button', {name: "close"});
  fireEvent.click(anotherEmailCloseIcon, leftClick);
    // Removing emailDialog is an async action 
   expect(queryByText("Send me a message from here.")).not.toBeInTheDocument()
});

test('Returns correctly to ProfilePage on click "About Lucio"', () => {
  const {getByRole, queryByText, leftClick } = customRender();
  
  const aboutLucioButton = getByRole('button', {name: "About Lucio"});
  fireEvent.click(aboutLucioButton, leftClick);
  expect(queryByText('Lucio Chávez')).toBeInTheDocument();
});
*/