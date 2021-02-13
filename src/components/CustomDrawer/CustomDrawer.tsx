import React from 'react'
//Material UI
import Drawer from "@material-ui/core/Drawer";

//Helpers
//This helper use hooks so only works in functional components
import AddDrawerDarkTheme from 'helper/AddDrawerDarkTheme';

/*'@global': {
    
  '& .MuiSvgIcon-root': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  },
  '& .MuiButton-label': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  }
},*/


function CustomDrawer({children, classes, ...rest} : any) {

  const withDarkClasses = AddDrawerDarkTheme(classes)

  return (
    <Drawer classes={withDarkClasses} {...rest}>
      {children}
    </Drawer>
    
  )
}

export default CustomDrawer
