
interface Errors {
    email?: string;
    name?: string;
    message?: string;
}

export const isEmpty = (string: string) => {
    if (string.trim() === '') {
        return true
    } else {
        return false
    }
};

export const isEmail = (email: string) => {
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
        errors.email = "Can't be blank. Which email should I respond?";
    } else if(!isEmail(inputs.email)) {
        errors.email = 'Please provide a valid email address';
    }

    if(isEmpty(inputs.name)) {
        errors.name = "Can't be blank. Please I would like to know your name";
    }

    if(isEmpty(inputs.message)) {
        errors.message = "Can't be blank. You can't have an email without a message";
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false 
    }
};