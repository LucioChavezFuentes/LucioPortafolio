import React from 'react';
//Animations
import { motion } from 'framer-motion';

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

//images
import socialConejitoProject from 'assets/img/projects/Social-Conejito2.jpg';
import ravenousProject from 'assets/img/projects/ravenous.jpg';
import codigoAventura from 'assets/img/projects/codigoAventura.jpg';
import teaCozy from 'assets/img/projects/teaCozy.jpg'
//Redux
import { useSelector } from 'react-redux';

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

		'&:hover $projectDescription': {
			opacity: 1,
		},

		'&:hover $projectImage': {
			opacity: 0.09,
		}
	},

	projectImage: {
		width: '100%',
		height: 'auto',
		borderRadius: '20px',
	},

	projectDescription: {
		position: 'absolute',
		opacity: 0,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		width: '90%',
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




						<GridItem xs={fullWidth} sm={halfWidth} key={1}>
							<motion.div
								className={classes.projectItem}
								variants={childrenAnimation}
								key={1}
							>
								<img className={classes.projectImage} src={socialConejitoProject} alt='The Social Conejito' />

								<p className={classes.projectDescription}>
									{`The Social Conejito is a social network composed of short messages named 
										'Squeals or Screams' for user expression where everyone can see, like and comment.`}
								</p>

							</motion.div>
						</GridItem>

						<GridItem xs={fullWidth} sm={halfWidth} key={2}>
							<motion.div
								className={classes.projectItem}
								variants={childrenAnimation}
								key={2}
							>
								<img className={classes.projectImage} src={ravenousProject} alt='The Social Conejito' />
								<div >
									<p className={classes.projectDescription}>
										{`The Social Conejito is a social network composed of short messages named 
									'Squeals or Screams' for user expression where everyone can see, like and comment.`}
									</p>
								</div>
							</motion.div>
						</GridItem>

						<GridItem xs={fullWidth} sm={halfWidth} key={3}>
							<motion.div
								className={classes.projectItem}
								variants={childrenAnimation}
								key={3}
							>
								<img className={classes.projectImage} src={codigoAventura} alt='The Social Conejito' />
							</motion.div>
						</GridItem>

						<GridItem xs={fullWidth} sm={halfWidth} key={4}>
							<motion.div
								className={classes.projectItem}
								variants={childrenAnimation}
								key={4}
							>
								<img className={classes.projectImage} src={teaCozy} alt='The Social Conejito' />
							</motion.div>
						</GridItem>

					</GridContainer>
				</motion.div>
			</div >

		</motion.div >
	)
}

export default Projects
