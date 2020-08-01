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

//Redux
import {connect} from 'react-redux';

// Component Imports
import DialogFeedback from 'components/DialogFeedback/DialogFeedback';
import {injectIntl} from 'react-intl';

// Helper Imports
import {validateMessageData} from 'helper/validators';
import IntlMessage from 'helper/IntlMessages';
//Types
import { RootState } from 'redux/rootReducer';
import StyleProps from 'types/StyleProps';

interface Props {
    open?: boolean;
    handleClose?: () => void;
    className?: string;
    tooltipClassName?: string;
    isMobile?: boolean;
    isThemeDark: boolean;
    intl: any;
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
  return <Slide direction="up" ref={ref} {...props as any} />;
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

    inputText: {
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        '& label.Mui-focused': {
            color: theme.palette.primary.light,
          },
          '& .MuiOutlinedInput-root': {
            /*'& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'yellow',
            },*/
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.light,
            },
          },
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
            //color: theme.palette.text.primary,
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
            color: ({isThemeDark} : StyleProps) => isThemeDark ? theme.palette.secondary.light : `${theme.palette.secondary.dark}`,
            opacity: '1',
            left: '36%',
            top: '9%',
        },
    },

})

//TODO: Move global styles from App.tsx to its corresponding component. This approach IS better than a global class in App.tsx to style darkMode
/*const CustomTextField = withStyles((theme) => ({
    root: {
      '& label.Mui-focused': {
        color: theme.palette.primary.light,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  }))(TextField
    )*/

const useStyles = makeStyles(styles);

const EmailDialog:React.FC<Props> = (props) => {
    const {intl} = props;
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
    const classes = useStyles({isThemeDark: props.isThemeDark});

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
          title={intl.formatMessage({
            defaultMessage: "!Send an email to Lucio¡",
            description: 'email-tooltip',
            id: "email-tooltip",
          })
    }
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
              {intl.formatMessage({
                        defaultMessage: "!Send an email to Lucio¡",
                        description: 'email-tooltip',
                        id: "email-tooltip",
                      })
                }
            
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

                <Typography variant="h6" style={{textTransform: 'unset'}}>
                {intl.formatMessage({
                        defaultMessage: "Send me a message from here.",
                        description: "legend-1-email",
                        id: "legend-1-email",
                      })
                }
                     
                </Typography>

                <Typography variant="h6" style={{textTransform: 'unset'}}>
                {intl.formatMessage({
                        defaultMessage: "!Simple and Fast¡",
                        description: "legend-2-email",
                        id: "legend-2-email",
                      })
                }
                    
                </Typography>

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
                                label={intl.formatMessage({
                                    defaultMessage: "Name",
                                    description: "name-email",
                                    id: "name-email",
                                  })
                                }   
                                variant="outlined"
                                className={classes.inputText}
                                classes={{root: classes.inputText}}
                                error={errors.name ? true : false}
                                helperText={<p style={{margin:'0'}}>{errors.name || intl.formatMessage({
                                    defaultMessage: "*Required",
                                    description: "required-field-email",
                                    id: "required-field-email",
                                  })}</p>}
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
                                label={intl.formatMessage({
                                    defaultMessage: "Email",
                                    description: "emailField-email",
                                    id: "emailField-email",
                                  })
                                }
                                variant="outlined"
                                classes={{root: classes.inputText}}
                                error={errors.email ? true : false}
                                helperText={<p style={{margin:'0'}}>{errors.email || intl.formatMessage({
                                    defaultMessage: "*Required",
                                    description: "required-field-email",
                                    id: "required-field-email",
                                  })}</p>}
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
                                label={intl.formatMessage({
                                    defaultMessage: 'Subject',
                                    description: "subject-email",
                                    id: "subject-email",
                                  })
                                }
                                variant="outlined"
                                classes={{root: classes.inputText}}
                                helperText={<p style={{margin:'0'}}>
                                    <IntlMessage 
                                        defaultMessage='Optional' 
                                        id='optional-word' description='optional-word' 
                                    />
                                    </p>}
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
                                label={intl.formatMessage({
                                    defaultMessage: "Message",
                                    description: "message-email",
                                    id: "message-email",
                                  })
                                }
                                classes={{root: classes.inputText}}
                                error={errors.message ? true : false}
                                helperText={<p style={{margin:'0'}}>{errors.message || intl.formatMessage({
                                    defaultMessage: "*Required",
                                    description: "required-field-email",
                                    id: "required-field-email",
                                  })}</p>}
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
                            { isMobile ? intl.formatMessage({
                                    defaultMessage: 'Or contact me',
                                    description: "contact-me-email",
                                    id: "contact-me-email",
                                  }) :  <IntlMessage 
                                  defaultMessage='Or you could send me an email through' 
                                  id='legend-email' description='legend-email' />
                            } 
                            <a 
                                href="mailto:luciobertinchavez@gmail.com"
                            >
                                { isMobile ? <IntlMessage 
                                                defaultMessage='here' 
                                                id='here-word' description='here-word' /> :  'luciobertinchavez@gmail.com' 
                                                 }
                            </a>
                        </p>
                    
                </DialogContentText>

                <div className={classes.sendButtonContainer}>
                    <Button type='submit' variant='contained' color='primary' onClick={handleSubmit} disabled={loading} endIcon={<SendIcon />} >
                    <IntlMessage 
                        defaultMessage='Send' 
                        id='send-word' description='send-word' 
                    />
                        
                    </Button>
                    {loading && (
                                <CircularProgress size={30} thickness={5} className='progress' />
                            )}
                </div>
                
                <Button type='submit' variant='contained' color='secondary' onClick={handleClose} endIcon={<CloseIcon />} >
                <IntlMessage 
                        defaultMessage='Cancel' 
                        id='cancel-word' description='cancel-word' 
                    />
                    
                </Button>
            </DialogActions>
            
        </Dialog>
        <DialogFeedback open={openFeedback} error={APIError} onClose={handleCloseFeedBack} TransitionComponent={Transition} />
        </>
    )
}

const mapStateToProps = (state : RootState) => ({
    isThemeDark: state.ui.isThemeDark,
  })

export default connect(mapStateToProps)(injectIntl(EmailDialog));


