import { defaultFont } from "assets/jss/material-kit-react.js";
import { createStyles, Theme } from '@material-ui/core/styles';

//Helpers
// Provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

//Types
import StyleProps from 'types/StyleProps';

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme:Theme) => {

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
      [theme.breakpoints.down("sm")]: {
        display: 'block'
      }

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
    },
  
    ...tooltip,
  })
} ;

export default headerLinksStyle;
