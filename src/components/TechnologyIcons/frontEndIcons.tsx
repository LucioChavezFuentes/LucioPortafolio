
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
// images
import ReactIcon from "assets/img/logos/React-icon.svg";
import hTMLCSSIcon from "assets/img/logos/HTML-CSS.svg";
import tsIcon from "assets/img/logos/ts.svg";
import reduxIcon from "assets/img/logos/redux.svg";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center",
        height: '100%',

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
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true} style={{height: '100%'}}>
            <div className={classes.flexContainer}>
                <div className='itemHTMLCSS'>
                    <img src={hTMLCSSIcon} alt='html-css' />
                </div>

                <div className='itemTS'>
                    <img src={tsIcon} alt='typescript' />
                </div>

                <div className='itemReact'>
                    <img src={ReactIcon} alt='react' />
                </div>

                <div className='itemRedux'>
                    <img src={reduxIcon} alt='redux' />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default FrontEndIcons;


