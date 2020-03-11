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

// Material Icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SendIcon from '@material-ui/icons/Send';

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

const EmailDialog:React.FC<Props> = (props) => {

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
    const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState<Errors>({});

    const handleOpen = () => {
        setOpen(true);
      }

    const handleClose = () => {
        setOpen(false)
        setSubmitted(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const {errors, valid} = validateMessageData(inputs)
        if(valid){

            emailjs.send("gmail", "template_86OdwYcX", inputs, "user_8GdofLfZlnlQTza77rkLM") 
                .then(res => {
                    console.log("mono saludado")
                })
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        } else {
            setErrors(errors)
        }
    }

    const {name, email, message, subject} = inputs;

    function isSubmittedAndBlank(field){ 
        return (!submitted ? false : !field ? true : false)
    }

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

        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <form onSubmit={handleSubmit} >
                    <GridContainer spacing={medium} justify="center">

                        <GridItem>
                            <TextField
                                name='name'
                                type='text'
                                label='Name'
                                error={errors.name ? true : false}
                                helperText={errors.name}
                                value={name}
                                onChange={handleChange}
                            />
                        </GridItem>

                        <GridItem>
                            <TextField
                                name='email'
                                type='text'
                                label='Email'
                                error={!submitted ? false : true}
                                helperText={"Can't be blank. I won't spam I promise"}
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
                                fullWidth
                            />
                        </GridItem>

                        <GridItem>
                            <TextField
                                name='message'
                                multiline
                                label="What's on your mind?"
                                error={email ? false : true}
                                helperText={"Can't be blank. I won't spam I promise"}
                                value={message}
                                onChange={handleChange}
                                fullWidth
                            />
                        </GridItem>
                    
                    </GridContainer>
                </form>
            </DialogContent>

            <DialogActions>
                <Button type='submit' variant='contained' color='primary' endIcon={<SendIcon />} >
                    Send
                </Button>
            </DialogActions>
            
        </Dialog>
        </>
    )
}

export default EmailDialog;


