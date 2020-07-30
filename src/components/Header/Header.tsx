import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import RightLinks from "./RightLinks";
import styles from "assets/jss/material-kit-react/components/headerStyle";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const {isThemeDark} = props;
  const classes = useStyles({isThemeDark});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, leftLinks, brand, fixed, absolute, onClickProject, projectsSectionRef } = props;
  
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container} id='toolBar'>
        {leftLinks === undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <div className={classes.flex}> 
              <leftLinks.ThemeSwitch />
              <Hidden smDown implementation="css">
                <div className={classes.flex}>
                   <leftLinks.LenguageList /> 
                </div>
              </Hidden>
            </div>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css"> 
          <RightLinks onClickProject={onClickProject} projectsSectionRef={projectsSectionRef} isMobile={false} />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          
          <div className={classes.appResponsive}>
              <div style={{float: 'right'}} >
                <IconButton onClick={handleDrawerToggle}>
                  <ChevronRightIcon />
                </IconButton> 
            </div>
            <leftLinks.ThemeSwitch />
            <leftLinks.LenguageList dropdownClass={classes.dropdownLenguage}/>
            <RightLinks onClickProject={onClickProject} projectsSectionRef={projectsSectionRef} handleDrawerToggle={handleDrawerToggle} isMobile={true} />
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
