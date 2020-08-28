// @material-ui/core components
import { createStyles, Theme } from "@material-ui/core/styles";
//Helpers
//import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
//Types
//import StyleProps from "types/StyleProps";

const styles = (theme: Theme) => createStyles({

  dropdownButtonLink: {
    textTransform: 'unset',
    margin: '0',
    fontSize: '14px',
    //color: theme.palette.text.secondary
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
})

export default styles