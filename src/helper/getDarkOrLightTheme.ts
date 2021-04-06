
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
    'icon' |
    'outlineInput' |
    'label' |
    'divider' |
    'text-secondary' |
    'autofillInput' |
    'header'

//const defaultType : Type = 'text' as Type
// Just provide the MUI's theme object as the first argument and the apropiate type element where the theme should be apply to.
const getDarkOrLightTheme = ({palette}: Theme, type : Type, {isThemeDark} : StyleProps ) => {

    // If you want to add more types modify type 'Type' above
    // If you want to add more colors modify the createMuiTheme
    switch (type) {
        case 'background':
            return isThemeDark ? palette.dark.background.default : palette.background.default

        case 'text':
            return isThemeDark ? palette.dark.text.primary : palette.text.primary
        
        case 'text-secondary':
            return isThemeDark ? palette.dark.text.secondary : palette.text.secondary
            
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
            return isThemeDark ? palette.dark.secondary.light : palette.secondary.light
        
        case 'secondary-dark':
            return isThemeDark ? palette.dark.secondary.dark : palette.secondary.dark

        case 'icon':
            return isThemeDark ? palette.background.default : palette.dark.background.default
        
        case 'outlineInput':
            return isThemeDark ? palette.dark.textFieldInput.outline : palette.textFieldInput.outline

        case 'label':
            return isThemeDark ? palette.dark.textFieldInput.label : palette.textFieldInput.label

        case 'divider':
            return isThemeDark ? palette.dark.divider : palette.divider
        
        case 'autofillInput':
            return isThemeDark ? palette.dark.textFieldInput.autoFill : palette.textFieldInput.autoFill
        
        case 'header':
            return isThemeDark ? '#212121' : palette.primary.main

        default:
            return isThemeDark ? palette.dark.primary.main : palette.primary.main
    }
} 

export default getDarkOrLightTheme;