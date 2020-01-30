
import { createStyles, Theme } from '@material-ui/core/styles';


const carouselOfProjectsStyle = (theme : Theme) => createStyles({

  navButton: {
    border: "none",
    margin: "15px",
    color:" white",
    padding: "15px 32px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "opacity 0.4s",
    transitionDuration: "0.4s",
    overflow: "hidden",
    "&:disabled": {
      opacity: 0.2,
    },
    "&:after": {
      content: "",
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
    }
  },
  backButton: {
    backgroundColor: theme.palette.secondary.dark,
  },
  nextButton: {
    backgroundColor: theme.palette.primary.main
  }

})

export default carouselOfProjectsStyle;