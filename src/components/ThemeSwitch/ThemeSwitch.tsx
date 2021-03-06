import React from 'react'

//React-Redux Imports
import {connect} from 'react-redux';

//Redux Imports
import {setDarkTheme, setLightTheme} from 'redux/slices/uiSlice';

//Material UI Imports
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
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
}))

const mapDispatch = {setDarkTheme, setLightTheme };

const BaseThemeSwitch = withStyles((theme) => {

  return ({
  
      switchBase: {
        color: theme.palette.background.paper,
        '&$checked': {
          color: theme.palette.dark.background.default,
        },
        '&$checked + $track': {
          backgroundColor: theme.palette.background.paper,
        },
      },
      checked: {},
      track: {},
    })

})(Switch);


function ThemeSwitch(props) {
    
    const {setDarkTheme, setLightTheme, isThemeDark, darkStyles} = props;
    const classes = useStyles({isThemeDark});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.checked){
        setDarkTheme()
      } else {
        setLightTheme()
      }};

    return (
        <div className={classes.switchContainer}>
          <Brightness5Icon classes={{
            root: darkStyles || ''
          }}  />
          <BaseThemeSwitch onChange={handleChange} checked={isThemeDark}  />
          <Brightness3Icon classes={{
            root: darkStyles || ''
          }}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  isThemeDark: state.ui.isThemeDark
});

export default connect(mapStateToProps, mapDispatch)(ThemeSwitch);
