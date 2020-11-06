import React from 'react'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import GitHubIcon from '@material-ui/icons/GitHub';

// core components
import Button from "components/CustomButtons/Button";
import MobileEmailDialog from 'mobile/components/MobileEmailDialog/MobileEmailDialog';
import { injectIntl } from 'react-intl';
import AllProjectsLink from 'components/AllProjectsLink/AllProjectsLink';
import AboutLucioLink from 'components/AboutLucioLink/AboutLucioLink';

//Redux
import { connect } from 'react-redux';

//types
import { RootState } from 'redux/rootReducer';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
const useStyles = makeStyles(styles);

const MenuLinks = (props: any) => {
  const { isThemeDark, intl } = props
  const classes = useStyles({ isThemeDark });

  return (
    <>
      <List
        className={classes.list}
      >
        <ListItem className={classes.listItem}>
          <AllProjectsLink />
        </ListItem>

        <ListItem className={classes.listItem}>
          <AboutLucioLink />
        </ListItem>

        
          <ListItem id="Social-Media" className={classes.listSubheader}>
            {intl.formatMessage({
              defaultMessage: 'Social Media',
              description: 'social-media-title',
              id: "social-media-title",
            })}

          </ListItem>

          <ListItem className={classes.listItem}>
            <Button
              className={classes.dropdownButtonLink}
              href="https://github.com/LucioChavezFuentes"
              rel="noopener noreferrer"
              target="_blank"
              color="transparent"
              startIcon={<GitHubIcon />}
            >
              { /*fab and fa-twitter appear to be global classNames*/}
              {intl.formatMessage({
                defaultMessage: "Lucio's GitHub",
                description: 'github-tooltip',
                id: "github-tooltip",
              })}

            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <MobileEmailDialog className={classes.dropdownButtonLink} />
          </ListItem>
        
      </List>

    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(injectIntl(MenuLinks));
