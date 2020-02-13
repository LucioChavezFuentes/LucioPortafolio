// @ts-nocheck
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import { Link as LinkScroll} from 'react-scroll'

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const {onClickProject, projectsSectionRef} = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    const key = event.currentTarget.getAttribute('data-key')

    if( typeof key === 'string') {
      const intKey = parseInt(key, 10)
      onClickProject(intKey)
    }

  }


  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="All Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <LinkScroll
            to={projectsSectionRef}
            spy={true} smooth={true} duration={500}
            className={classes.dropdownLink}
            onClick={handleClick}
            data-key={0}
            >
              The Social Conejito
            </LinkScroll>,
            <LinkScroll
              to={projectsSectionRef}
              spy={true} smooth={true} duration={500}
              className={classes.dropdownLink}
              onClick={handleClick}
              data-key={1}
            >
              Adventure Code
            </LinkScroll>,
            <LinkScroll
              to={projectsSectionRef}
              spy={true} smooth={true} duration={500}
              className={classes.dropdownLink}
              onClick={handleClick}
              data-key={2}
            >
              Ravenous
            </LinkScroll>,
            <LinkScroll
              className={classes.dropdownLink}
              data-key={3}
            >
            Tea Cozy
            </LinkScroll>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Lucio's Twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Lucio's Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
