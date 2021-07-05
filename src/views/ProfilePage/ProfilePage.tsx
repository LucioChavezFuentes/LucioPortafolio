import React, {useState} from "react";
//Animations
import {motion} from 'framer-motion'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';
// Custom Icons
import Conejito from "assets/img/customIcons/Conejito";
import WorkNFlow from "assets/img/customIcons/WorkNFlow";
import BBBic from "assets/img/customIcons/BBBic";

//Redux
import { connect } from 'react-redux';

// Material IU imports
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

//On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Scrollable Anchor
import {Element} from 'react-scroll'

// core components

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import NavPills from "components/NavPills/NavPills";

import FrontEndIcons from "components/TechnologyIcons/frontEndIcons";
import BackEndIcons from "components/TechnologyIcons/backEndIcons";
import TechTestingIcons from "components/TechnologyIcons/techTestingIcons";
import useWindowSize from "helper/useWindowSize";

import AboutMe from './AbouteMe';

import CustomPaper from 'components/CustomPaper/CustomPaper';

import {FormattedMessage, injectIntl} from 'react-intl';

//Helper
import IntlMessage from 'helper/IntlMessages';

// styles
import styles from "assets/jss/material-kit-react/views/profilePage";

//types
import { RouteComponentProps } from "react-router-dom";
import StyleProps from 'types/StyleProps';

interface Props extends RouteComponentProps<any>, React.Props<any> {
  isThemeDark: boolean;
}

/*interface Props {
  isThemeDark: boolean;
}*/

const useStyles  = makeStyles(styles);

function ProfilePage(props: any) {
  const { isThemeDark, intl } = props;
  const classes : any = useStyles({isThemeDark} as StyleProps);
  const {isMobile} = useWindowSize();
  const [activeProject, setActiveProject] = useState(0);
  /*const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );*/

  //Grid Variables
  const none = 0;
  const veryLow = 1;
  //const low = 2;
  const medium = 4;
  const halfWidth = 6;
  const fullWidth = 12;

  let currentGridSpacing;
  let currentPixelsSpacing;

  //Projects Padding
  function projectsPaddingTop(gridVariable) {
    currentPixelsSpacing = (gridVariable*gridVariable)
  }

  function setGridSpacing(gridVariable) {
    projectsPaddingTop(gridVariable)
    currentGridSpacing = gridVariable
  }

  //Paper Elevation Variables
  const MAX_ELEVATION = 24;
  const MEDIUM_ELEVATION = 12;
  //const LOW_ELEVATION = 6;
  
  const projectsSectionRef = 'projectsSection';

  //const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  const handleChangeActive = (active) => {
    /*if(myRef !== null) {
      window.scrollTo(0, myRef.current.offsetTop )
    }*/
    
    setActiveProject(active)
  }

  //use this function to set the Grids using the variable 'currentGridSpacing '
  setGridSpacing(medium)

