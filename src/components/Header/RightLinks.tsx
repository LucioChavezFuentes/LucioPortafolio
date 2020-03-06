
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
import ExternalLink from "assets/img/customIcons/ExternalLink";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button";
import BadgeIcon from "components/BadgeIcon";


import { Link as LinkScroll} from 'react-scroll'

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
const useStyles = makeStyles(styles);


// TODO: Fill the HeaderLinksProps interface
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
            color="transparent"
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
            color="transparent"
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
            color="transparent"
            variant='text'
            simple
            startIcon={<Ravenous />}
          >
            Ravenous
          </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <BadgeIcon
              badgeContent={ExternalLink}
            >
              <Button
                href='https://tea-cozy-37cbf.firebaseapp.com'
                target="_blank"
                className={classes.dropdownButtonLink}
                data-key={3}
                color="transparent"
                variant='text'
                simple
                startIcon={<TeaCozy/>}
              >
                Tea Cozy
              </Button>
            </BadgeIcon>
          </ListItem>
        <ListItem className={classes.subList}>
          <ListSubheader id="Social-Media" className={classes.listSubheader}>
            Social Media
          </ListSubheader>

        <ListItem className={classes.listItem}>
          <Button
              className={classes.dropdownButtonLink}
              href="https://github.com/LucioChavezFuentes"
              target="_blank"
              color="transparent"
              startIcon={<GitHubIcon />}
            >
              { /*fab and fa-twitter appear to be global classNames*/ }
              Lucio's Twitter
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
              className={classes.dropdownButtonLink}
              color="transparent"
              href=""
              target="_blank"
              startIcon={<MailOutlineIcon />}
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
            color: "transparent"
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
              rel="noopener noreferrer"
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
          title="Lucio's GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <IconButton
            href="https://github.com/LucioChavezFuentes"
            target="_blank"
            className={classes.navLink}
          >
            { /*fab and fa-twitter appear to be global classNames, they provide icons for the <i>. 
            I'm only aware of these: fa-twitter, fa-facebook, fa-instagram and fa-github
            //TODO: Find the global css class that provides such icons  */ }
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="!Send an email to Lucio¡"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <MailOutlineIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
    )
  );
}
