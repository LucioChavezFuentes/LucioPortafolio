import React from 'react'
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from "components/CustomButtons/Button";

// @material-ui/icons
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
// styles
import styles from './ProjectsListStyles';
//helper
import IntlMessage from 'helper/IntlMessages';

const useStyles = makeStyles(styles)

const ProjectsList : React.FC<any> = ({ handleClick, handleDrawerToggle }: any) => {
  const classes = useStyles()
  return (
    <>
      <ListSubheader  id="All Projects"  className={classes.listSubheader}>
      <IntlMessage 
            defaultMessage='All Projects' 
            id='all-projects' description='all-projects' 
        />
      </ListSubheader>
      <ListItem className={classes.listItem}>
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
          <IntlMessage
            defaultMessage='Adventure Code' 
            description='adventure-code-title' 
            id='adventure-code-title' 
          />
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
          startIcon={<TeaCozy />}
        >
          Tea Cozy
              </Button>
      </ListItem>
    </>
  )
}

export default ProjectsList
