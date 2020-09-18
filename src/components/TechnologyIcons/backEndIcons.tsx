
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images

import NodeIcon from "assets/img/logos/Node.js_logo.svg";
import { ReactComponent as FirebaseIcon} from "assets/img/logos/Firebase_Logo_Standard_Lockup.svg";
import { ReactComponent as AWSIcon } from "assets/img/logos/aws_logo.svg";

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
            width: '34%'
        },

        '& .itemFirebase':{
            width: '33%',
        },

        '& .itemAWS' : {
            width: '33%'
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

                <div className='itemAWS'>
                    <AWSIcon style={{height: 'auto', maxWidth: '90%',}} title='aws' />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default BackEndIcons;