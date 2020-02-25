import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

import projectOne from "assets/img/projects/Social-Conejito2.jpg"

import { createStyles, Theme } from '@material-ui/core/styles';

const profilePageStyle = (theme : Theme) => createStyles({
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
  // @ts-ignore
  description: {
    margin: "1.071rem auto",
    width: '80%',
    padding: '1rem auto',
    color: "#999",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: '100%',
    },

    '& .philosophyContainer': {
      position: 'relative',
      display: 'flex',
      top: '10px',
      backgroundColor: 'bisque',

      '& .paperPhilosophy': {
        padding: "15px",
        textAlign: "center",
        margin: "5% 5%"
    }
    },

    '& .miniTitle': {
      textAlign: "center",
      fontSize: "0.9rem",
      borderBottom: `3px solid ${theme.palette.primary.main}`,
      margin: "20px auto -10px auto",
      width: "35%",
      color: theme.palette.text.primary,
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
        width: "85%",
      }
    },
    '& p': {
      fontSize: "0.9rem",
      margin: "0",
      color: theme.palette.text.primary,

      [theme.breakpoints.down("xs")]: {
        fontSize: "0.87rem",
      }
    },
    '& .bold': {
      fontWeight: 'bold',
    },

    '& .gridContainerDescription' : {
      backgroundColor: 'bisque',
      borderRadius: "20px"
    },

    '& .gridItemDescription': {
      backgroundColor: 'bisque',
      borderRadius: "20px",
      display: 'flex',
      '& img': {
        maxWidth:'90%',
        maxHeight:'90%'
      }
    },

    '& .paperDescription': {
      padding:"10px",
      margin: '15px',
      [theme.breakpoints.down("sm")]: {
        padding:"5px",
        margin: '10px'
      }
    },

  },
  name: {
  },
  ...imagesStyle,
  // @ts-ignore
  main: {
    background: "linen",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    // Edit here how close you want the page to the header
    margin: "-290px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  // @ts-ignore
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
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
      margin: "20px auto 100px auto"
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
    backgroundColor: 'bisque',
    borderRadius: "20px",
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    "& .paperLatestProjects": {
      width: "100%",
      margin: "5%",
      padding: "10px",
    },
    "& .latestProjectsTitle": {
      fontWeight: "bold",
    }
  },

  projectsButtonsContainer: {
    display: 'inline-block',
  },

  philosophy: {
    position: 'relative',
    top: '10px',
    backgroundColor: 'bisque',
    display: 'flex',
    borderRadius: '20px',

    '& .paperPhilosophy': {
      padding: "15px",
      textAlign: "center",
      margin: "2.5% 2.5%",
      [theme.breakpoints.down("xs")]: {
        margin: "5% 5%",
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
    width: "50%",
    backgroundColor: 'bisque',
    borderRadius: "20px",
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    "& .paper": {
      width: "100%",
      margin: "5%",
      padding: "10px",
    },
    "& .title": {
      fontWeight: "bold",
    }
  },

  philosophyTitle: {
    textAlign: 'center',
    border: `solid 1px ${theme.palette.primary.main}`,
    borderRadius: '10px',
    width: '20%',
    margin: '0 auto',
    "& .title": {
      fontWeight: "bold",
    }
  }
});

export default profilePageStyle;
