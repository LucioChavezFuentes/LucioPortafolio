import React, {useState, useEffect} from 'react'

//Material UI Imports
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

//Material UI Icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

//Import Constants
import {DARK_THEME, LIGHT_THEME} from 'themes/constants';

const useStyles = makeStyles({
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
    }
})

const BaseThemeSwitch = withStyles((theme) => ({
    switchBase: {
      color: 'white',
      '&$checked': {
        color: 'black',
      },
      '&$checked + $track': {
        backgroundColor: 'white',
      },
    },
    checked: {},
    track: {},
  }))(Switch);

function ThemeSwitch(props) {
    const classes = useStyles();
    const {setDarkTheme, darkTheme} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkTheme(!darkTheme)
      };

    return (
        <div className={classes.switchContainer}>
          <Brightness5Icon/>
          <BaseThemeSwitch onChange={handleChange} checked={darkTheme}  />
          <Brightness3Icon/>
        </div>
    )
}

export default ThemeSwitch;
