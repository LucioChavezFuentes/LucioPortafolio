import React from 'react'

// Material IU imports
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

//Redux
import {useSelector} from 'react-redux';

//types
import {RootState} from 'redux/rootReducer';

//Helpers
import setTheme from 'helper/setTheme';

const useStyles = makeStyles((theme) => ({
    
    root: {
        backgroundColor: setTheme('paper', theme),
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
