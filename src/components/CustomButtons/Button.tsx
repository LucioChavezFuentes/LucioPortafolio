import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Button from "@material-ui/core/Button";
// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

interface RegularButtonProps {
  color?: 'primary' | 'secondary' | "inherit" | "default" & 
  "info" |"success" | "warning" | "danger" | "rose" | "white" | "facebook" | "twitter" | "google" | "github" | "transparent" ;
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  size?: "sm"| "lg";
  startIcon?: React.ReactNode;
  customStyle?: boolean;
  children: React.ReactNode;
  component?: typeof React.Component;
  variant?: "text" | "outlined" | "contained";
  to?: boolean;
  spy?: boolean;
  smooth?: boolean;
  duration?: number;
  onClick?: any;
  href?: string;
  target?: string;
  classes?: any;
}

const makeComponentStyles = makeStyles(() => createStyles({
  ...buttonStyle
  }
));

const RegularButton = React.forwardRef<HTMLButtonElement, RegularButtonProps>((props, ref) => {
  const {
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    startIcon,
    customStyle,
    color,
    variant,
    ...rest
  } = props;

  const mainColorProperties = {
    inherit: "inherit",
    primary : "primary",
    secondary : "secondary", 
    default : "default",
  };

  const mainColorPropertiesArray = ["inherit", "primary", "secondary", "default",]

  const customColorPropertiesArray = ["info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent",]

  const customColorProperties = {
    info: "info",
    success: "success",
    warning : "warning",
    danger: "danger",
    rose :"rose",
    white: "white",
    facebook: "facebook",
    twitter: "twitter",
    google: "google",
    github: "github",
    transparent: "transparent",
  } ;


  const classes = makeComponentStyles();

  const setMainColor = (color : any) => {
    let mainColor : 'primary' | 'secondary' | "inherit" | "default";
    if(color && mainColorProperties.hasOwnProperty(color) ) {
        mainColor = color
        return mainColor
    } else {
      return undefined
    }
  }

  const setCustomColor = (color : any) => {
    let customColor : "info" |"success" | "warning" | "danger" | "rose" | "white" | "facebook" | "twitter" | "google" | "github" | "transparent";
    if(color && customColorProperties.hasOwnProperty(color) ) {
        customColor = color
        return customColor
    } else {
      return undefined
    }
  }

  const btnClasses = classNames({
    [classes.button]: customStyle,
    [classes[size!]]: size,
    [classes[setCustomColor(color)!]]: setCustomColor(color),
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className!]: className
  });

  
  return ( 
    <Button {...rest} color={setMainColor(color)} startIcon={startIcon} variant={variant} ref={ref} className={ btnClasses }>
      {children}
    </Button>
  )
});

/*
RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
*/
export default RegularButton;