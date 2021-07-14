import React from 'react'
import Button from "@material-ui/core/Button";

//React Intl 
import {FormattedMessage} from 'react-intl';

import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';
import { ExtendedButtonProps } from '@material-ui/core';



const GitHubButtonBase = withStyles({

  //Here you can customize your component according to MUI API classes.
  //All API Button Classes: https://material-ui.com/api/button/
  root: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow:
      "0 1px 2px 0 rgba(51, 51, 51, 0.14), 0 1px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#000000",
      color: "#fff",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);"
    }
  },

  startIcon: {
    marginLeft: '0px'
  }
})(Button);


const GitHubButton = ({children, href, ...rest} : ExtendedButtonProps ) : JSX.Element => {

  return (
    <GitHubButtonBase startIcon={<GitHubIcon />} href={href} target="_blank" rel="noopener noreferrer"  {...rest} >
      {
      children || <FormattedMessage 
																defaultMessage= 'Source Code'
																description= 'code-button'
																id= "code-button" />
                                }
    </GitHubButtonBase>
  )
}

export default GitHubButton
