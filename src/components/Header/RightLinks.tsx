
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
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button";
import EmailDialog from "components/EmailDialog/EmailDialog";
import {injectIntl} from 'react-intl';
import AllProjectsLink from 'components/AllProjectsLink/AllProjectsLink';
import AboutLucioLink from 'components/AboutLucioLink/AboutLucioLink';

//Redux
import { connect } from 'react-redux';

//types
import {RootState} from 'redux/rootReducer';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";
const useStyles = makeStyles(styles);


// TODO: Fill the HeaderLinksProps interface
/*interface HeaderLinksProps {

}*/

function HeaderLinks(props: any) {
  const {isThemeDark, intl} = props
  const classes = useStyles({isThemeDark});

  const {onClickProject, handleDrawerToggle, isMobile} = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

    const key = event.currentTarget.getAttribute('data-key')
    if( typeof key === 'string') {
      const intKey = parseInt(key, 10)
      // triggers handleDrawerToggle from component Header to set the state of Drawer on mobile
      if(isMobile){
        handleDrawerToggle()
      }
      // triggers onClickProject in ProfilePage to set the active project selected
      if(onClickProject){
        onClickProject(intKey)
      }
    }
  }

  return (isMobile ? (
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
      
      
        {/*<ListItem className={classes.listItem}>
          <Button
            href='https://thesocialmono.firebaseapp.com'
            target="_blank"
            rel="noopener noreferrer"
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
        <Button 
            href="https://codigoaventura-2c741.firebaseapp.com"
            target='_blank'
            rel="noopener noreferrer"
            className={classes.dropdownButtonLink}
            onClick={handleClick}
            data-key={1}
            color="transparent"
            variant='text'
            simple
            startIcon={<AdventureCode />}
          >
            {intl.formatMessage({
                        defaultMessage: 'Adventure Code',
                        description: 'adventure-code-title',
                        id: "adventure-code-title",
                      })}
          </Button>
        </ListItem>
          <ListItem className={classes.listItem}>
          <Button 
            href='https://ravenous-8b12b.firebaseapp.com'
            target='_blank'
            rel="noopener noreferrer"
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
            
              <Button
                onClick={handleDrawerToggle}
                href='https://tea-cozy-37cbf.firebaseapp.com'
                target="_blank"
                rel="noopener noreferrer"
                className={classes.dropdownButtonLink}
                data-key={3}
                color="transparent"
                variant='text'
                simple
                startIcon={<TeaCozy/>}
              >
                Tea Cozy
              </Button>
                    </ListItem>*/}
        <ListItem className={classes.subList}>
          <ListSubheader id="Social-Media" className={classes.listSubheader}>
          {intl.formatMessage({
                        defaultMessage: 'Social Media',
                        description: 'social-media-title',
                        id: "social-media-title",
                      })}
            
          </ListSubheader>

        <ListItem className={classes.listItem}>
          <Button
            onClick={handleDrawerToggle}
              className={classes.dropdownButtonLink}
              href="https://github.com/LucioChavezFuentes"
              target="_blank"
              color="transparent"
              startIcon={<GitHubIcon />}
            >
              { /*fab and fa-twitter appear to be global classNames*/ }
              {intl.formatMessage({
                        defaultMessage: "Lucio's GitHub",
                        description: 'github-tooltip',
                        id: "github-tooltip",
                      })}
              
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <EmailDialog className={classes.dropdownButtonLink} isMobile />
        </ListItem>
      </ListItem>
    </List>
    
    </>
  ) : (
    <>
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <AboutLucioLink/>
        <AllProjectsLink/>
        {/*<CustomDropdown
          noLiPadding
          buttonText={<IntlMessage 
            defaultMessage='All Projects' 
            id='all-projects' description='all-projects' 
        />}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Button 
              onClick={handleClick}
              data-key={0}
              key={0}
              href='https://thesocialmono.firebaseapp.com' 
              target='_blank'
              rel="noopener noreferrer"
              className={classes.dropdownButtonLink}
              color="transparent"
              variant='text'
              simple
              startIcon={<Conejito />}
          >
            The Social Conejito
          </Button>,
            <Button
              onClick={handleClick}
              data-key={1}
              key={1}
              href="https://codigoaventura-2c741.firebaseapp.com"
              target='_blank'
              rel="noopener noreferrer"
              className={classes.dropdownButtonLink}
              color="transparent"
              variant='text'
              simple
              startIcon={<AdventureCode />}
          >
            {intl.formatMessage({
                        defaultMessage: 'Adventure Code',
                        description: 'adventure-code-title',
                        id: "adventure-code-title",
                      })}
          </Button>,
            <Button
              onClick={handleClick}
              data-key={2}
              key={2}
              href='https://ravenous-8b12b.firebaseapp.com'
              target='_blank'
              rel="noopener noreferrer"
              className={classes.dropdownButtonLink}
              color="transparent"
              variant='text'
              simple
              startIcon={<Ravenous />}
          >
            Ravenous
          </Button>,
            
            <Button
                href='https://tea-cozy-37cbf.firebaseapp.com'
                target="_blank"
                rel="noopener noreferrer"
                className={classes.dropdownButtonLink}
                color="transparent"
                variant='text'
                simple
                startIcon={<TeaCozy/>}
                key={3}
              >
                Tea Cozy
              </Button>
            
          ]}
        />*/}
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
  );
}

const mapStateToProps = (state : RootState) => ({
  isThemeDark: state.ui.isThemeDark,
})

export default connect(mapStateToProps)(injectIntl(HeaderLinks));