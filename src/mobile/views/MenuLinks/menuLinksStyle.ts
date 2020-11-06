import { defaultFont } from "assets/jss/material-kit-react.js";
import { createStyles, Theme } from '@material-ui/core/styles';

//Helpers
// Provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

//Types
import StyleProps from 'types/StyleProps';

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const menuLinksStyle = (theme:Theme) => {

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
      display: 'block',

    },
  
    listSubheader: {
      color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
      fontWeight: 600,
      margin: '10px 0 0',
      paddingTop: '10px',
  
    },
    listItem: {
      float: "left",
      position: "relative",
      display: "block",
      width: "100%",
      padding: "0 0 0 10px",
      alignSelf: 'center',
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
    },
    
    dropdownButtonLink: {
      textTransform: 'unset',
      margin: '0',
      fontSize: '14px',
      width: '90%',
      justifyContent: 'flex-start',
      //color: theme.palette.text.secondary
    },
  
    ...tooltip,
  })
} ;

export default menuLinksStyle;