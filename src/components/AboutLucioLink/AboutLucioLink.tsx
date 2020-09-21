import React from 'react'
import Button from "components/CustomButtons/Button";
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FaceIcon from '@material-ui/icons/Face';
//helper
import IntlMessage from 'helper/IntlMessages';

const useStyles = makeStyles((theme) =>

    createStyles({
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: 400,
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit",
                background: "rgba(200, 200, 200, 0.2)"
            },
            [theme.breakpoints.down("sm")]: {
                //width: "calc(100% - 30px)",
                //marginLeft: "15px",
                marginBottom: "8px",
                marginTop: "8px",
                textAlign: "left",
                padding: '8px',
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            }
        }

    }))

const AboutLucioLink = () => {

	const classes = useStyles();

	return (
		<Button className={classes.navLink} to='/' startIcon={<FaceIcon />} component={Link}>
            <IntlMessage
                defaultMessage='About Lucio'
                id='about-lucio' description='about-lucio'
            />
		</Button>
	)
}

export default AboutLucioLink
