
//Redux
import {useSelector} from 'react-redux';
//types
import {RootState} from 'redux/rootReducer';
// Material IU imports
import { makeStyles } from '@material-ui/core/styles';
//helper
import setTheme from './setTheme';
//types
import Type from 'types/elementType';


function useDarkStyles(elementType : Type, styleProperty = 'backgroundColor') {

  const useClasses = makeStyles((theme) => ({
    
    root: {
        [styleProperty]: setTheme(elementType, theme),
    },
    }))
  const {isThemeDark} = useSelector((state:RootState) => state.ui);

  const darkClasses = useClasses({isThemeDark});

  return darkClasses; 
}

export default useDarkStyles;