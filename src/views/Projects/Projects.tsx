import React from 'react';
//Animations
import { motion } from 'framer-motion';

//Components
import SocialConejitoLink from 'components/SocialConejitoLink/SocialConejitoLink';

//Custom MUI Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";

//images
import socialConejitoProject from 'assets/img/projects/Social-Conejito2.jpg';
import ravenousProject from 'assets/img/projects/ravenous.jpg';
import codigoAventura from 'assets/img/projects/codigoAventura.jpg';
import teaCozy from 'assets/img/projects/teaCozy.jpg'
//Redux
import { useSelector } from 'react-redux';

// Custom Icons
import Conejito from "assets/img/customIcons/Conejito";

// @material-ui/core components
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
//Types
import StyleProps from "types/StyleProps";
import { RootState } from 'redux/rootReducer';

const styles = (theme: Theme) => createStyles({
	main: {
		backgroundColor: 'rgb(18, 18, 18)',
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
		position: 'relative',
		minHeight: '32px',
		fontFamily: ' "Roboto Slab", "Times New Roman", serif',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
	},

	projectsContainer: {
		width: '90%',
		margin: '0 auto',

	},

	projectItem: {
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '20px',

		'&:hover $projectDescription': {
			opacity: 1,

		},

		'&:hover $projectImage': {
			opacity: 0.09,
		},

		'&:hover $webSiteLink': {
			opacity: 1,

		},
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
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		padding: '20px',
		justifyContent: 'center',
		textAlign: 'center',
	},

	projectTitle: {
		fontSize: '30px',
		fontFamily: 'Roboto',
		margin: '10px',
	},

	projectDescription: {
		//position: 'absolute',
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
})

const useStyles = makeStyles(styles)

const Projects = (props) => {

	const { isThemeDark } = useSelector((state: RootState) => state.ui)
	const classes = useStyles({ isThemeDark });
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	//Grid Container Spacing
	const none = 0;
	const veryLow = 1;
	//const low = 2;
	const medium = 4;
	const high = 6;
	const veryHigh = 8;
	//Grid Items space to take on Grid Container
	const halfWidth = 6;
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
		}
	}

	const gridItems = [{
		img: {
			src: socialConejitoProject,
			alt: 'The Social Conejito',
		},
		title: 'The Social Conejito',
		description: `The Social Conejito is a social network composed of short messages named 
		'Squeals or Screams' for user expression where everyone can see, like and comment.`,
		ButtonLink: <SocialConejitoLink className={classes.webSiteLink} label='Visit Social Conejito' />
	}, {
		img: {
			src: ravenousProject,
			alt: 'Ravenous'
		},
		title: 'Ravenous',
		description: `The Social Conejito is a social network composed of short messages named 
		'Squeals or Screams' for user expression where everyone can see, like and comment.`,
		ButtonLink: <SocialConejitoLink className={classes.webSiteLink} /> 
	}, {
		img: {
			src: codigoAventura,
			alt: 'Adventure Code'
		} ,
		title: 'Adventure Code',
		description: `The Social Conejito is a social network composed of short messages named 
		'Squeals or Screams' for user expression where everyone can see, like and comment.`,
		ButtonLink: <SocialConejitoLink className={classes.webSiteLink} />
	}, {
		img: {
			src: teaCozy,
			alt: 'Tea Cozy',
		},
		title: 'Tea Cozy',
		description: `The Social Conejito is a social network composed of short messages named 
		'Squeals or Screams' for user expression where everyone can see, like and comment.`,
		ButtonLink: <SocialConejitoLink className={classes.webSiteLink} /> 
	}]

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
							<h3 className={classes.title}>{`All Lucio's Projects`}</h3>
						</div>
					</div>

					<GridContainer className={classes.projectsContainer} spacing={isMobile ? veryLow : veryHigh}>


						{gridItems.map(({img, title, description, ButtonLink}, index) => {
							return (
								<GridItem xs={fullWidth} sm={halfWidth} key={index}>
									<motion.div
										className={classes.projectItem}
										variants={childrenAnimation}
										whileHover='hover'

										key={index}
									>
										<motion.img
											variants={hoverImage}
											className={classes.projectImage} 
											src={img.src} 
											alt={img.alt} 
										/>

										<motion.div className={classes.projectDetails}>

											<p className={classes.projectTitle}>
												{title}
											</p>

											<p className={classes.projectDescription}>
												{description}
											</p>

											{ButtonLink}
										</motion.div>

									</motion.div>
								</GridItem>
							)
						})}

					</GridContainer>
				</motion.div>
			</div >

		</motion.div >
	)
}

export default Projects
