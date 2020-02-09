
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
import nodeIcon from "assets/img/logos/node.svg";
import firebaseIcon from "assets/img/logos/Firebase_Logo_Standard_Lockup.svg";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center",

        '& .itemNode':{
            width: '30%'
        },

        '& .itemFirebase':{
            width: '30%',
            [theme.breakpoints.down("xs")]: {
                width: '40%'
            }
        }
    },
})
)

// DO NOT Forget to name a React Component with a starting Capital Letter
function BackEndIcons() {

    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={classes.flexContainer}>
                <div className='itemNode'>
                    <img src={nodeIcon} />
                </div>

                <div className='itemFirebase'>
                    <img src={firebaseIcon} />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default BackEndIcons;