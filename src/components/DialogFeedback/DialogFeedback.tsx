import React, {useState, useEffect} from 'react'

// Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from "components/CustomButtons/Button";

export default function DialogFeedback(props) {

    return (
    <>
    <Dialog
        open={props.open && !props.error}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Message Sent Successfully"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you. We will be in touch.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Accept
          </Button>
        </DialogActions>
      </Dialog>

    <Dialog
        open={props.open && props.error}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{"!Something went wrong¡"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Looks like we got an error. Try send me the email directly to 
                
                <a 
                style={{textDecoration:'underline' ,marginLeft:'5px', color:'black'}}
                href="mailto:luciobertinchavez@gmail.com"
                >
                    luciobertinchavez@gmail.com 
                </a>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={props.onClose} color="primary">
            Accept
        </Button>
        </DialogActions>
    </Dialog>
    </>
    )
}