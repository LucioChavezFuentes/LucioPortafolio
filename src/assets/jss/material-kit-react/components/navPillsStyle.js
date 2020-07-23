import {
  roseColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.js";

//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles } from '@material-ui/core/styles';

function fadePrimaryColor(theme, props){
  return fade(getDarkOrLightTheme(theme, 'primary', props), 0.3)
}

const navPillsStyle = theme => createStyles({

  //TODO: Find if this is an apropiate pattern
  '@global': {
    '#selectedPill': {
      color:'#FFFFFF',
    },
  },

  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
  },

  

  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "nowrap",
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },

  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px",
    zIndex: "1",
    "&:hover": {
      //Make sure the color is more visible than the background
      //(props) => props.isThemeDark ? "#8e8e8e" : "#303030"
      color: (props) => props.isThemeDark ? "#8e8e8e" : "#303030",
      backgroundColor: (props) => fadePrimaryColor(theme, props),
    },
    [theme.breakpoints.down("xs")]: {
      //border: `3px solid ${fade(theme.palette.text.secondary, 0.3)}`,
      margin: 0,
      padding: 0,
      minWidth: 0,
      transition: "all .6s",
      height: "75px"
    },
  },

  pillsWithIcons: {
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0px",
    }
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    filter: 'grayscale(100%)',
    color: 'black',
    "&, & *": {
      letterSpacing: "normal !important"
    },
  },

  tabIconSelected: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    filter: 'grayscale(0%)',
    //filter: 'saturate(1)',
    color: 'black',
    
    "&, & *": {
      letterSpacing: "normal !important"
    },

  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px",
    minHeight: "527px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    }
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'primary', props),
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)",
      //border: `5px solid ${theme.palette.primary.dark} !important`,
      //zIndex: "2 !important",
    },
    
    
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow:
        "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    },
    
  },
  tabContent: {
    overflow: "hidden",
  },
  tabButton: {
    position: "flex",
    textAlign: "center",
    backgroundColor: "red"
  },
  nonSelectedElements:{
    "&:hover": {
      backgroundColor: "gray"
    }
  },
  carouselStyle: {
    width: "90%"
  },
  
});

export default navPillsStyle;
