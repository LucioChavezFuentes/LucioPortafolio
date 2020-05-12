import React from 'react'

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
import jestIcon from "assets/img/logos/jest.svg";
import testingLibraryIcon from "assets/img/logos/testingLibraryLogo.png";

// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme : Theme) => createStyles({

    flexContainer : {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent:"space-evenly",
        alignItems: "center",

        '& .itemJest':{
            width: '20%'
        },

        '& .itemTestingLibrary': {
            width: '25%'
        }
    },
})
)

// DO NOT Forget to name a React Component with a starting Capital Letter
function BackEndIcons() {

    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
            <div className={classes.flexContainer}>
                <div className='itemJest'>
                    <img src={jestIcon} alt='jest' />
                </div>

                <div className='itemTestingLibrary'>
                    <img src={testingLibraryIcon} alt='testing-library' />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default BackEndIcons;