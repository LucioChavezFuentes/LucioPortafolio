// MUI Imports
import {createMuiTheme} from '@material-ui/core/styles';

export const LIGHT_THEME = 'lightTheme';
export const DARK_THEME = 'darkTheme';

const THEME_OBJECT = {
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#f44336',
    },

    dark: {
      primary: {
        main: '#8e24aa',
        light: '#ce93d8',
      },

      secondary: {
        main: '#B71C1C'
      },

      text: {
        primary: '#fff',
        secondary:'rgba(255, 255, 255, 0.7)',
        disabled:' rgba(255, 255, 255, 0.5)',
      },

      action: {
        active: '#fff',
        hover: 'rgba(255, 255, 255, 0.08)',
        selected: 'rgba(255, 255, 255, 0.16)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground : 'rgba(255, 255, 255, 0.12)',
      },

      background: {
        default: '#121212',
        paper: '#424242'
      },

      divider: 'rgba(255, 255, 255, 0.12)',
    }
  },
}
/*
const lightThemeObject = {
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#f44336',
    },
}}

const darkThemeObject = {

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#424242',
        },
      },
    },
  },

    palette: {
  
      type: 'dark' as const,
  
      primary: {
        main: '#8e24aa',
        light: '#ce93d8'
      },
      secondary: {
        main: '#B71C1C' ,
      },
      background: {
        default: '#121212',
      }
    },
  }*/
//TODO: If you have time, move the recent updated theme objects to JSON.parse
const lightTheme = createMuiTheme(JSON.parse("{\n   \"palette\": {\n      \"primary\": {\n         \"main\": \"#43a047\"\n      },\n      \"secondary\": {\n         \"main\": \"#f44336\"\n      }\n   }\n}"))
const darkTheme = createMuiTheme(JSON.parse("{\n   \"overrides\": {\n      \"MuiCssBaseline\": {\n         \"@global\": {\n            \"body\": {\n               \"backgroundColor\": \"#424242\"\n            }\n         }\n      }\n   },\n   \"palette\": {\n      \"type\": \"dark\",\n      \"primary\": {\n         \"main\": \"#8e24aa\",\n         \"light\": \"#ce93d8\"\n      },\n      \"secondary\": {\n         \"main\": \"#B71C1C\"\n      },\n      \"background\": {\n         \"default\": \"#121212\"\n      }\n   }\n}"))

//const lightTheme = createMuiTheme(lightThemeObject)
//const darkTheme = createMuiTheme(darkThemeObject)
  
const themes = {
    lightTheme,
    darkTheme,
  }

export default themes;