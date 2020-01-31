
import { createStyles, Theme } from '@material-ui/core/styles';


const carouselOfProjectsStyle = (theme : Theme) => createStyles({

  navButton: {
    margin: "15px 10px 20px 10px",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "opacity 0.4s",
    "&:disabled": {
      opacity: 0.2,
    },
    /*
    "&:after": {
      content: "''",
      background: "#f1f1f1",
      display:"block",
      position: "absolute",
      paddingTop: "300%",
      paddingLeft: "350%",
      marginLeft: "-20px !important",
      marginTop: "-120%",
      opacity: 0,
      transition: "all 0.8s",
    },
    "&:active:after": {
      padding: 0,
      margin: 0,
      opacity: 1,
      transition: "0s",
    },
    /*"&:active": {
      "&:after": {
        padding: 0,
        margin: 0,
        opacity: 1,
        transition: "0s",
      }
    }*/
  },
  backButton: {
    backgroundColor: '#007bff',
    '&:hover': {
      backgroundColor: '#0069d9'
    },
    '&:active': {
      backgroundColor: '#0062cc'
    }
  },
  nextButton: {
    backgroundColor: theme.palette.primary.main,
  },

  muiButton: {
    borderRadius: "5px",
    color: "white",
    backgroundColor: theme.palette.secondary.dark,
  }

})

export default carouselOfProjectsStyle;