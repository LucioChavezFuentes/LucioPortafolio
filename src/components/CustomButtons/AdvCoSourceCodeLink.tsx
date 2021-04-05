import React from 'react'
//Components
import Button from "components/CustomButtons/Button";
// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';


function AdvCoSourceCodeLink({children}) {
  //the startIcon class should be added here to style the space between icon, text, and left end. 
  //In this case this component does not have startIcon to style.
  //To see and example, go to profilePage.ts on line 208
  return (
    <Button  
      href='https://github.com/LucioChavezFuentes/codigoAventura' 
      target="_blank"
      rel="noopener noreferrer"
      className='gitHubButton' 
      classes={{startIcon: 'startIcon'}}
      color='github' 
      startIcon={<GitHubIcon />}
    >
    {children}
  </Button>
  )
}

export default AdvCoSourceCodeLink
