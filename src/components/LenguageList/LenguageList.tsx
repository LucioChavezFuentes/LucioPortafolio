import React from "react";

//React-Redux Imports
import {connect, useSelector} from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';

//import {ReactComponent as MexicanFlag} from 'assets/img/flags/MexicoFlag1.svg';
//import USAFlag from 'assets/img/flags/USAFlag';
// Don´t forget to set the viewbox prop in SVGIcon Component as the original svg 
import MexicoFlag from 'assets/img/flags/MexicoFlag';

import  USAFlag from 'assets/img/flags/USAFlag.svg';

import { changeLenguage } from 'redux/slices/uiSlice';
import AppLocale from 'lang/index';

import {injectIntl} from 'react-intl';

//Types
import { RootState } from "redux/rootReducer";

const useStyles = makeStyles({
    lenguageNavLink: {
				color: 'inherit',
                margin: '8px 0 8px 10px'
		},
		
		buttonIcon: {
			marginRight: "10px",
			width: "25px",
		}
})

function LenguageList(props) {
  const {changeLenguage, dropdownClass, intl} = props;
  const classes = useStyles()
	const {locale} = useSelector((state : RootState) => state.ui)
  

    return (
        <CustomDropdown
						onClick={changeLenguage}
						buttonText={intl.formatMessage({
              defaultMessage: 'Language',
              description: 'language-title',
              id: "language-title",
            })}
            buttonIcon={AppLocale[locale].icon}
            buttonProps={{
                className: classes.lenguageNavLink
						}}
            buttonIconClass={classes.buttonIcon}
            dropdownClass={dropdownClass}
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
                          <img src={USAFlag} alt='USA-Flag' style={{width: '35px'}} />
                        </ListItemIcon>
                        <ListItemText primary="EN-US" />
                    </> ),
                param: {locale: 'enUS'}
                },
            ]}
        />
    )
}

export default connect(null,{changeLenguage})(injectIntl(LenguageList));
