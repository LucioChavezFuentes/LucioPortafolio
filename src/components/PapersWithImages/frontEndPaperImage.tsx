
import React from 'react'

import Paper from '@material-ui/core/Paper';
// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Images
import nodeIcon from "assets/img/logos/node.svg";
import ReactIcon from "assets/img/logos/React-icon.svg";

function frontEndPaperImage() {
    return (
        <Paper className='paperDescription'>
            <ScrollAnimation animateIn="fadeIn">
                <div style={{display: 'flex', flexWrap: "wrap", justifyContent:"center", alignContent: "center" }}>
                    <div style={{width: '40%'}}>
                        <img src={nodeIcon} style={{flexGrow:1}} />
                    </div>

                    <div style={{width: '40%'}}>
                        <img src={ReactIcon} style={{flexGrow:1}} />
                    </div>
                </div>
            </ScrollAnimation>
        </Paper>
    )
}

export default frontEndPaperImage


