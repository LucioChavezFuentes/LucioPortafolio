
import React from 'react'

//Material UI Imports
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

//Material UI Icons
import Brightness5Icon from '@material-ui/icons/Brightness5';

/*function BaseSwitch() {
    return (
        <Switch icon={Brightness5Icon} />
    )
}*/

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

function ThemeSwitch() {
    return (
        <BaseThemeSwitch icon={Brightness5Icon} />
    )
}

export default ThemeSwitch;
