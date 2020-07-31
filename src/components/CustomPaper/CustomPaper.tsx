import React from 'react'

// Material IU imports
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

//Redux
import {useSelector} from 'react-redux';

//types
import StyleProps from 'types/StyleProps';
import {RootState} from 'redux/rootReducer';

//Helpers
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

const useStyles = makeStyles((theme) => ({
    
    root: {
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'paper', props as StyleProps),
    },
    })
)


function CustomPaper({children, ...rest}) {
		const {isThemeDark} = useSelector((state:RootState) => state.ui)
    const classes = useStyles({isThemeDark})
    return (
        <Paper classes={classes} {...rest} >
					{children}
				</Paper>
    )
}

export default CustomPaper;
