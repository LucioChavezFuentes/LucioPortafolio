import React from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//Redux
import { connect } from 'react-redux';

//import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'typeface-roboto';

import ProfilePage from "views/ProfilePage/ProfilePage";

// MUI Imports
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {IntlProvider} from 'react-intl';

//Helpers
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

//types
import {RootState} from 'redux/rootReducer';
import StyleProps from 'types/StyleProps';

interface AppProps {
  isThemeDark: boolean
}

//This test removes the 'fbclid=' in the URL if the Web App is opened from a facebooks's inbox link
if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));

const hist = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
    },
    // If color does not change look if some specific class with nested <p> tag modifies it.
    p: {
      color: (props) => getDarkOrLightTheme(theme, 'text',  props as StyleProps),
    },

    a: {
      color: (props) => getDarkOrLightTheme(theme, 'text',  props as StyleProps)
    },

    // This rule changes all icons in the ToolBar Component, check for <ToolBar> with id='toolBar' in Header.tsx
    /*'#toolBar': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.background.default,
      }
    },*/
    // This rule modifies the input style when focused or autofilled, only available on Chrome's autocomplete
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
      '-webkit-text-fill-color': (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
      '-webkit-box-shadow': (props) => `0 0 0px 1000px ${getDarkOrLightTheme(theme, 'autofillInput', props as StyleProps)} inset`,
      'transition': 'background-color 5000s ease-in-out 0s',
    },

    '.MuiPaper-root': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
      // This class changes the icons inside every Paper component
      //TODO: This rule may make unexpected styles, read more about class nesting in SCSS
      /*'& .MuiSvgIcon-root': {
        color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
      }*/
    },

    '.MuiDrawer-paper': {
      '& .MuiSvgIcon-root': {
        color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
      }
    },

    '.MuiButton-containedPrimary': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary', props as StyleProps),
      "&:hover,&:focus": {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps),
      }
    },

    '.MuiButton-containedSecondary': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'secondary', props as StyleProps),
      "&:hover,&:focus": {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'secondary-dark', props as StyleProps),
      }
    },

    '.MuiButtonGroup-root': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary', props as StyleProps),
      "&:hover,&:focus": {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps),
      },
    },

    '.MuiButton-textPrimary': {
      color: (props) => getDarkOrLightTheme(theme, 'primary-light', props as StyleProps),
    },
    /*'.MuiButtonBase-root': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary', props as StyleProps),
      "&:hover,&:focus": {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps),
      }
    },*/

    '.MuiLinearProgress-barColorPrimary': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary', props as StyleProps),
    },

    '.MuiTypography-colorTextPrimary': {
      color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps)
    },

    '.MuiTextField-root': {

      '& .MuiInputBase-root': {
        color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps)
      },

      '& .MuiInputLabel-root': {
        color: (props) => getDarkOrLightTheme(theme, 'label', props as StyleProps)
      },

      '& label.Mui-focused': {
        color: (props) => getDarkOrLightTheme(theme, 'primary-light', props as StyleProps),
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: (props) => getDarkOrLightTheme(theme, 'outlineInput', props as StyleProps),
        },
        '&:hover fieldset': {
          borderColor: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
        },
        '&.Mui-focused fieldset': {
          borderColor: (props) => getDarkOrLightTheme(theme, 'primary-light', props as StyleProps),
        },
      },
    },

    '.MuiFormHelperText-root' : {
      '& p': {
      color: (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps),
      }
    },

    '.MuiDialogContent-dividers': {
      borderTop: (props) => `1px solid ${getDarkOrLightTheme(theme, 'divider', props as StyleProps)}`,
      borderBottom: (props) => `1px solid ${getDarkOrLightTheme(theme, 'divider', props as StyleProps)}`,
    },

    '.MuiDialogActions-root': {
      '& p': {
        color: (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps)
      },
    },

    '.MuiDialogTitle-root': {
      color : (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps)
    },

    '.MuiTypography-colorTextSecondary': {
      color : (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps)
    },

    '.MuiFormHelperText-root.Mui-error': {
      '& p': {
        color: (props: StyleProps) => props.isThemeDark ? theme.palette.error.light : theme.palette.error.main ,
      }
    },

    '.MuiListSubheader-root': {
      color : (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps)
    },
    
  }
})
)

function App(props : AppProps) {

  const {isThemeDark} = props;
  useStyles({isThemeDark})
    /*const theme = React.useMemo(
      () => isThemeDark ? themes.darkTheme : themes.lightTheme
    , [isThemeDark]);*/

    return (
      <CssBaseline>
        <IntlProvider locale="es" defaultLocale="en">
        <Router history={hist}>
          <Switch>
            <Route path="/" render={(props) => <ProfilePage {...props} isThemeDark={isThemeDark} />}  />
          </Switch>
        </Router>
        </IntlProvider>
      </CssBaseline>
    )
}

const mapStateToProps = (state : RootState) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(App);
