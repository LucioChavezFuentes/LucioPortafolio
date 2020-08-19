import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles";

import projectOne from "assets/img/projects/Social-Conejito2.jpg"

import { createStyles, Theme } from '@material-ui/core/styles';

//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
import StyleProps from "types/StyleProps";

const profilePageStyle = (theme : Theme) => {

  const lightPrimaryColor = undefined //theme.palette.primary.light;

  return createStyles({
    container,
  
    subContainer: {
      paddingTop: "10px",
      backgroundColor: "#e3e3e3",
      "@media (min-width: 576px)": {
        maxWidth: "560px"
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px"
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px"
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px"
      }
    },
    profile: {
      textAlign: "center",
      "& img": {
        maxWidth: "160px",
        width: "100%",
        margin: "0 auto",
        transform: "translate3d(0, -50%, 0)"
      }
    },
    descriptionContainer: {
      minHeight: '350px',
      margin: "-30px auto 0 auto",
      [theme.breakpoints.down("xs")]: {
        minHeight: '567px',
      }
    },
    
    description: {
      margin: "1.071rem auto",
      width: '80%',
      padding: '1rem auto',
      color: "#999",
      textAlign: "center",
      //For all cellphones
      [theme.breakpoints.down("xs")]: {
        width: '100%',
      },
      //For Tablets or Ipads
      [theme.breakpoints.only("sm")]: {
        width: '100%',
      },
  
      '& .philosophyContainer': {
        position: 'relative',
        display: 'flex',
        top: '10px',
        backgroundColor: 'bisque',
  
        
      },
  
      '& .miniTitle': {
        textAlign: "center",
        fontSize: "1.1rem",
        borderBottom: (props: StyleProps) => `3px solid ${getDarkOrLightTheme(theme, 'primary', props)}`,
        margin: "20px auto -10px auto",
        width: "35%",
        color: (props: StyleProps) => getDarkOrLightTheme(theme, 'text', props),
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem",
          width: "85%",
        }
      },
      '& p': {
        fontSize: "0.9rem",
        margin: "0",
        //color: theme.palette.text.primary,
        lineHeight: '25px',
  
        [theme.breakpoints.down("xs")]: {
          fontSize: "0.87rem",
        }
      },
      '& .bold': {
        fontWeight: 'bold',
      },
  
      '& .gridContainerDescription' : {
        backgroundColor: theme.palette.secondary.light[500],
        borderRadius: "20px"
      },
  
      '& .gridItemDescription': {
        backgroundColor: lightPrimaryColor,
        borderRadius: "20px",
        display: 'flex',
        height: '100%',
        '& img': {
          maxWidth:'90%',
          maxHeight:'90%'
        }
      },
  
      '& .paperDescription': {
        padding:"10px",
        margin: '10px',
        borderRadius: '20px',
        [theme.breakpoints.down("sm")]: {
          padding:"5px",
          margin: '0'
        },

      },

      '& .paperDescriptionText': {
        '& div': {
          height: '100%', 
          display: 'flex'
        },

        '& p': {
          alignSelf: 'center',
          [theme.breakpoints.down("sm")]: {
            padding:"5px"
          }
        }
      },
    },
    occupation: {
      color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps), //theme.palette.text.primary,
      fontSize: '19px',
      margin: '10px',
    },
    ...imagesStyle,

    main: {
      background: (props) => getDarkOrLightTheme(theme, 'background', props as StyleProps),
      position: "relative",
      zIndex: 3,
    },
    mainRaised: {
      // Edit here how close you want the page to the header
      margin: "-290px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },

    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
      color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
      fontSize: "30px",
    },
    socials: {
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px",
      color: "#999"
    },
    navWrapper: {
      margin: "10px auto 0px auto",
      textAlign: "center",
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        margin: "0 auto"
      }
    },
  
    projectContainer: {
      backgroundImage: `url(${projectOne})`,
      height: "520px",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down("xs")]: {
        height: "220px",
      }
    },
  
    latestProjectsTitleContainer: {
      textAlign: "center",
      // borderTop: `3px solid ${theme.palette.secondary.light}`,
      margin: "0 auto",
      width: "50%",
      //backgroundColor: lightPrimaryColor,
      borderRadius: "20px",
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
  
      "& .paperLatestProjects": {
        width: "100%",
        margin: "10px",
        padding: "10px",
      },
      "& .latestProjectsTitle": {
        fontWeight: "bold",
      },
    },
  
    startIcon: {
      marginLeft: '0px'
    },
  
    projectIframe: {
      width: '100%',
      height:"500px",
      border: (props) => `solid 5px ${getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps)}`,
      borderRadius: '10px',
    },
  
    projectDescription: {
      border: (props) => `solid 1px ${getDarkOrLightTheme(theme, 'primary', props as StyleProps)}`,
      borderRadius: '10px',
      width: '90%',
      margin: '0 auto',
      padding: '10px 5px',
      textAlign: 'center',
  
      '& p':{
        margin: 'auto',
        //color: textPrimary,
      }
    },
  
    projectsButtonsContainer: {
      display: 'inline-block',
  
      '& .gitHubButton': {
        margin: '10px'
      },
  
      '& .appPageButton': {
        margin: '10px',
  
        '&:hover': {
          color: 'white'
        }
      },
  
      '& .startIcon': {
        marginLeft: '0px'
      },
    },
  
    
  
    philosophy: {
      position: 'relative',
      top: '10px',
      //backgroundColor: lightPrimaryColor,
      display: 'flex',
      borderRadius: '20px',
  
      '& .paperPhilosophy': {
        padding: "25px",
        textAlign: "center",
        borderRadius: '20px',
        margin: "15px",
        [theme.breakpoints.down("sm")]: {
          padding: "15px",
          margin: "0",
        },
        [theme.breakpoints.down("xs")]: {
          margin: "0",
        }
      }
    },
  
    lineSeparator: {
      margin: "auto",
      width: '75%',
    },
  
    paperTitleContainer: {
      textAlign: "center",
      // borderTop: `3px solid ${theme.palette.secondary.light}`,
      margin: "0 auto",
      width: "63%",
      //backgroundColor: lightPrimaryColor,
      borderRadius: "20px",
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
  
      "& .paper": {
        width: "100%",
        margin: "10px",
        padding: "10px",
      },
      "& .title": {
        fontWeight: "bold",
      }
    },
  
   
  
    aboutMeContainer: {
      textAlign: 'center',
  
      '& .aboutMe': {
        width: '80%',
        margin: '0 auto 3rem auto',
        [theme.breakpoints.down("sm")]: {
          width: '100%'
        }
      },
  
      '& .miniTitle': {
        border: (props) => `solid 1px ${getDarkOrLightTheme(theme, 'primary', props as StyleProps)}`,
        borderRadius: '10px',
        width: '20%',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
          width: '80%',
        },
  
        "& .title": {
          fontWeight: "bold",
        },
      },
  
      '& .paperDescription': {
          padding:"10px",
          borderRadius: '20px',
      },

      '& p': {
        lineHeight: '25px',
        margin: '0',
      },
  
      '& li': {
        fontSize: '0.9rem',
      },
  
      '& .gridItemDescription': {
        //backgroundColor: lightPrimaryColor,
        borderRadius: "20px",
      },
    },
  });

} 

export default profilePageStyle;
