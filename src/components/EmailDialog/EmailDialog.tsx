import React, {useState, useEffect} from 'react'

// Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

// Helper Imports
import useForm from 'helper/useForm';

interface Props {
    open: boolean;
    handleClose: () => void;
}

interface inputsProps {
    name?: string
    email?: string 
    message?: string;
}

const EmailDialog:React.FC<Props> = (props) => {

    const initialInputsState = {}
    const [inputs, setInputs] = React.useState<inputsProps>(initialInputsState);
    const [submitted, setSubmitted] = useState(false);

    /*useEffect(() => {

        return () => {
            setSubmitted(false)
        }
    })*/

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const {name, email, message} = inputs;
    function isSubmittedAndBlank(field){ 
        return (!submitted ? false : !field ? true : false)
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogContent>
                <form style={{display: 'block'}}>
                    <TextField
                        name='name'
                        type='text'
                        label='Name'
                        error={isSubmittedAndBlank(name)}
                        helperText={"Name can't be blank. Please provide a name, everyone and everything have a name"}
                        value={name}
                        onChange={handleChange}
                    />

                    <TextField
                        name='email'
                        type='text'
                        label='Email'
                        error={email ? false : true}
                        helperText={"Can't be blank. I won't spam I promise"}
                        value={email}
                        onChange={handleChange}
                    />

                    <TextField
                        name='message'
                        multiline
                        label="What's on your mind?"
                        error={email ? false : true}
                        helperText={"Can't be blank. I won't spam I promise"}
                        value={message}
                        onChange={handleChange}
                    />
                </form>
            </DialogContent>
            
        </Dialog>
    )
}

export default EmailDialog;


