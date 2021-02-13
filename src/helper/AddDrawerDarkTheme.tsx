
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
    
  paper: {
      backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
  },
  })
)
function AddDrawerDarkTheme(componentClasses) {

  const {isThemeDark} = useSelector((state:RootState) => state.ui);
  const darkThemeclasses = useStyles({isThemeDark});
  const {paper, ...rest} = componentClasses;

  const classes = {
    paper: `${darkThemeclasses.paper} ${paper}`,
    ...rest
  }

  return classes

}

export default AddDrawerDarkTheme;