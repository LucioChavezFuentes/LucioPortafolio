
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
import ListSubheader from '@material-ui/core/ListSubheader';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
import ExternalLink from "assets/img/customIcons/ExternalLink";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button";


import { Link as LinkScroll} from 'react-scroll'

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
const useStyles = makeStyles(styles);

interface HeaderLinksProps {

}

export default function HeaderLinks(props: any) {
  const classes = useStyles();
  const {onClickProject, projectsSectionRef, handleDrawerToggle, isMobile} = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    const key = event.currentTarget.getAttribute('data-key')
    if( typeof key === 'string') {
      const intKey = parseInt(key, 10)
      // triggers handleDrawerToggle from component Header to set the state of Drawer on mobile
      if(isMobile){
        handleDrawerToggle()
      }
      // triggers onClickProject in ProfilePage to set the active project selected
      onClickProject(intKey)
    }
  }

  return (isMobile ? (
    <List
      className={classes.list}
    >
      <ListSubheader  id="All Projects"  className={classes.listSubheader}>
        All Projects
      </ListSubheader>
        <ListItem className={classes.listItem}>
          <Button component={LinkScroll}
            to={projectsSectionRef}
            spy={true} smooth={true} duration={500}
            className={classes.dropdownButtonLink}
            onClick={handleClick}
            data-key={0}
            customColor="transparent"
            variant='text'
            simple
            startIcon={<Conejito />}
          >
            The Social Conejito
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
        <Button component={LinkScroll}
            to={projectsSectionRef}
            spy={true} smooth={true} duration={500}
            className={classes.dropdownButtonLink}
            onClick={handleClick}
            data-key={1}
            customColor="transparent"
            variant='text'
            simple
            startIcon={<AdventureCode />}
          >
            Adventure Code
          </Button>
        </ListItem>
          <ListItem className={classes.listItem}>
          <Button component={LinkScroll}
            to={projectsSectionRef}
            spy={true} smooth={true} duration={500}
            className={classes.dropdownButtonLink}
            onClick={handleClick}
            data-key={2}
            customColor="transparent"
            variant='text'
            simple
            startIcon={<Ravenous />}
          >
            Ravenous
          </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Badge
              classes={{anchorOriginTopRightRectangle: 'externalLink'}}
              badgeContent={<ExternalLink fontSizePixels='10px'/>}
            >
              <Button
                href='https://tea-cozy-37cbf.firebaseapp.com'
                target="_blank"
                className={classes.dropdownButtonLink}
                data-key={3}
                customColor="transparent"
                variant='text'
                simple
                startIcon={<TeaCozy/>}
              >
                Tea Cozy
              </Button>
            </Badge>
          </ListItem>
        <ListItem className={classes.subList}>
          <ListSubheader id="Social-Media" className={classes.listSubheader}>
            Social Media
          </ListSubheader>

        <ListItem className={classes.listItem}>
          <Button
              className={classes.dropdownButtonLink}
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              customColor="transparent"
              startIcon={<TwitterIcon />}
            >
              { /*fab and fa-twitter appear to be global classNames*/ }
              Lucio's Twitter
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
              className={classes.dropdownButtonLink}
              customColor="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              startIcon={<InstagramIcon />}
            >
              Lucio's Instagram
            </Button>
        </ListItem>
      </ListItem>
    </List>
  ) : (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="All Projects"
          buttonProps={{
            className: classes.navLink,
            customColor: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <LinkScroll
            to={projectsSectionRef}
            spy={true} smooth={true} duration={500}
            className={classes.dropdownLink}
            onClick={handleClick as any}
            data-key={0}
            >
              The Social Conejito
            </LinkScroll>,
            <LinkScroll
              to={projectsSectionRef}
              spy={true} smooth={true} duration={500}
              className={classes.dropdownLink}
              onClick={handleClick as any}
              data-key={1}
            >
              Adventure Code
            </LinkScroll>,
            <LinkScroll
              to={projectsSectionRef}
              spy={true} smooth={true} duration={500}
              className={classes.dropdownLink}
              onClick={handleClick as any}
              data-key={2}
            >
              Ravenous
            </LinkScroll>,
            <a
              target="_blank"
              href='https://tea-cozy-37cbf.firebaseapp.com'
              className={classes.dropdownLink}
              data-key={3}
            >
            Tea Cozy
            </a>
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
            customColor="transparent"
            className={classes.navLink}
          >
            { /*fab and fa-twitter appear to be global classNames*/ }
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Lucio's Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            customColor="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
    )
  );
}
