import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// On Scroll Animation
import ScrollAnimation from 'react-animate-on-scroll';
// On Scroll Animations
import "animate.css/animate.min.css";

// useWindowSize
import useWindowSize from 'helper/useWindowSize'

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";

const useStyles : any = makeStyles(styles);

export default function NavPills(props : any) {
  const [active, setActive] = React.useState(props.active);
  const {width} = useWindowSize();
  const theme = useTheme();

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  const handleChange = (event: any, active: number) => {
    setActive(active);
  };
  const handleChangeIndex = (index: any) => {
    setActive(index);
  };
  const classes = useStyles(active);
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  function TabsBorder(key: number) {
    return {
      borderTopLeftRadius: key === 0 ? "20px" : undefined,
      borderBottomLeftRadius: key === 0 ? "20px" : undefined,
      borderTopRightRadius: key === (tabs.length-1) ? "20px" : undefined,
      borderBottomRightRadius: key === (tabs.length-1) ? "20px" : undefined,
      borderTop: active === key ? `1px solid ${theme.palette.primary.dark}` : `1px solid ${theme.palette.text.secondary}`,
      borderRight: key === (tabs.length-1) ? `1px solid ${theme.palette.text.secondary}` : undefined,
      borderBottom: active === key ? `1px solid ${theme.palette.primary.dark}` : `5px solid ${theme.palette.text.secondary}` ,
      borderLeft: active === key ? `1px solid ${theme.palette.primary.dark}` : `1px solid ${theme.palette.text.secondary}`,

    }
  }

const arrayOfButtons = tabs.map((prop: any, key: number) => {
  const icon : {icon?: any} = {};
  if (prop.tabIcon !== undefined) {
    icon["icon"] = <prop.tabIcon className={ active === key ? classes.tabIconSelected : classes.tabIcon} />;
  }
  const pillsClasses = classNames({
    [classes.pills]: true,
    [classes.horizontalPills]: horizontal !== undefined,
    [classes.pillsWithIcons]: prop.tabIcon !== undefined
  });
  return (
    <Tab
      style={width <= 600 ? TabsBorder(key) : undefined}
      aria-label={prop.tabButton}
      label={width <= 600 ? undefined : prop.tabButton}
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
        {tabs.map((prop: any, key: number) => {
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
  )  : (
    <div>
      {tabButtons}
      <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>{tabContent}</ScrollAnimation>
    </div>
  );
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
