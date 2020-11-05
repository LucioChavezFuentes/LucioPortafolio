
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';

// core components
import Button from "components/CustomButtons/Button";
import EmailDialog from "components/EmailDialog/EmailDialog";
import { injectIntl } from 'react-intl';
import AllProjectsLink from 'components/AllProjectsLink/AllProjectsLink';
import AboutLucioLink from 'components/AboutLucioLink/AboutLucioLink';

//Redux
import { connect } from 'react-redux';

//types
import { RootState } from 'redux/rootReducer';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
const useStyles = makeStyles(styles);


// TODO: Fill the HeaderLinksProps interface
/*interface HeaderLinksProps {

}*/

function HeaderLinks(props: any) {
  const { isThemeDark, intl } = props
  const classes = useStyles({ isThemeDark });

  /*const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    const key = event.currentTarget.getAttribute('data-key')
    if (typeof key === 'string') {
      const intKey = parseInt(key, 10)
      // triggers handleDrawerToggle from component Header to set the state of Drawer on mobile
      if (isMobile) {
        handleDrawerToggle()
      }
      // triggers onClickProject in ProfilePage to set the active project selected
      if (onClickProject) {
        onClickProject(intKey)
      }
    }
  }*/

  return (
      <>
        <List className={classes.list}>

          <ListItem className={classes.listItem}>
            <AboutLucioLink />
          </ListItem>

          <ListItem className={classes.listItem}>
            <AllProjectsLink />
          </ListItem>

          <ListItem className={classes.listItem}>
            {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
            <Tooltip
              id="instagram-twitter"
              title={intl.formatMessage({
                defaultMessage: "Lucio's GitHub",
                description: 'github-tooltip',
                id: "github-tooltip",
              })}
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
            <EmailDialog className={classes.navLink} tooltipClassName={classes.tooltip} />
          </ListItem>
        </List>


      </>
    )
}

const mapStateToProps = (state: RootState) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(injectIntl(HeaderLinks));