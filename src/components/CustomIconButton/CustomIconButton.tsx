import React from 'react'
import IconButton from '@material-ui/core/IconButton';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

//Redux
import {useSelector} from 'react-redux';
//types
import StyleProps from 'types/StyleProps';
import {RootState} from 'redux/rootReducer';

//Helpers
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

const styles = (theme : Theme) => createStyles({
    root: {
        '& .MuiSvgIcon-root': {
            color: (props) => getDarkOrLightTheme(theme, 'icon', props as StyleProps),
        }
    }
})

const useStyles = makeStyles(styles)


const CustomIconButton : React.FC<any> = ({children, ...rest} : any) => {

    const {isThemeDark} = useSelector((state:RootState) => state.ui)
    const classes = useStyles({isThemeDark})

    return (
        <IconButton classes={classes} {...rest}>
            {children}
        </IconButton>
    )
}

export default CustomIconButton;
