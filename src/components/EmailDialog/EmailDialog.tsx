import React, {useState} from 'react'
import emailjs from 'emailjs-com';

// Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from "components/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import Typography from '@material-ui/core/Typography';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Material Icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';


// Component Imports
import DialogFeedback from 'components/DialogFeedback/DialogFeedback'; 

// Helper Imports
import {validateMessageData} from 'helper/validators';

interface Props {
    open?: boolean;
    handleClose?: () => void;
    className?: string;
    tooltipClassName?: string;
    isMobile?: boolean
}

interface Inputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface Errors {
    email?: string;
    name?: string;
    message?: string;
}



const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme: Theme) => createStyles({

    dialog: {
        
        top: '-100px',

        [theme.breakpoints.down('sm')]: {
            top: '0px'
        },
        
    },

    dialogContentContainer: {
        width: '95%', 
        margin: '0 auto 10px auto'
    },

    titleCloseButton: {
        position: 'absolute',
        right: theme.spacing(0),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
/*
    progressContainer: {
        width: '100%',
        height: '100%',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius: '15px',
        position: 'absolute',
        transition: 'all 2s ease',

    },*/

    subtitleText: {
        marginLeft: '30px', 
        marginTop: '10px',
        flex:'2',

        '& p': {
            margin: '0',
            [theme.breakpoints.down('sm')]: {
                fontSize: '13px'
            },

        '& a':{
            marginLeft:'5px', 
            color: theme.palette.text.primary,
            textDecoration: 'underline',
        },  
        },

        [theme.breakpoints.down('sm')]: {
            marginLeft: '5px'
        },
    },

    dialogContent: {
        marginBottom: '20px',
    },

    sendButtonContainer : {
        position: 'relative',

        '& .progress' : {
            position: 'absolute',
            //margin: '3px',
            color: `${theme.palette.secondary.dark}`,
            opacity: '1',
            left: '36%',
            top: '9%',
        },
    },

})

const useStyles = makeStyles(styles);

const EmailDialog:React.FC<Props> = (props) => {

    // API Variables
    const USER_ID = "user_8GdofLfZlnlQTza77rkLM";
    const GMAIL_SERVICE = "gmail";
    const TEMPLATE_ID = "template_86OdwYcX";
    // Grid Variables
    //const none = 0;
    //const veryLow = 1;
    const low = 2;
    //const medium = 4;
    //const large = 6;

    const halfWidth = 6;
    //const threeQuarterWidth = 9;
    const fullWidth = 12;

    const initialInputsState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    const [inputs, setInputs] = React.useState<Inputs>(initialInputsState);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);
    const [APIError, setAPIError] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
      }

    const handleClose = () => {
        setOpen(false);
        setErrors({});
    }

    const handleCloseFeedBack = () => {
        setOpenFeedback(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setLoading(true);
        const {errors, valid} = validateMessageData(inputs)
        if(valid){

            emailjs.send(GMAIL_SERVICE, TEMPLATE_ID, inputs, USER_ID)
                .then(res => {
                    setOpen(() => false);
                    setLoading(() => false);
                    setOpenFeedback(() => true);
                    setInputs(() => initialInputsState);
                })
                .catch(err => {
                    setLoading(() => false);
                    setAPIError(() => err);
                    setOpenFeedback(() => true);
                    return console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                })
                    
        } else {
            setErrors(errors);
            setLoading(false);
        }
    }

    const {name, email, message, subject} = inputs;

    return (
        <>
        <Tooltip
          id="instagram-facebook"
          title="!Send an email to Lucio¡"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: props.tooltipClassName}}
        >
        { props.isMobile ? (
        <Button
            className={props.className}
            color="transparent"
            onClick={handleOpen}
            startIcon={<MailOutlineIcon />}
          >
            !Send an email to Lucio¡
          </Button>
        
        ) : (
        <IconButton
            
            onClick={handleOpen}
            className={props.className}
        >
            <MailOutlineIcon />
          </IconButton>
          )}
        </Tooltip>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' fullScreen={isMobile} scroll='body' TransitionComponent={Transition} PaperProps={{classes: {root: classes.dialog}}}>
            
            <DialogTitle disableTypography id="customized-dialog-title">

                <Typography variant="h6" style={{textTransform: 'unset'}}>Send me a message from here. </Typography>

                <Typography variant="h6" style={{textTransform: 'unset'}}>!Simple and Fast¡</Typography>

                <IconButton aria-label="close" className={classes.titleCloseButton} onClick={handleClose} >
                    <CloseIcon />
                </IconButton> 
              
            </DialogTitle>
           
            <DialogContent dividers >
                    <GridContainer spacing={low} justify="center" alignItmes='center'>

                        <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth} >
                            <TextField
                                name='name'
                                type='text'
                                label='Name'
                                variant="outlined"
                                error={errors.name ? true : false}
                                helperText={<p style={{margin:'0'}}>{errors.name || '*Required'}</p>}
                                value={name}
                                onChange={handleChange}
                                disabled={loading}
                                fullWidth
                            />
                        </GridItem>

                        <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth} >
                            <TextField
                                name='email'
                                type='text'
                                label='Email'
                                variant="outlined"
                                error={errors.email ? true : false}
                                helperText={<p style={{margin:'0'}}>{errors.email || '*Required'}</p>}
                                value={email}
                                onChange={handleChange}
                                disabled={loading}
                                fullWidth
                            />
                        </GridItem>


                        <GridItem>
                            <TextField
                                name='subject'
                                type='text'
                                label='Subject'
                                variant="outlined"
                                helperText={<p style={{margin:'0'}} >Optional</p>}
                                value={subject}
                                onChange={handleChange}
                                disabled={loading}
                                
                            />
                        </GridItem>

                        <GridItem>
                            <TextField
                                name='message'
                                variant="outlined"
                                multiline
                                rows="6"
                                label="Message"
                                error={errors.message ? true : false}
                                helperText={<p>{errors.message || '*Required'}</p>}
                                value={message}
                                onChange={handleChange}
                                disabled={loading}
                                fullWidth
                            />
                        </GridItem>
                    
                    </GridContainer>
                
            </DialogContent>

            <DialogActions>
                
                <DialogContentText className={classes.subtitleText}>
                    
                        <p>
                            { isMobile ? 'Or contact me' :  'Or you could send me an email through' } 
                            <a 
                                href="mailto:luciobertinchavez@gmail.com"
                            >
                                { isMobile ? 'here' :  'luciobertinchavez@gmail.com ' }
                            </a>
                        </p>
                    
                </DialogContentText>

                <div className={classes.sendButtonContainer}>
                    <Button type='submit' variant='contained' color='primary' onClick={handleSubmit} disabled={loading} endIcon={<SendIcon />} >
                        Send
                    </Button>
                    {loading && (
                                <CircularProgress size={30} thickness={5} className='progress' />
                            )}
                </div>
                
                <Button type='submit' variant='contained' color='secondary' onClick={handleClose} endIcon={<CloseIcon />} >
                    Cancel
                </Button>
            </DialogActions>
            
        </Dialog>
        <DialogFeedback open={openFeedback} error={APIError} onClose={handleCloseFeedBack} TransitionComponent={Transition} />
        </>
    )
}

export default EmailDialog;


