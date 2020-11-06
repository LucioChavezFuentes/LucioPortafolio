
import { createStyles, Theme } from '@material-ui/core/styles';

import StyleProps from 'types/StyleProps';


const styles = (theme: Theme) => createStyles({

  dialog: {
      
      top: '0px'
      
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
      marginLeft: '5px', 
      marginTop: '10px',
      flex:'2',

      '& p': {
          margin: '0',
          fontSize: '13px'
      },

      '& a':{
          marginLeft:'5px', 
          //color: theme.palette.text.primary,
          textDecoration: 'underline',
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

export default styles