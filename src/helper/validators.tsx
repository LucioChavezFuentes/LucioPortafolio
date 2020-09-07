import React from 'react';
import IntlMessage from 'helper/IntlMessages';

interface Errors {
    email?: any;
    name?: any;
    message?: any;
}

export const isEmpty = (string: string) => {
    if (string.trim() === '') {
        return true
    } else {
        return false
    }
};

export const isEmail = (email: string) => {
    // eslint-disable-next-line
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regExp)){
        return true;
    } else { 
        return false;
    }
};

export const validateMessageData = (inputs: any) => {

    const errors : Errors = {};

    if(isEmpty(inputs.email)) {
        errors.email = <IntlMessage 
        defaultMessage="Can't be blank. Which email should I respond?" 
        description= 'error-email-form-1'
        id= "error-email-form-1" />
    } else if(!isEmail(inputs.email)) {
        errors.email =  <IntlMessage 
        defaultMessage='Please provide a valid email address' 
        description= 'error-email-form-2'
        id= "error-email-form-2" />;
    }

    if(isEmpty(inputs.name)) {
        errors.name = <IntlMessage 
        defaultMessage="Can't be blank. Please I would like to know your name"
        description= 'error-name-form'
        id= "error-name-form" />;
    }

    if(isEmpty(inputs.message)) {
        errors.message = <IntlMessage 
        defaultMessage="Can't be blank. You can't have an email without a message"
        description= 'error-message-form'
        id= "error-message-form" />;
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false 
    }
};