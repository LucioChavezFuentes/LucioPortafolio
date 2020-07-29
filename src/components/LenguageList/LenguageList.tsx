import React from "react";

//React-Redux Imports
import {connect, useSelector} from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import Button from "components/CustomButtons/Button";

//import {ReactComponent as MexicanFlag} from 'assets/img/flags/MexicoFlag1.svg';
//import USAFlag from 'assets/img/flags/USAFlag';
// Don´t forget to set the viewbox prop in SVG Icon as the original svg 
import MexicoFlag from 'assets/img/flags/MexicoFlag';
import { ReactComponent as MexFlag } from 'assets/img/flags/MexicoFlag.svg'; 

//import {ReactComponent as USAFlag }from 'assets/img/flags/USAFlag.svg';
import  USAFlag from 'assets/img/flags/USAFlag.svg';

import { changeLenguage } from 'redux/slices/uiSlice';
import AppLocale from 'lang/index';

//Types
import { RootState } from "redux/rootReducer";

const useStyles = makeStyles({
    lenguageNavLink: {
				color: 'inherit',
				marginLeft: '10px',
		},
		
		buttonIcon: {
			marginRight: "10px",
			width: "25px",
		}
})

function LenguageList(props) {

  const classes = useStyles()
	const {locale} = useSelector((state : RootState) => state.ui)
  const {changeLenguage} = props;

    return (
        <CustomDropdown
						onClick={changeLenguage}
						buttonText="Lenguage"
            buttonIcon={AppLocale[locale].icon}
            buttonProps={{
                className: classes.lenguageNavLink
						}}
						buttonIconClass={classes.buttonIcon}
            dropdownList={[
                {content : (
                <>
                    <ListItemIcon>
                        <MexicoFlag sizeInPixels={'35px'} />
                    </ListItemIcon>
                    <ListItemText primary="ES-MX" />
                </> ),
                param: {locale: 'esMX'}
                },
                {content : (
                    <>
                        <ListItemIcon>
                          <img src={USAFlag} style={{width: '35px'}} />
                        </ListItemIcon>
                        <ListItemText primary="EN-US" />
                    </> ),
                param: {locale: 'enUS'}
                },
            ]}
        />
    )
}

export default connect(null,{changeLenguage})(LenguageList);
