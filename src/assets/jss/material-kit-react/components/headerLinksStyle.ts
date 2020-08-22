import { defaultFont } from "assets/jss/material-kit-react.js";
import { createStyles, Theme } from '@material-ui/core/styles';

//Helpers
// Provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

//Types
import StyleProps from 'types/StyleProps';

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme:Theme) => {
  const textPrimary = theme.palette.text.primary;

  return createStyles({
    list: {
      ...defaultFont,
      fontSize: "14px",
      margin: 0,
      paddingLeft: "0",
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
      color: "inherit",
      display: 'flex',
    },
  
    listSubheader: {
      color: textPrimary,
  
    },
    listItem: {
      float: "left",
      color: 'inherint',
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0 0 0 10px",
      alignSelf: 'center',
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        color: (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps),
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: "#e5e5e5"
        },
  
        "& .externalLink": {
          top: '11px',
        },
      }
    },
  
    subList: {
      float: "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "15px 0 0 0",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: "#e5e5e5"
        },
  
        "& .externalLink": {
          top: '11px',
        },
      }
    },
  
    listItemText: {
      padding: "0 !important"
    },
  
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)"
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start"
        }
      }
    },
    notificationNavLink: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      top: "4px"
    },
    registerNavLink: {
      top: "3px",
      position: "relative",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex"
    },
    navLinkActive: {
      color: "inherit",
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    icons: {
      width: "20px",
      height: "20px",
      marginRight: "3px"
    },
    socialIcons: {
      position: "relative",
      fontSize: "20px !important",
      //marginRight: "4px"
    },
    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px",
        width: '100%',
      }
    },
    dropdownLinkBadge : {
      
      "&:hover,&:focus": {
        "& svg": {
          transition: 'all 150ms ease-in',
          color: 'white'
        }
      }
    },
    dropdownButtonLink: {
      textTransform: 'unset',
      margin: '0',
      fontSize: '14px',
      //color: theme.palette.text.secondary
    },
  
    ...tooltip,
    marginRight5: {
      marginRight: "5px"
    }
  })
} ;

export default headerLinksStyle;
