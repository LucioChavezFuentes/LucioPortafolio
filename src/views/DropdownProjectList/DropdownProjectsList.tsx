import React from 'react'
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "components/CustomButtons/Button";
// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
//helper
import IntlMessage from 'helper/IntlMessages';
//styles
import styles from './DropdownProjectsListStyles';

const useStyles = makeStyles(styles)

const DropdownProjectsList = ({handleClick}) => {

  const classes = useStyles();

  return (
    <CustomDropdown
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
            <IntlMessage 
            defaultMessage='Adventure Code' 
            id='adventure-code-title' description='adventure-code-title' 
            />
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
        />
  )
}

export default DropdownProjectsList
