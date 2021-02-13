import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Redux
import {useSelector} from 'react-redux';

//types
import StyleProps from 'types/StyleProps';
import {RootState} from 'redux/rootReducer';

//Helpers
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

/*'@global': {
    
  '& .MuiSvgIcon-root': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  },
  '& .MuiButton-label': {
    color: (props) => getDarkOrLightTheme(theme, 'icon',  props as StyleProps),
  }
},*/

const useStyles = makeStyles((theme) => ({
    
  root: {
      color: (props) => getDarkOrLightTheme(theme, 'icon', props as StyleProps),
  },
  })
)

const WithDarkThemeSwitch = (props) => {

  const {isThemeDark} = useSelector((state:RootState) => state.ui);
  const {root} = useStyles({isThemeDark});

  return (
    
    <props.Component darkStyles={root} {...props} />
    )
}

export default WithDarkThemeSwitch