//const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <div  className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth}>
                <div className={classes.profile}>
                {/* 
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div> 
                */}
                  <div className={classes.name}>
                    <h3 className={classes.title}>Lucio Chávez</h3>
                    <h6 className={classes.occupation}>
                    {intl.formatMessage({
                        defaultMessage: 'Web Developer',
                        description: 'occupation',
                        
                      })}
                    </h6>
                    { /*fab and fa-twitter appear to be global classNames*/ }
                    {/*<Button justIcon link target="_blank" href={"https://twitter.com/LucioBbrtiChvez"} className={classes.margin5}>
                      <GitHubIcon />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>*/}
                  </div>
                </div>
              </GridItem>
            </GridContainer>


            <div className={classes.descriptionContainer}>


            <div  className={classes.description}>
            
                {/*If you change the spacing in the parent grid dont forget to change the spacing in projectsPaddingTop */}
            <GridContainer id='Skills-Description' justify="center" spacing={currentGridSpacing}>

              <GridContainer item justify="center" xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={veryLow} >
                <GridItem >
                  <div className={classes.philosophy}>
                  <CustomPaper elevation={MAX_ELEVATION} className="paperPhilosophy paperDescription" >
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                      
                      <p>
                      {intl.formatMessage({
                        defaultMessage: 'I am a web developer specialized in front end, with knowledge in back end, who is constantly learning the best practices of software development.',
                        description: 'occupation-description',
                        id: "occupation-description",
                      })}
                    </p>
                    
                    </ScrollAnimation>
                    </CustomPaper>
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={none}>
                <GridItem >
                  <h6 className='miniTitle'>Front End</h6>
                </GridItem>
              </GridContainer>
            

            <GridContainer 
              id="Front-End-Description"
              justify='center'
              alignItems="stretch"
              item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}>
            
              <GridItem   xs={fullWidth} sm={halfWidth} md={halfWidth}>
              <div className='gridItemDescription'>
              <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription paperDescriptionText'>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <p key="2">{intl.formatMessage({
                        defaultMessage: 'The scope of my skills cover front-end technologies such as:',
                        description: 'skills',
                        id: "skills",
                      })}
                    <span  className='bold'> HTML, </span>
                    <span className='bold'> CSS/SCSS, </span>
                    <span  className='bold'> Flexbox, </span>
                    <span  className='bold'> CSS Grids, </span>
                    <span  className='bold'> Material IU, </span>
                    <span  className='bold'> TypeScript/JavaScript, </span>
                    <span  className='bold'> React </span> 
                    {intl.formatMessage({
                        defaultMessage: 'and',
                        description: 'word-and',
                        id: "word-and",
                      })}
                    <span  className='bold'> Redux.</span>
                  </p>
                </ScrollAnimation>
              </CustomPaper>
              </div>
              </GridItem>
              

              <GridItem xs={fullWidth} sm={halfWidth} md={halfWidth}>
              <div className='gridItemDescription'>
                <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription paperIcons'>
                  <FrontEndIcons />
                </CustomPaper>
              </div>
              </GridItem>

              </GridContainer>

              <GridContainer id="Test-Title" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={none}>
                <GridItem>
                  <h6 key="3"  className='miniTitle'>Testing</h6>
                </GridItem>
              </GridContainer>

              <GridContainer 
                id="Test-Description" 
                justify='center' 
                alignItems="stretch"
                item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}
              >

                <GridItem  xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <div className='gridItemDescription'>
                  <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription paperDescriptionText'>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
                      <p key="4">
                        {intl.formatMessage({
                          defaultMessage: 'I also write unit and/or integration tests with:',
                          description: 'testing-skills-description',
                          id: "testing-skills-description",
                        })}
                        
                        <span className='bold'> Jest </span> 
                        {intl.formatMessage({
                          defaultMessage: 'and',
                          description: 'word-and',
                          id: "word-and",
                        })}
                        <span className='bold'> React Testing Library. </span>
                      </p>
                    </ScrollAnimation>
                  </CustomPaper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={halfWidth} md={halfWidth}>
                  <div className='gridItemDescription'>
                    <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                      <TechTestingIcons />
                    </CustomPaper>
                  </div>
                </GridItem>
                
              </GridContainer>
               
              <GridContainer id="Back-End-Model-Title" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={none}>
                <GridItem>
                  <h6 key="5" className='miniTitle'> 
                    <IntlMessage 
                      defaultMessage='Back End and Model' 
                      description= 'back-end-model-title'
                      id= "back-end-model-title" />
                  </h6>
                </GridItem>
              </GridContainer>

              <GridContainer 
                id="Back-End-Model-Description" 
                justify='center' 
                alignItems="stretch" 
                item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}
              >
                <GridItem  xs={fullWidth} sm={halfWidth} md={halfWidth} >
                <div className='gridItemDescription'>
                  <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription paperDescriptionText'>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <p key="6" >
                        {intl.formatMessage({
                          defaultMessage: 'And I have some experience in:',
                          description: 'back-end-skills-description-partOne',
                          id: "back-end-skills-description-partOne",
                        })}
                        
                        <span className='bold'> SQL, </span>
                        <span className='bold'> Node.js</span>,
                        <span className='bold'> Firebase </span>
                        {intl.formatMessage({
                          defaultMessage: 'and',
                          description: 'word-and',
                          id: "word-and",
                        })}
                        <span className='bold'> {`AWS's ServerLess Application Model` }  </span>
                        {intl.formatMessage({
                          defaultMessage: 'for back-end and model solutions.',
                          description: 'back-end-skills-description-partTwo',
                          id: "back-end-skills-description-partTwo",
                        })}
                        
                      </p>
                    </ScrollAnimation>
                  </CustomPaper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <div className='gridItemDescription'>
                  <CustomPaper elevation={MEDIUM_ELEVATION} className='paperDescription'>
                    <BackEndIcons />
                  </CustomPaper>
                  </div>
                </GridItem>
              </GridContainer>

              {/*<GridContainer id='lineSeparator' item justify='center' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                <GridItem xs={fullWidth} sm={fullWidth} md={threeQuarterWidth}>
                  <LinearProgress variant="determinate" value={100} />
                </GridItem>
              </GridContainer>*/}
    
              </GridContainer>
            </div>
          </div>

          <div className={classes.lineSeparator} style={{paddingTop: currentPixelsSpacing, paddingBottom: currentPixelsSpacing}}>
            <LinearProgress variant="determinate" value={100}  />
          </div>

          <div className={classes.projectsContainer} style={{paddingTop: currentPixelsSpacing, paddingBottom: currentPixelsSpacing}}>

            <Element name={projectsSectionRef}>
              <div className={classes.latestProjectsTitleContainer} >
                <CustomPaper elevation={MAX_ELEVATION} className="paperLatestProjects">
                  <Typography color='textPrimary' className="latestProjectsTitle">
                    {intl.formatMessage({
                      defaultMessage: 'Latest Projects',
                      description: 'latest-projects-title',
                      id: "latest-projects-title",
                    })}
                  </Typography>
                </CustomPaper>
              </div>
            </Element>

            <GridContainer justify="center">
              <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} className={classes.navWrapper}>
              
                <NavPills
                  alignCenter
                  color="primary"
                  isThemeDark= {isThemeDark}
                  active={activeProject}
                  handleChangeActive={handleChangeActive}
                  tabs={[

                    {
                      tabButton: "B&B Bicentenario",
                      tabIcon: BBBic,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                            <iframe title='BBBic' className={classes.projectIframe} src="https://elastic-montalcini-1b05f7.netlify.app/"></iframe>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                            <div className={classes.projectDescription}>
                            <FormattedMessage
                              defaultMessage="B&B Bicentenario is a real estate website. This project is in its final stage of development and also includes its own CMS."
                              description='bbbic-description'
                              />
                            </div>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>

                            <div className={classes.projectsButtonsContainer}>

                              <Button
                                href="https://elastic-montalcini-1b05f7.netlify.app/" 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='appPageButton' 
                                color="primary" 
                                variant='contained' 
                                startIcon={<BBBic />}
                              >
                                {intl.formatMessage({
                                  defaultMessage: "App's Page",
                                  description: 'app-page-button',
                                  id: "app-page-button",
                                })}
                              </Button>
                            </div>

                          </GridItem>
                        </GridContainer>
                        )
                      },

                    {
                      tabButton: 'Work & Flow',
                      tabIcon: WorkNFlow,
                      tabContent: (
                        <GridContainer justify="center" >
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                          <iframe title='Adventure-Code' className={classes.projectIframe} src="https://worknflow.com"></iframe>
                          </GridItem>

                          <GridItem  xs={fullWidth} sm={fullWidth} md={fullWidth} >
                            <div className={classes.projectDescription}>
                              <p>
                                <FormattedMessage 
                                  defaultMessage="Work & Flow is a personal task register which tracks how much time the user spends working, resting, and which tasks complete in workload intervals of 25 minutes."
                                  description='work-n-flow-description' />
                              </p>
                            </div>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} >

                            <div className={classes.projectsButtonsContainer}>

                              <Button
                                href="https://worknflow.com"
                                target='_blank'
                                rel="noopener noreferrer"
                                color='primary'
                                variant='contained'
                                className='appPageButton' startIcon={<WorkNFlow />}>
                                {intl.formatMessage({
                                  defaultMessage: "App's Page",
                                  description: 'app-page-button',
                                  id: "app-page-button",
                                })}
                              </Button>
                            </div>

                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "The Social Conejito",
                      tabIcon: Conejito,
                      tabContent: (
                        <GridContainer justify="center" >

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                            <iframe title='The-Social-Conejito' className={classes.projectIframe} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} >
                            <div className={classes.projectDescription}>
                              <p>
                                {intl.formatMessage({
                                  defaultMessage: "The Social Conejito is a social network composed of short messages named 'Squeals or Screams' for user expression where everyone can see, like and comment.",
                                  description: 'the-social-conejito-description',
                                  id: "the-social-conejito-description",
                                })}
                                
                              </p>
                            </div>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} >

                            <div className={classes.projectsButtonsContainer}>
                              <Button 
                                href='https://github.com/LucioChavezFuentes/TheSocialConejitoComplete' 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='gitHubButton'
                                classes={{startIcon: 'startIcon'}}
                                color='github' 
                                startIcon={<GitHubIcon />}
                              >
                              {isMobile ? 
                                intl.formatMessage({
                                  defaultMessage: 'Code',
                                  description: 'code-word',
                                  id: "code-word",
                                }) : 
                                intl.formatMessage({
                                  defaultMessage: 'Source Code',
                                  description: 'code-button',
                                  id: "code-button",
                                })}
                              </Button>
                            
                              <Button
                                href="https://thesocialmono.firebaseapp.com"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='appPageButton' 
                                variant='contained'
                                color="primary"  
                                startIcon={<Conejito />}
                              >
                                {intl.formatMessage({
                                  defaultMessage: "App's Page",
                                  description: 'app-page-button',
                                  id: "app-page-button",
                                })}
                                
                              </Button>
                            </div>
                            
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    
                    
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>

            <div className={classes.lineSeparator} style={{paddingTop: currentPixelsSpacing, paddingBottom: currentPixelsSpacing}}>
              <LinearProgress color='primary' variant="determinate" value={100} />
            </div>

            <AboutMe 
              classes={classes} 
              isMobile={isMobile} 
              gridConst={{currentGridSpacing, currentPixelsSpacing}} 
              elevationConst={{MAX_ELEVATION,MEDIUM_ELEVATION}} 
              fullWidth={fullWidth}
              intl={intl}
            />

            
          </div>
        </motion.div>
      </div>
      
      <Footer/>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(injectIntl(ProfilePage));