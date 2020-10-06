import React from 'react'
//Animations
import { motion } from 'framer-motion';
//React Router Dom;
import { useHistory } from "react-router-dom";
//MUI Core
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';
//React Intl 
import {FormattedMessage} from 'react-intl';

//MUI Icons
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

//Custon Material-UI Components
import CustomPaper from 'components/CustomPaper/CustomPaper';
import CustomIconButton from 'components/CustomIconButton/CustomIconButton';

// Custom Icons
import Conejito from "assets/img/customIcons/Conejito";
import AdventureCode from "assets/img/customIcons/AdventureCode";
import Ravenous from "assets/img/customIcons/Ravenous";
import TeaCozy from "assets/img/customIcons/TeaCozy";
import  WanderlustIcon from "assets/img/customIcons/WanderlustIcon";
import WorkNFlow from "assets/img/customIcons/WorkNFlow";

//Types
import StyleProps from "types/StyleProps";
import { TransitionProps } from '@material-ui/core/transitions';

const icons = {
	socialConejito: Conejito,
	ravenous: Ravenous ,
	adventureCode: AdventureCode ,
	teaCozy: TeaCozy,
	wanderlust: WanderlustIcon,
	workNFlow: WorkNFlow

}

const styles = (theme: Theme) => createStyles({
    projectItem: {
		position: 'fixed',
        //borderRadius: '20px',
        backgroundColor: (props) => getDarkOrLightTheme(theme, 'background', props as StyleProps),
        overflow: 'auto',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
		zIndex: 1400,
		//boxShadow: 'inset 0px 11px 15px -7px rgba(0,0,0,0.2), inset 0px 24px 38px 3px rgba(0,0,0,0.14), inset 0px 9px 46px 8px rgba(0,0,0,0.12)',
		boxShadow: 'inset 0px 1px 5px -7px rgba(0,0,0,0.2), inset 0px 4px 8px 3px rgba(0,0,0,0.14), inset 0px 9px 46px 8px rgba(0,0,0,0.12)'
    },

    projectImage: {
		width: '100%',
		height: 'auto',
		transition: 'all 500ms ease 200ms',
		display: 'block',
		marginTop: '30px',
		borderTop: (props: StyleProps) => `5px solid ${getDarkOrLightTheme(theme, 'primary', props)}`,
		borderBottom: (props: StyleProps) => `5px solid ${getDarkOrLightTheme(theme, 'primary', props)}`,
		//boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
	},

	projectDetails: {
		display: 'flex',
		flexFlow: 'column',
		width: '100%',
		padding: '20px',
		justifyContent: 'center',
		textAlign: 'center',
		
		//boxShadow: 'inset 0px 11px 15px -7px rgba(0,0,0,0.2), inset 0px 24px 38px 3px rgba(0,0,0,0.14), inset 0px 9px 46px 8px rgba(0,0,0,0.12)'
	},

	projectTitleContainer: {
		flex:'1', 
		alignSelf: 'center',
		display: 'flex',
		justifyContent: 'center',
		//marginTop: '40px',
		//boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
		borderRadius: '20px',
		/* opacity: 1; */
		width: '90%',
		margin: '50px auto auto auto',
	},

	projectTitle: {
		fontSize: '30px',
		fontFamily: 'Roboto Slab',
		margin: '10px',
		transition: 'all 700ms ease 200ms',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
		alignSelf: 'center',
		borderBottom: (props: StyleProps) => `3px solid ${getDarkOrLightTheme(theme, 'primary-light', props)}`,

	},

	paperProjectDescription: {
		marginBottom: '15px',
		boxShadow: 'inset 0px 1px 1px -70px rgba(0,0,0,0.2), inset 0px 4px 8px 3px rgba(0,0,0,0.14), inset 0px 9px 26px 8px rgba(0,0,0,0.12), 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',

		'& #logo-teaCozy': {
			color: (props) => getDarkOrLightTheme(theme, 'icon', props as StyleProps),
		},
	},

	projectDescription: {
		transition: 'all 700ms ease 200ms',
		fontSize: '20px',
		alignSelf: 'center',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
		margin: '0',
		padding: '5px 20px 20px 20px',
	},

	webSiteLink: {
		width: '100%',
		transition: 'all 700ms ease 200ms',
		fontSize: '15px',
		alignSelf: 'center',
		marginBottom: '20px',
		marginTop: '25px',
	},

	sourceCodeLink: {
		display: 'inline-block',
		marginLeft: '10px'
	},
    
    returnLink: {
		position: 'absolute',
		margin: '10px 0 0 10px',
	},

	iconProject: {
		margin: '15px 0 0 0',
	}
})

const useStyles = makeStyles(styles)

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props as any} />;
  });

const ProjectSelected : React.FC<any> = ({ item: {title, img, description, ButtonLink, ButtonCode}, id, isThemeDark } : any) => {

    const [open, setOpen] = React.useState(true)
    const history = useHistory();
    
    const handleClose = () => {
        setOpen(false)
    }

    const pushToProjects = () => {
        history.push('/projects')
    }

	//Paper Elevation Variables
	const MAX_ELEVATION = 24;
	//const MEDIUM_ELEVATION = 12;
	//const LOW_ELEVATION = 6;
  const classes = useStyles({isThemeDark});
	
	const SelectedIcon = icons[id]

    return (
        <Dialog open={open} onExited={pushToProjects} fullWidth maxWidth='md' fullScreen scroll='body' TransitionComponent={Transition}>
        <motion.div
            className={classes.projectItem}
            key={id}
        >
			<CustomIconButton className={classes.returnLink} onClick={handleClose}>
				<KeyboardReturnIcon />
			</CustomIconButton>

				<div className={classes.projectTitleContainer}>
					
                    <p className={classes.projectTitle}>
                        {title}
                    </p>
                </div>
            <motion.img
                className={classes.projectImage}
                src={img.src}
                alt={img.alt}
            />

            <motion.div className={classes.projectDetails} animate >
                
				<CustomPaper elevation={MAX_ELEVATION} className={classes.paperProjectDescription} >
					<SelectedIcon className={classes.iconProject} id={`logo-${id}`}  />
					<p className={classes.projectDescription}>
						{description}
					</p>
				</CustomPaper>

                <div className={classes.webSiteLink} >
                  {ButtonLink}
								</div>

								<div className={classes.sourceCodeLink}>
										{ButtonCode ? (
											<ButtonCode> 
												<FormattedMessage 
													defaultMessage= 'Code'
													description= 'code-word'
													id= "code-word" 
												/>
											</ButtonCode>) : <div></div> }
									
                </div>
            </motion.div>
        </motion.div>
        </Dialog>
    )
}

export default ProjectSelected