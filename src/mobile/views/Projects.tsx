import React from 'react';
//Animations
import { motion } from 'framer-motion';
//React Router Dom;
import { Link } from "react-router-dom";

//Uncomment if you want to change the animation on clicking a project
//import ProjectSelected from 'mobile/views/ProjectSelected'
import Button from "components/CustomButtons/Button";
import ProjectSelectedDialog from 'mobile/views/ProjectSelectedDialog';
//Custom MUI Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

//Redux
import { useSelector } from 'react-redux';

// @material-ui/core components
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
import IntlMessage from 'helper/IntlMessages';
//Data
import projectsById, { arrayOfProjects} from 'data/projects';
//Types
import StyleProps from "types/StyleProps";
import { RootState } from 'redux/rootReducer';

const styles = (theme: Theme) => createStyles({
	main: {
		backgroundColor: (props) => getDarkOrLightTheme(theme, 'background', props as StyleProps),
		margin: "-290px 30px 0px",
		position: 'relative',
		borderRadius: '6px',
		minHeight: '900px',
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		[theme.breakpoints.down("xs")]: {
			margin: "-290px 20px 0px",
		},
	},

	name: {
		display: 'inline-block',
		width: '100%',
		textAlign: 'center',
	},

	title: {
		fontSize: "30px",
		marginTop: '50px',
		marginBottom: '10px',
		position: 'relative',
		minHeight: '32px',
		fontFamily: ' "Roboto Slab", "Times New Roman", serif',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
	},

	helperTextContainer: {
		
		width: '100%',
		textAlign: 'center',
		
	},

	helperText: {
		fontSize: "20px",
		fontFamily: ' "Roboto", "Times New Roman", serif',
		margin: '10px',
		color: (props) => getDarkOrLightTheme(theme, 'text-secondary', props as StyleProps),
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
		}
	},

	projectsContainer: {
		width: '90%',
		margin: '0 auto',
		display: 'flex',
		flexFlow: 'column',

	},

	projectItem: {
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '20px',
		paddingBottom: '55%',
		height: '0',
		border: (props) => `solid 5px ${getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps)}`,
		transition: 'border 700ms ease 200ms',
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",

		'&:hover $projectImage': {
			//opacity: 0.09,
			filter: 'brightness(20%)',
		},

		'&:hover $projectTitle': {
			opacity: 1,
		},

		'&:hover $projectDescription': {
			opacity: 1,
		},

		'&:hover $webSiteLink': {
			opacity: 1,
		},
	},

	projectImage: {
		width: '100%',
		height: 'auto',
		transition: 'all 500ms ease 200ms',
		display: 'block',
		borderRadius: '10px',
		transform: 'scale(1.1)',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
		border: (props) => `solid 5px ${getDarkOrLightTheme(theme, 'primary-dark', props as StyleProps)}`,
		textAlign: 'center',
    fontSize: '20px',
	},

	projectDetails: {
		display: 'flex',
		flexFlow: 'column',
		position: 'absolute',
		top: 0,
		left: 0,
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
		opacity: 0,
		transition: 'all 700ms ease 200ms',
		color: 'rgb(255, 255, 255)',
		alignSelf: 'center',
		borderBottom: (props: StyleProps) => `3px solid ${getDarkOrLightTheme(theme, 'primary-light', props)}`,
	},

	projectDescription: {
		opacity: 0,
		transition: 'all 700ms ease 200ms',
		fontSize: '25px',
		alignSelf: 'center',
		color: 'rgb(255, 255, 255)',
		margin: '20px 0',
	},

	webSiteLink: {
		opacity: 0,
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
		borderRadius: '20px',
	}
})

const useStyles = makeStyles(styles)

const Projects : React.FC<any> = ({match} : any) => {

    const { project } = match.params;
    const imageHasLoaded = true;

	const { isThemeDark } = useSelector((state: RootState) => state.ui)
	const classes = useStyles({ isThemeDark });
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	//Grid Container Spacing
	const none = 0;
	//const veryLow = 1;
	//const low = 2;
	//const medium = 4;
	//const high = 6;
	const veryHigh = 8;
	//Grid Items space to take on Grid Container
	//const halfWidth = 6;
	const fullWidth = 12;

	const childrenAnimation = {
		initial: {
			y: 50,
			opacity: 0,
		},

		end: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			}
		},
	};

	const parentAnimation = {
		initial: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
		end: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.27,

			}
		}
	}

	const hoverImage = {
		hover: {
			scale: 1.05
		},
	}

	const gridSpacingWeb = {
		container: veryHigh,
		item: ''
	}

	const gridSpacingMobile = {
		container: none,
		item: '32px 0'
	}

	const getGridSpacing = (type : 'container' | 'item') => isMobile ? gridSpacingMobile[type] : gridSpacingWeb[type]

	const projectDetails = projectsById[project]

	return (
		<motion.div >
			<div className={classes.main}>
				<motion.div
					initial="initial"
					animate="end"
					variants={parentAnimation}
					transition={{ duration: 0.5 }}
					
				>
					<div>
						<div className={classes.name}>
							<h3 className={classes.title}><IntlMessage defaultMessage="All Lucio's Projects" description="All Lucio's Projects Title" id='all-lucio-projects' /></h3>
						</div>
					</div>

						<div className={classes.helperTextContainer}>
							<h5 className={classes.helperText}>
								<IntlMessage 
									defaultMessage="Click or Tap on images to see project details." 
									description="projects-helper-text" 
									id='projects-helper-text' />
							</h5>
						</div>

					<GridContainer className={classes.projectsContainer} spacing={getGridSpacing('container')}>

						{arrayOfProjects.map(({ img, id }) => {

							return (
								<GridItem xs={fullWidth} sm={fullWidth} key={id} style={{padding: getGridSpacing('item')}}>
									<motion.div
										className={classes.projectItem}
										variants={childrenAnimation}
										whileTap={{scale: 1.3, transition: { scale: {velocity: 700, stiffness: 1000 }}}}
                    key={id}
                    layoutId={`project-${id}`}
									>
										<motion.img
											variants={hoverImage}
											className={classes.projectImage}
											src={img.src}
                      alt={img.alt}
                                            
										/>
										
										<Button component={Link} to={`/projects/${id}`} className={classes.cardOpenLink} />
									</motion.div>
									

								
								</GridItem>
							)
						})}

                        {projectDetails && imageHasLoaded && <ProjectSelectedDialog item={projectDetails} id={project} isThemeDark={isThemeDark} /> }
					</GridContainer>
					
				</motion.div>
			</div >

		</motion.div >
	)
}

export default Projects