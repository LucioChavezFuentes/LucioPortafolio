
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import "./carouselOfPro.css";

// @material-ui/core components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// React Carusel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from "assets/jss/material-kit-react/components/carouselOfProjectsStyle";

const useStyles = makeStyles(styles);

interface Props {
  tabs: any;
  horizontal: any;
  color: any;
  alignCenter: any;
  direction: string;
}

function CarouselOfProjects({tabs, horizontal, color, alignCenter, direction} : Props) {

  const classes : any = useStyles();

  const arrayOfSlides = tabs.map((prop:any, index:any) => {
    const icon :any = {};
    if (prop.tabIcon !== undefined) {
      icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
    }
    const pillsClasses = classNames({
      [classes.pills]: true,
      [classes.horizontalPills]: horizontal !== undefined,
      [classes.pillsWithIcons]: prop.tabIcon !== undefined
    });
    return (
      <Slide index={index}>
        <Tab
        label={prop.tabButton}
        key={index}
        {...icon}
        classes={{
          root: pillsClasses,
          selected: classes[color],
          wrapper: classes.tabWrapper,
        }}
      />
      {prop.tabContent}
      </Slide>
    );
  })

    return (
      <CarouselProvider
        naturalSlideWidth={125}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          {arrayOfSlides}
        </Slider>

        <Fab

          classes={{root:classes.backButton,}}
          component={ButtonBack as any}
          >
            <ArrowBackIcon/>
        </Fab>
        
        <ButtonNext className={`${classes.navButton} ${classes.nextButton}`}>Next</ButtonNext>
      </CarouselProvider>
    )
  }

export default CarouselOfProjects;