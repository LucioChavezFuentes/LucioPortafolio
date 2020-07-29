import React from 'react'

//React-Redux Imports
import {connect} from 'react-redux';

//Redux Imports
import {setDarkTheme, setLightTheme} from 'redux/slices/uiSlice';

//Material UI Imports
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

//Material UI Icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
import StyleProps from 'types/StyleProps';

const useStyles = makeStyles((theme) => ({
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '15px',
    },
    sunIcon: {
      color: (props) => getDarkOrLightTheme(theme, 'background', props as StyleProps),
    }
}))

const mapDispatch = {setDarkTheme, setLightTheme };

const BaseThemeSwitch = withStyles(({palette}) => ({
    switchBase: {
      color: palette.background.paper,
      '&$checked': {
        color: palette.dark.background.default,
      },
      '&$checked + $track': {
        backgroundColor: palette.background.paper,
      },
    },
    checked: {},
    track: {},
  }))(Switch);

function ThemeSwitch(props) {
    
    const {setDarkTheme, setLightTheme, isThemeDark} = props;
    const classes = useStyles({isThemeDark});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.checked){
        setDarkTheme()
      } else {
        setLightTheme()
      }};

    return (
        <div className={classes.switchContainer}>
          <Brightness5Icon />
          <BaseThemeSwitch onChange={handleChange} checked={isThemeDark}  />
          <Brightness3Icon/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  isThemeDark: state.ui.isThemeDark
});

export default connect(mapStateToProps, mapDispatch)(ThemeSwitch);
