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
    },
    intl
 }) {
    return (
        <div className={classes.aboutMeContainer} style={{padding: currentPixelsSpacing}}>
              <div className='aboutMe'>
              <GridContainer justify={isMobile ? "center" : "space-between"} alignItems='flex-start' spacing={currentGridSpacing}>
                <GridItem  xs={fullWidth} sm={fullWidth} md={fullWidth}>
                  <div className={classes.paperTitleContainer}>
                    <Paper elevation={MAX_ELEVATION} className="paper">
                      <Typography color='textPrimary' className="title">
                        {intl.formatMessage({
                        defaultMessage: "About Me",
                        description: 'title-about-me',
                        id: "title-about-me",
                        })}
                        
                      </Typography>
                    </Paper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                  <div className='miniTitle'>
                    <Typography color='textPrimary' className="title">
                      {intl.formatMessage({
                      defaultMessage: "Philosophy",
                      description: 'title-philosophy',
                      id: "title-philosophy",
                      })}
                      
                    </Typography>
                  </div>
                </GridItem>

                <GridItem className='gridItemDescription' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                <Paper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                  <p>
                  {intl.formatMessage({
                    defaultMessage: "I believe in always keep learning new things, code with the best known practices and looking forward for those yet to discover. I also trust in making good and honest work from the beginning in order to avoid extra effort and costs in the future.",
                    description: 'philosophy',
                    id: "philosophy",
                  })}
                  </p>
                </Paper>
                </GridItem>

                
                  <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                    <div className='miniTitle'>
                      <Typography color='textPrimary' className="title">
                        {intl.formatMessage({
                        defaultMessage: "Hobbies and Lecture",
                        description: 'title-hobbies',
                        id: "title-hobbies",
                        })}
                        
                      </Typography>
                    </div>
                  </GridItem>

                  <GridItem className='gridItemDescription' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                    <Paper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                      <p className='hobbiesDescription'>
                        {intl.formatMessage({
                          defaultMessage: "Usually, I found myself playing video games, watching YouTube cartoons and reading non-fiction books for my professional growth. My last two favorite are: Code Complete of Steve McConell and Essentialism: The Disciplined Pursuit of Less of Greg McKeown.",
                          description: 'hobbies',
                          id: "hobbies",
                        })}
                      </p>
                    </Paper>
                  </GridItem>

              </GridContainer>
              </div>
            </div>
    )
}

export default AbouteMe
