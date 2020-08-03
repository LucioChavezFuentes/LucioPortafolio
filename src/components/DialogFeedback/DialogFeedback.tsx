import React from 'react'

// Material UI Imports
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from "components/CustomButtons/Button";

import IntlMessage from 'helper/IntlMessages';

export default function DialogFeedback(props) {

    const {open, error, onClose, ...rest} = props;

    return (
    <>
    <Dialog
        open={open && !error}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
      >
        <DialogTitle id="alert-dialog-title">
        <IntlMessage 
              defaultMessage="!Message Sent Successfully¡" 
              description= 'alert-dialog-title-success'
              id= "alert-dialog-title-success" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <IntlMessage 
              defaultMessage="Thank you. We will be in touch." 
              description= 'send-email-form-success'
              id= "send-email-form-success" />
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            <IntlMessage 
              defaultMessage="Accept" 
              description= 'accept-word'
              id= "accept-word" />
          </Button>
        </DialogActions>
      </Dialog>

    <Dialog
        open={open && error}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
    >
        <DialogTitle id="alert-dialog-title">
          <IntlMessage 
              defaultMessage="!Something went wrong¡" 
              description= 'alert-dialog-title-error'
              id= "alert-dialog-title-error"
          />
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <IntlMessage 
              defaultMessage="Looks like we got an error. Try send me the email directly to" 
              description= 'send-email-form-error'
              id= "send-email-form-error" />
                
                <a 
                style={{textDecoration:'underline', marginLeft:'5px',}}
                href="mailto:luciobertinchavez@gmail.com"
                >
                    luciobertinchavez@gmail.com 
                </a>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose} color="primary">
          <IntlMessage 
              defaultMessage="Accept" 
              description= 'accept-word'
              id= "accept-word" />
            
        </Button>
        </DialogActions>
    </Dialog>
    </>
    )
}