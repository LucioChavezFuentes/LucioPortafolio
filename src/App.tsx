
import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

// @material-ui/core components
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Animations
import {AnimatePresence } from 'framer-motion'

//Redux
import { connect } from 'react-redux';
//Redux Persist
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from 'redux/store';

import ProfilePage from "views/ProfilePage/ProfilePage";
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import LenguageList from 'components/LenguageList/LenguageList';
import Parallax from "components/Parallax/Parallax.js";
import Header from "components/Header/Header";
import Projects from 'views/Projects/Projects';

//Mobile Components
import MobileProjects from 'mobile/views/Projects';

// MUI Imports
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Internationalization
import {IntlProvider} from 'react-intl';

//Helpers
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
import useWindowSize from "helper/useWindowSize";

//NProgress
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import WebFont from 'webfontloader';

//types
import {RootState} from 'redux/rootReducer';
import StyleProps from 'types/StyleProps';

//AppLocale 
import AppLocale from "lang/index";

interface AppProps {
  isThemeDark: boolean;
  locale: string
}

//This test removes the 'fbclid=' in the URL if the Web App is opened from a facebooks's inbox link
if(/^\?fbclid=/.test(window.location.search))
     window.location.replace(window.location.href.replace(/\?fbclid.+/, ""));


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

    '::-webkit-scrollbar': {
      width:' 6px',
      borderLeft: (props) => `1px solid ${getDarkOrLightTheme(theme, 'primary-light', props as StyleProps)}`,
    },

    '::-webkit-scrollbar-thumb' : {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps),
    },


    '.MuiDialog-container': {
      //backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
      '& .MuiDialog-paper': {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
      }
    },

    '.MuiPaper-rounded': {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
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
      },

      '& span': {
        color: (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps),
      },
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
  },
})
)

function App(props : AppProps) {

  
  
  

  //const [loadedFonts, setLoadedFonts] = React.useState(false)
  //const {locale} = useSelector(state => state.ui.lenguage )
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('md'));
 
  const {isMobile} = useWindowSize();
  const {isThemeDark, locale} = props;
  useStyles({isThemeDark})

  //This code my be useless and take more time to load the page  but it will be kept for
  //a recordatory that "webfontloader" exists, if you want to "manage" the fonts loading programatically use that library.
  //But for a more optimized and balanced approach I recommend self host the fonts.
  //Encoded fonts load faster, webfontloader combined with "preload" at index.html in line 22 seems to be a good combination. But not perfect
  /*const fontsLoaded : any[] =  [];
  const fontsToLoad = 2;
  function handleLoadedFonts(fontFamily : string) {
    //sessionStorage.fonts = true;
    fontsLoaded.push(fontFamily);
    if(fontsLoaded.length >= fontsToLoad) {
      setLoadedFonts(true)
    }
  }

  const webFontConfig = {
    custom: {
        families: ['Roboto', 'Roboto Slab'],
        urls: ['/fonts/fonts.css'],
        },
    //active: handleLoadedFonts,
    fontactive: handleLoadedFonts
  };*/

  /*React.useEffect(() => {
    //@ts-ignore
    document.fonts.ready.then(() => {
      setLoadedFonts(true)
    })
  }, [])*/
    /*const theme = React.useMemo(
      () => isThemeDark ? themes.darkTheme : themes.lightTheme
    , [isThemeDark]);*/

    //TODO:Find a better way to handle the route '/menu/email' for mobile
    Nprogress.start();
    return (
      <PersistGate loading={null} persistor={persistor}>
        {(bootstrap) => {
          //WebFont.load(webFontConfig);
          if(bootstrap) {
            Nprogress.done();
            return (
              <CssBaseline>
          <IntlProvider locale={AppLocale[locale].lenguage} defaultLocale="en" messages={AppLocale[locale].messages as any } >
          
          
            <Header
              color="transparent"
              leftLinks={{ThemeSwitch , LenguageList}}
              isThemeDark={isThemeDark}
              changeColorOnScroll={{
                height: isMobile ? 45 : 30,
                color: 'primaryHeader',
              }}
              fixed
            />
            <Parallax small isThemeDark={isThemeDark} />
            <AnimatePresence>
              <Switch>
                <Route path={["/", "/menu/email", "/menu", "/email"]} exact render={(props) => <ProfilePage {...props} isThemeDark={isThemeDark} />}  />
                <Route 
                  path={["/projects", "/projects/:project", "/projects/menu", "/projects/email", "/projects/menu/email"]} 
                  exact 
                  component={mobileDevice ? MobileProjects : Projects} />
                <Redirect to="/" />
                
              </Switch>
            </AnimatePresence>
          
          
          </IntlProvider>
        </CssBaseline>
          )
          } else {

            return (
              <div></div>
            )
            
          }
          
          
        }}
        
      </PersistGate>
    )
}

const mapStateToProps = (state : RootState) => ({
  isThemeDark: state.ui.isThemeDark,
  locale: state.ui.locale,
})

export default connect(mapStateToProps)(App);
