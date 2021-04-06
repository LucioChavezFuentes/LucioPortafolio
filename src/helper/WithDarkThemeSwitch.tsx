import React from 'react';
//Hooks
import useDarkStyles from './useDarkStyles';

/*'@global': {
    
  '& .MuiSvgIcon-root': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  },
  '& .MuiButton-label': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  }
},*/



const WithDarkThemeSwitch = (props) => {

  const {root} = useDarkStyles('icon', 'color');

  return (
    
    <props.Component darkStyles={root} {...props} />
    )
}

export default WithDarkThemeSwitch
