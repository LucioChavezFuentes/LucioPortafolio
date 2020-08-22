
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images

import NodeIcon from "assets/img/logos/Node.js_logo.svg";
import { ReactComponent as FirebaseIcon} from "assets/img/logos/Firebase_Logo_Standard_Lockup.svg";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center",
        height: '100%',

        '& .itemNode':{
            width: '40%'
        },

        '& .itemFirebase':{
            width: '45%',
        }
    },
})
)

// DO NOT Forget to name a React Component with a starting Capital Letter
function BackEndIcons() {

    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} style={{height: '100%'}}>
            <div className={classes.flexContainer}>
                <div className='itemNode'>
                    <img src={NodeIcon} alt='node-js' />
                </div>

                <div className='itemFirebase'>
                    <FirebaseIcon style={{height: 'auto', maxWidth: '90%',}} title='firebase' />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default BackEndIcons;