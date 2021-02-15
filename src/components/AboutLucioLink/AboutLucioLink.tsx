import React from 'react'
import Button from "components/CustomButtons/Button";
import { Link, useLocation } from 'react-router-dom';
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FaceIcon from '@material-ui/icons/Face';
//helper
import IntlMessage from 'helper/IntlMessages';

interface Props {
    withDarkTheme?: boolean;
}

const useStyles = makeStyles((theme) =>

    createStyles({
        navLink: {
            width: '100%',
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
            transition: 'background 1s',
            "&:hover": {
                color: "inherit",
                background: "rgba(200, 200, 200, 0.2)"
            },
            [theme.breakpoints.down("sm")]: {
                width: "90%",
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

const AboutLucioLink : React.FC<Props> = ({withDarkTheme} : Props) => {

    const location = useLocation();

	const classes = useStyles();
    const isAboutLucioRoute = location.pathname === '/' || location.pathname === '/menu'

	return (
		<Button className={classes.navLink} to='/' startIcon={<FaceIcon />} component={Link} active={ isAboutLucioRoute} withDarkTheme={withDarkTheme}>
            <IntlMessage
                defaultMessage='About Lucio'
                id='about-lucio' description='about-lucio'
            />
		</Button>
	)
}

export default AboutLucioLink
