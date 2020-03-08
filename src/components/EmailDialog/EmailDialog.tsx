import React, {useState} from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';


interface Props {
    open: boolean;
    handleClose: () => void;
}

const EmailDialog:React.FC<Props> = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = () => {

    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogContent>
                <form>
                    <TextField
                        name='name'
                        type='text'
                        label='Name'
                        helperText={"Name can't be blank. Please provide a name, everyone and everything have a name"}
                        error={name ? false : true}
                        value={name}
                        onChange={handleChange}
                    />
                </form>
            </DialogContent>
            
        </Dialog>
    )
}

export default EmailDialog;


