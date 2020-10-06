import React from 'react'
//Components
import Button from "components/CustomButtons/Button";
// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';


function AdvCoSourceCodeLink({children}) {
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
