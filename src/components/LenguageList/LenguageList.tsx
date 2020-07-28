import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';

import MexicanFlag from 'assets/img/flags/MexicoFlag';
import USAFlag from 'assets/img/flags/USAFlag';

function LenguageList() {
    return (
        <CustomDropdown
            dropdownList={[
                <>
                    <ListItemIcon>
                        <MexicanFlag sizeInPixels={'15px'} />
                    </ListItemIcon>
                    <ListItemText primary="ES-MX" />
                </>,

                <>
                    <ListItemIcon>
                        <USAFlag sizeInPixels={'15px'} />
                    </ListItemIcon>
                    <ListItemText primary="EN-US" />
                </>,
            ]}
        />
    )
}

export default LenguageList
