import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// Material IU imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

//On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills";
import Parallax from "components/Parallax/Parallax.js";
import CircularDeterminate from "components/CircularDeterminate/circularDeterminate";
import FrontEndIcons from "components/TechnologyIcons/frontEndIcons";
import BackEndIcons from "components/TechnologyIcons/backEndIcons";
import TechTestingIcons from "components/TechnologyIcons/techTestingIcons";

// images
import profile from "assets/img/faces/aguantaa.png";

// styles
import styles from "assets/jss/material-kit-react/views/profilePage";

//Grid Variables
const none = 0;
const low = 2;
const medium = 4;
const large = 6;

const quarterWidth = 3;
const thirdWidth = 4;
const halfWidth = 6;
const fullWidth = 12;

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div  className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Lucio Chávez</h3>
                    <h6>Web Developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>


            <div className={classes.descriptionContainer}>
            <div  className={classes.description}>
            <GridContainer justify="center" spacing={large}>

              <GridContainer item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={low}>
                <GridItem >
                  <h6 key="1" className='miniTitle'>Front End</h6>
                </GridItem>
              </GridContainer>
            

            <GridContainer justify='center' alignItems="center" item spacing={medium}>
              
              <GridItem className='gridItemDescription'  xs={fullWidth} sm={halfWidth} md={halfWidth}>
              <Paper className='paperDescription'>
                <ScrollAnimation animateIn="fadeIn">
                
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
              </GridItem>

              <GridItem justify='center' className='gridItemDescription'  xs={fullWidth} sm={halfWidth} md={halfWidth}>
                <Paper className='paperDescription'>
                  <FrontEndIcons />
                </Paper>
              </GridItem>

              </GridContainer>

              <GridContainer id="Test-Title" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={low}>
                <GridItem>
                  <h6 key="3"  className='miniTitle'>Testing</h6>
                </GridItem>
              </GridContainer>

              <GridContainer id="Test-Description" justify='center' alignItems="center" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={medium}>
                <GridItem className='gridItemDescription' xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <ScrollAnimation animateIn="fadeIn">
                    <Paper className='paperDescription'>
                      <p key="4" >
                        I also write unit and/or integration tests with:
                        <span className='bold'> Jest </span> 
                          and
                        <span className='bold'> React Testing Library. </span>
                      </p>
                    </Paper>
                  </ScrollAnimation>
                </GridItem>

                <GridItem className='gridItemDescription' xs={fullWidth} sm={halfWidth} md={halfWidth}>
                  <Paper className='paperDescription'>
                    <TechTestingIcons />
                  </Paper>
                </GridItem>
              </GridContainer>
               
              <GridContainer id="Back-End-Model-Title" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={low}>
                <GridItem>
                  <h6 key="5" className='miniTitle'>Back End and Model</h6>
                </GridItem>

              </GridContainer>

              <GridContainer id="Back-End-Model-Description" 
                justify='center' alignItems="center" item xs={fullWidth} sm={fullWidth} md={fullWidth} spacing={medium}>
                <GridItem className='gridItemDescription' xs={fullWidth} sm={halfWidth} md={halfWidth} >
                  <Paper className='paperDescription'>
                    <ScrollAnimation animateIn="fadeIn">
                      <p key="6" >
                        And I have some experience in:
                        <span className='bold'> SQL, </span>
                        <span className='bold'> Node.js</span>,
                        <span className='bold'> Firebase </span>
                        for back-end and model solutions.
                      </p>
                    </ScrollAnimation>
                  </Paper>
                </GridItem>

                <GridItem className='gridItemDescription' xs={fullWidth} sm={halfWidth} md={halfWidth}>
                  <Paper className='paperDescription'>
                    <BackEndIcons />
                  </Paper>
                </GridItem>
              </GridContainer>
    
              </GridContainer>
            </div>
          </div>

          <div className={classes.philosophy}>
            <ScrollAnimation animateIn="fadeIn">
              <Paper elevation={1} className="paperPhilosophy">
                I believe in always keep learning new things, code with the best pratices known and looking forward for those yet to discovered.
              </Paper>
            </ScrollAnimation>
          </div>

          <div className={classes.lineSeparator}>
            <LinearProgress variant="determinate" value={100} />
          </div>

            <div className={classes.latestProjectsTitleContainer}>
              <Paper elevation={5} className="paperLatestProjects">
                <Typography color='textPrimary' className="latestProjectsTitle">Latest Projects</Typography>
              </Paper>
            </div>
            

            <GridContainer  justify="center">
              <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth} className={classes.navWrapper}>
              
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "The Social Conejito",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>

                          <iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Adventure Code",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                          <iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Ravenous",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={fullWidth} sm={fullWidth} md={fullWidth}>
                          <iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
            
        </div>
      </div>
      
      <Footer/>
      
    </div>
  );
}
