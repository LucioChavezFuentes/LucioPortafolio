// @material-ui/core components
import { createStyles, Theme } from "@material-ui/core/styles";
//Helpers
import getDarkOrLightTheme from "helper/getDarkOrLightTheme";
//Types
import StyleProps from "types/StyleProps";

const styles = (theme: Theme) => {
    
  const textPrimary = theme.palette.text.primary;

  return createStyles({
    listSubheader: {
      color: textPrimary,
    },

    listItem: {
      float: "left",
      color: "inherint",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0 0 0 10px",
      alignSelf: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        color: (props) =>
          getDarkOrLightTheme(theme, "text-secondary", props as StyleProps),
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: "#e5e5e5",
        },

        "& .externalLink": {
          top: "11px",
        },
      },
    },

    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px",
        width: "100%",
      },
    },
    dropdownButtonLink: {
      textTransform: "unset",
      margin: "0",
      fontSize: "14px",
      //color: theme.palette.text.secondary
    },
  });
};

export default styles;
