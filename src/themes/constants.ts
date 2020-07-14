// MUI Imports
import {createMuiTheme} from '@material-ui/core/styles';

export const LIGHT_THEME = 'lightTheme';
export const DARK_THEME = 'darkTheme';

const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#43a047',
      },
      secondary: {
        main: '#f44336',
      },
    },
  })
  
const darkTheme = createMuiTheme({
    palette: {
  
      type: 'dark',
  
      primary: {
        main: '#43a047',
      },
      secondary: {
        main: '#f44336',
      },
    },
  })
  
const themes = {
    lightTheme,
    darkTheme,
  }

export default themes;