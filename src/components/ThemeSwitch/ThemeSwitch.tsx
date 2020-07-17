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

const useStyles = makeStyles({
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
    }
})

const mapDispatch = {setDarkTheme, setLightTheme };

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
    const {setDarkTheme, setLightTheme, isThemeDark} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.checked){
        setDarkTheme()
      } else {
        setLightTheme()
      }};

    return (
        <div className={classes.switchContainer}>
          <Brightness5Icon/>
          <BaseThemeSwitch onChange={handleChange} checked={isThemeDark}  />
          <Brightness3Icon/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  isThemeDark: state.ui.isThemeDark
});

export default connect(mapStateToProps, mapDispatch)(ThemeSwitch);
