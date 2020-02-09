
import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
// images
import ReactIcon from "assets/img/logos/React-icon.svg";
import hTMLCSSIcon from "assets/img/logos/HTML-CSS.svg";
import tsIcon from "assets/img/logos/ts.svg";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center",

        '& .itemHTMLCSS':{
            width: '35%'
        },

        '& .itemTS':{
            width: '25%',
            [theme.breakpoints.down("xs")]: {
                width: '30%'
            }
        },

        '& .itemReact': {
            width: '30%',
            [theme.breakpoints.down("xs")]: {
                width: '30%'
            }
        }
    },
})
)

// DO NOT Forget to name a React Component with a starting Capital Letter
function FrontEndIcons() {

    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={classes.flexContainer}>
                <div className='itemHTMLCSS'>
                    <img src={hTMLCSSIcon} />
                </div>

                <div className='itemTS'>
                    <img src={tsIcon} />
                </div>

                <div className='itemReact'>
                    <img src={ReactIcon} />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default FrontEndIcons;


