import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';
//On Scroll Animations
import "animate.css/animate.min.css";

// React Carusel

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CarouselOfProjects from "components/CarouselOfProjects/CarouselOfProjects";

// useWindowSize
import useWindowSize from 'helper/useWindowSize'

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";

const useStyles = makeStyles(styles);

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const {width, height} = useWindowSize();
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = index => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

const arrayOfButtons = tabs.map((prop, key) => {
  var icon = {};
  if (prop.tabIcon !== undefined) {
    icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
  }
  const pillsClasses = classNames({
    [classes.pills]: true,
    [classes.horizontalPills]: horizontal !== undefined,
    [classes.pillsWithIcons]: prop.tabIcon !== undefined
  });
  return (
    <Tab
      label={prop.tabButton}
      key={key}
      {...icon}
      classes={{
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper,
      }}
    />
  );
})

  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      variant="fullWidth"
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {arrayOfButtons}
    </Tabs>
  );
  
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
    return (
      <div className={classes.tabContent} key={key}>
        {prop.tabContent}
      </div>
    )}
    )}
      </SwipeableViews>
    </div>
  );
  
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (width <= 600 ? (

    <CarouselOfProjects tabs={tabs}>
    {/*<CarouselProvider
        naturalSlideWidth={125}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>{arrayOfButtons[0]} <iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe></Slide>
          <Slide index={1}><iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe></Slide>
          <Slide index={2}><iframe style={{width: "90%", height:"500px"}} src="https://thesocialmono.firebaseapp.com/"></iframe></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>*/}
    </ CarouselOfProjects >
    
  ) : (
    <div>
      {tabButtons}
      <ScrollAnimation animateIn="fadeIn">{tabContent}</ScrollAnimation>
      
    </div>
  ));
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};
