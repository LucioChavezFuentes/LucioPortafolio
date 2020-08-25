import React from 'react'
//Animations
import { motion } from 'framer-motion';
//React Router Dom;
import { Link } from "react-router-dom";

import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
//Types
import StyleProps from "types/StyleProps";

const styles = (theme: Theme) => createStyles({
    projectItem: {
		position: 'fixed',
        //borderRadius: '20px',
        backgroundColor: 'black',
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        overflowY: 'auto',
		border: (props) => `solid 5px ${getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps)}`,
		boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },

    projectImage: {
		width: '100%',
		height: 'auto',
		transition: 'all 500ms ease 200ms',
		display: 'block'
	},

	projectDetails: {
		display: 'flex',
		flexFlow: 'column',
		width: '100%',
		height: '100%',
		padding: '20px',
		justifyContent: 'center',
		textAlign: 'center',
	},

	projectTitleContainer: {
		flex:'1', 
		alignSelf: 'center',
		display: 'flex',
		justifyContent: 'center',
	},

	projectTitle: {
		fontSize: '30px',
		fontFamily: 'Roboto',
		margin: '10px',
		transition: 'all 700ms ease 200ms',
		color: 'rgb(255, 255, 255)',
		alignSelf: 'center',
		borderBottom: (props: StyleProps) => `3px solid ${getDarkOrLightTheme(theme, 'primary-light', props)}`,
	},

	projectDescription: {
		transition: 'all 700ms ease 200ms',
		fontSize: '25px',
		alignSelf: 'center',
		color: 'rgb(255, 255, 255)',
		margin: '20px 0',
	},

	webSiteLink: {
		width: '40%',
		transition: 'all 700ms ease 200ms',
		fontSize: '15px',
		alignSelf: 'center'
    },
    
    cardOpenLink: {
		position: 'absolute',
		top: 0,
	    left: 0,
		right: 0,
		bottom: 0,
	}
})

const useStyles = makeStyles(styles)

const ProjectSelected = ({ items, id, isThemeDark } : any) => {

    const classes = useStyles({isThemeDark});

    const { title, img, description, ButtonLink } = items.find(item => item.id === id);

    return (
        <motion.div
            className={classes.projectItem}
            key={id}
            layoutId={`project-${id}`}
        >
            <motion.img
                className={classes.projectImage}
                src={img.src}
                alt={img.alt}
                layoutId={`project-${id}`}
            />

            <motion.div className={classes.projectDetails} >
                <div className={classes.projectTitleContainer}>
                    <p className={classes.projectTitle}>
                        {title}
                    </p>
                </div>

                <p style={{ flex: '1' }} className={classes.projectDescription}>
                    {description}
                </p>

                <div style={{ flex: '1' }}>
                    {ButtonLink}
                </div>
            </motion.div>
            <Link to='/projects' className={classes.cardOpenLink} />
        </motion.div>
    )
}

export default ProjectSelected
