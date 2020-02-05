import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

import projectOne from "assets/img/projects/Social-Conejito2.jpg"

import { createStyles, Theme } from '@material-ui/core/styles';

const profilePageStyle = (theme : Theme) => createStyles({
  container,
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
    height: '310px',
    [theme.breakpoints.down("xs")]: {
      height: '527px'
    }
  },
  // @ts-ignore
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    padding: '1rem 0',
    color: "#999",
    textAlign: "left !important",
    '& .miniTitle': {
      textAlign: "center"
    },
    '& .bold': {
      fontWeight: 'bold'
    }

  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  // @ts-ignore
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-90px 30px 0px",
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
    margin: "20px auto 50px auto",
    textAlign: "center",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      margin: "100px auto 100px auto"
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
  }
});

export default profilePageStyle;
