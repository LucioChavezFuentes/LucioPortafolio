
import StyleProps from 'types/StyleProps';
import { Theme } from '@material-ui/core';

type Type = 
    'background' | 
    'text' | 
    'paper' | 
    'primary' | 
    'primary-light' | 
    'primary-dark' | 
    'secondary' | 
    'secondary-light' | 
    'secondary-dark' |
    'icon'

//const defaultType : Type = 'text' as Type

const getDarkOrLightTheme = ({palette}: Theme, type : Type, {isThemeDark} : StyleProps ) => {

    // If you want to add more types modify type 'Type' above
    // If you want to add more colors modify the createMuiTheme
    switch (type) {
        case 'background':
            return isThemeDark ? palette.dark.background.default : palette.background.default

        case 'text':
            return isThemeDark ? palette.dark.text.primary : palette.text.primary
            
        case 'paper':
            return isThemeDark ? palette.dark.background.paper : palette.background.paper
        
        case 'primary': 
            return isThemeDark ? palette.dark.primary.main : palette.primary.main

        case 'primary-light':
            return isThemeDark ? palette.dark.primary.light : palette.primary.light
        
        case 'primary-dark':
            //There is no dark.primary.dark, if you want to add it go to createMuiTheme 
            return isThemeDark ? palette.dark.primary.dark : palette.primary.dark
        
        case 'secondary':
            return isThemeDark ? palette.dark.secondary.main : palette.secondary.main
        
        case 'secondary-light':
            //There is no dark.secondary.light, if you want to add it go to createMuiTheme
            return isThemeDark ? palette.dark.secondary.main : palette.secondary.light
        
        case 'secondary-dark':
            return isThemeDark ? palette.dark.secondary.main : palette.secondary.light

        case 'icon':
            return isThemeDark ? palette.background.default : palette.dark.background.default

        default: 
            return isThemeDark ? palette.dark.primary.main : palette.primary.main
    }
} 

export default getDarkOrLightTheme;