import React from 'react'
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// Material IU imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function AbouteMe({
    classes, 
    isMobile, 
    fullWidth, 
    gridConst: {
        currentPixelsSpacing, 
        currentGridSpacing
    },
    elevationConst: {
        MAX_ELEVATION,
        MEDIUM_ELEVATION,
    }
 }) {
    return (
        <div className={classes.aboutMeContainer} style={{padding: currentPixelsSpacing}}>
              <div className='aboutMe'>
              <GridContainer justify={isMobile ? "center" : "space-between"} alignItems='flex-start' spacing={currentGridSpacing}>
                <GridItem  xs={fullWidth} sm={fullWidth} md={fullWidth}>
                  <div className={classes.paperTitleContainer}>
                    <Paper elevation={MAX_ELEVATION} className="paper">
                      <Typography color='textPrimary' className="title">About Me</Typography>
                    </Paper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                  <div className='miniTitle'>
                    <Typography color='textPrimary' className="title">Philosophy</Typography>
                  </div>
                </GridItem>

                <GridItem className='gridItemDescription' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                <Paper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                  <p>
                    I believe in always keep learning new things, code with the best known practices and looking forward for those yet to discover. 
                    I also trust in making good and honest work from the beginning in order to avoid extra effort and costs in the future.
                  </p>
                </Paper>
                </GridItem>

                
                  <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                    <div className='miniTitle'>
                      <Typography color='textPrimary' className="title">Hobbies and Lecture</Typography>
                    </div>
                  </GridItem>

                  <GridItem className='gridItemDescription' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                    <Paper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                      <p className='hobbiesDescription'>
                        Usually, I found myself playing video games, watching YouTube cartoons and reading non-fiction books.
                        My last two favorite are: Code Complete of Steve McConell and Essentialism: The Disciplined Pursuit of Less of Greg McKeown.
                      </p>
                    </Paper>
                  </GridItem>

              </GridContainer>
              </div>
            </div>
    )
}

export default AbouteMe
