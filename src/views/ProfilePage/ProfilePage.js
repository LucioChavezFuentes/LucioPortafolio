import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';
// Custom Icons
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
// Material IU imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

//On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';

// Scrollable Anchor
import {Element} from 'react-scroll'

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills";
import Parallax from "components/Parallax/Parallax.js";
import FrontEndIcons from "components/TechnologyIcons/frontEndIcons";
import BackEndIcons from "components/TechnologyIcons/backEndIcons";
import TechTestingIcons from "components/TechnologyIcons/techTestingIcons";
import useWindowSize from "helper/useWindowSize";

// styles
import styles from "assets/jss/material-kit-react/views/profilePage";



const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const {isMobile} = useWindowSize();
  const [activeProject, setActiveProject] = useState(0);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  //Grid Variables
  const none = 0;
  const veryLow = 1;
  const low = 2;
  const medium = 4;
  const large = 6;

  const halfWidth = 6;
  const threeQuarterWidth = 9;
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

  //const myRef = useRef();
  
  const projectsSectionRef = 'projectsSection';

  const handleHeaderClick = (active) => {
    //window.scrollTo(0, myRef.current.offsetTop)
    setActiveProject(active)
  }

  //use this function to set the Grids using the variable 'currentGridSpacing '
  setGridSpacing(medium)

const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        onClickProject={handleHeaderClick} 
        projectsSectionRef={projectsSectionRef}
        absolute
        {...rest}
      />
      <Parallax small />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
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
                    <h6>Web Developer</h6>
                    { /*fab and fa-twitter appear to be global classNames*/ }
                    <Button justIcon link target="_blank" href={"https://twitter.com/LucioBbrtiChvez"} className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
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
                  <Paper elevation={1} className="paperPhilosophy paperDescription" >
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <p>
                        I am a web developer specialized in front end, 
                        with knowledge in back end, 
                        who is constantly learning the best practices of software development.
                      </p>   
                    </ScrollAnimation>
                    </Paper>
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
              alignItems="center" 
              item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}>
            
              <GridItem   xs={fullWidth} sm={fullWidth} md={halfWidth}>
              <div className='gridItemDescription'>
              <Paper className='paperDescription'>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                
                  <p key="2" >The scope of my skills cover front-end technologies such as:
                    <span  className='bold'> HTML, </span>
                    <span className='bold'> CSS/SCSS, </span>
                    <span  className='bold'> Flexbox, </span>
                    <span  className='bold'> CSS Grids, </span>
                    <span  className='bold'> Material IU, </span>
                    <span  className='bold'> TypeScript/JavaScript, </span>
                    <span  className='bold'> React </span> 
                      and
                    <span  className='bold'> Redux.</span>
                  </p>
                </ScrollAnimation>
              </Paper>
              </div>
              </GridItem>
              

              <GridItem justify='center' xs={fullWidth} sm={fullWidth} md={halfWidth}>
              <div className='gridItemDescription'>
                <Paper className='paperDescription'>
                  <FrontEndIcons />
                </Paper>
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
                alignItems="center" 
                item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}
              >

                <GridItem  xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <div className='gridItemDescription'>
                  <Paper className='paperDescription'>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <p key="4" >
                        I also write unit and/or integration tests with:
                        <span className='bold'> Jest </span> 
                          and
                        <span className='bold'> React Testing Library. </span>
                      </p>
                    </ScrollAnimation>
                  </Paper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={halfWidth} md={halfWidth}>
                  <div className='gridItemDescription'>
                    <Paper className='paperDescription'>
                      <TechTestingIcons />
                    </Paper>
                  </div>
                </GridItem>
                
              </GridContainer>
               
              <GridContainer id="Back-End-Model-Title" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={none}>
                <GridItem>
                  <h6 key="5" className='miniTitle'>Back End and Model</h6>
                </GridItem>
              </GridContainer>

              <GridContainer 
                id="Back-End-Model-Description" 
                justify='center' 
                alignItems="center" 
                item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={isMobile ? veryLow : medium}
              >
                <GridItem  xs={fullWidth} sm={halfWidth} md={halfWidth} >
                <div className='gridItemDescription'>
                  <Paper className='paperDescription'>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                      <p key="6" >
                        And I have some experience in:
                        <span className='bold'> SQL, </span>
                        <span className='bold'> Node.js</span>,
                        <span className='bold'> Firebase </span>
                        for back-end and model solutions.
                      </p>
                    </ScrollAnimation>
                  </Paper>
                  </div>
                </GridItem>

                <GridItem xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <div className='gridItemDescription'>
                  <Paper className='paperDescription'>
                    <BackEndIcons />
                  </Paper>
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer id='lineSeparator' item justify='center' xs={fullWidth} sm={fullWidth} md={fullWidth}>
                <GridItem xs={fullWidth} sm={fullWidth} md={threeQuarterWidth}>
                  <LinearProgress variant="determinate" value={100} />
                </GridItem>
              </GridContainer>
    
              </GridContainer>
            </div>
          </div>

            <Element name={projectsSectionRef} style={{paddingTop: currentPixelsSpacing}}>
              <div className={classes.latestProjectsTitleContainer}>
                <Paper elevation={0} className="paperLatestProjects">
                  <Typography color='textPrimary' className="latestProjectsTitle">Latest Projects</Typography>
                </Paper>
              </div>

            <GridContainer justify="center">
              <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} className={classes.navWrapper}>
              
                <NavPills
                  alignCenter
                  color="primary"
                  active={activeProject}
                  tabs={[
                    {
                      tabButton: "The Social Conejito",
                      tabIcon: Conejito,
                      tabContent: (
                        <GridContainer justify="center">

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                            <iframe title='The-Social-Conejito' style={{width: '100%', height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>

                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} >

                            <div className={classes.projectsButtonsContainer} style={{display:'inline-block'}}>
                              <Button color='github' style={{margin: '10px'}} startIcon={<GitHubIcon />}>
                                  Source Code
                                </Button>
                            
                              <Button color="primary" style={{margin: '10px'}} startIcon={<Conejito color="action" />}>
                                App's Page
                              </Button>
                            </div>
                            
                          </GridItem>
                          
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Adventure Code",
                      tabIcon: AdventureCode,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                          <iframe title='Adventure-Code' style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Ravenous",
                      tabIcon: Ravenous,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                            <iframe title='Ravenous' style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </Element>
            </div>
            
        </div>
      </div>
      
      <Footer/>
      
    </div>
  );
}
