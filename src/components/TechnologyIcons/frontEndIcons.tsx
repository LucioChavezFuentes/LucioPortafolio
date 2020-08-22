
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
// images
import {ReactComponent as ReactIcon} from "assets/img/logos/React-icon.svg";
import {ReactComponent as HTMLCSSIcon} from "assets/img/logos/HTML-CSS.svg";
import {ReactComponent as TSIcon} from "assets/img/logos/ts.svg";
import {ReactComponent as ReduxIcon} from "assets/img/logos/redux.svg";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center",
        height: '100%',
        width: '100%',
        

        '& .itemHTMLCSS':{
            width: '30%'
        },

        '& .itemTS':{
            width: '20%',
        },

        '& .itemReact': {
            width: '25%',
        },

        '& .itemRedux': {
            width: '25%',
        }
    },
})
)

// DO NOT Forget to name a React Component with a starting Capital Letter
function FrontEndIcons() {

    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} style={{height: '100%', width: '100%',}}>
            <div className={classes.flexContainer}>
                <div className='itemHTMLCSS'>
                    <HTMLCSSIcon style={{height: 'auto', maxWidth: '90%',}}/>
                </div>

                <div className='itemTS'>
                    <TSIcon style={{height: 'auto', maxWidth: '90%',}} title='typescript' />
                </div>

                <div className='itemReact'>
                    <ReactIcon style={{height: 'auto', maxWidth: '90%',}} title='react' />
                </div>

                <div className='itemRedux'>
                    <ReduxIcon style={{height: 'auto', maxWidth: '90%',}} title='redux' />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default FrontEndIcons;


