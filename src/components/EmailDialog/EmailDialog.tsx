import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';

// Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from "components/CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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

const styles = (theme: Theme) => createStyles({

    dialog: {
        
        top: '-150px',

        [theme.breakpoints.down('sm')]: {
            top: '0px'
        },
        
    },

    dialogContentContainer: {
        width: '95%', 
        margin: '0 auto 10px auto'
    },

    progress : {
        position: 'absolute'
      }
})

const useStyles = makeStyles(styles);

const EmailDialog:React.FC<Props> = (props) => {

    // API Variables
    const USER_ID = "user_8GdofLfZlnlQTza77rkLM";
    const GMAIL_SERVICE = "gmail";
    const TEMPLATE_ID = "template_86OdwYcX";
    // Grid Variables
    const none = 0;
    const veryLow = 1;
    const low = 2;
    const medium = 4;
    const large = 6;

    const halfWidth = 6;
    const threeQuarterWidth = 9;
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
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
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

            emailjs.send("gmail", "template_86OdwYcX", inputs, USER_ID) 
                .then(res => {
                    setOpen(false);
                    setInputs(initialInputsState);
                    setLoading(false);
                    setOpenFeedback(true);
                })
                .catch(err => {
                    setLoading(false);
                    setAPIError(err);
                    setOpenFeedback(true);
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
            href="mailto:luciobertinchavez@gmail.com"
            onClick={handleOpen}
            startIcon={<MailOutlineIcon />}
          >
            !Send an email to Lucio¡
          </Button>
        
        ) : (
        <IconButton
            href="mailto:luciobertinchavez@gmail.com"
            onClick={handleOpen}
            className={props.className}
        >
            <MailOutlineIcon />
          </IconButton>
          )}
        </Tooltip>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' fullScreen={fullScreen} PaperProps={{classes: {root: classes.dialog}}}>
            
            <DialogTitle>!Send me a message¡</DialogTitle>
            <DialogContent dividers >
                    <GridContainer spacing={low} justify="center" alignItmes='center' style={{marginBottom: '10px'}}  >

                        <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth} >
                            <TextField
                                name='name'
                                type='text'
                                label='Name'
                                error={errors.name ? true : false}
                                helperText={<p style={{position: 'absolute', top: '55px'}}>{errors.name}</p>}
                                value={name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </GridItem>

                        <GridItem xs={fullWidth} sm={fullWidth} md={halfWidth} >
                            <TextField
                                name='email'
                                type='text'
                                label='Email'
                                error={errors.email ? true : false}
                                helperText={<p style={{position: 'absolute', top: '55px'}}>{errors.email}</p>}
                                value={email}
                                onChange={handleChange}
                                fullWidth
                            />
                        </GridItem>


                        <GridItem>
                            <TextField
                                name='subject'
                                type='text'
                                label='Subject'
                                helperText={"This field is optional."}
                                value={subject}
                                onChange={handleChange}
                                
                            />
                        </GridItem>

                        <GridItem>
                            <TextField
                                name='message'
                                variant="outlined"
                                multiline
                                label="Message"
                                error={errors.message ? true : false}
                                helperText={<p style={{position: 'absolute', top: '65px'}}>{errors.message}</p>}
                                value={message}
                                onChange={handleChange}
                                fullWidth
                            />
                        </GridItem>
                    
                    </GridContainer>
                
            </DialogContent>

            <DialogActions>
                <Button type='submit' variant='contained' color='primary' onClick={handleSubmit} disabled={loading} endIcon={<SendIcon />} >
                    Send
                    {loading && (
                            <CircularProgress size={30} className={classes.progress} />)}
                </Button>
                <Button type='submit' variant='contained' color='secondary' onClick={handleClose} endIcon={<CloseIcon />} >
                    Cancel
                </Button>
            </DialogActions>
            
        </Dialog>
        <DialogFeedback open={openFeedback} error={APIError} onClose={handleCloseFeedBack} />
        </>
    )
}

export default EmailDialog;


