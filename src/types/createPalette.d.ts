
// import Material UI Palette's interface and augment it if you want to add more colors or props beyond default in createMuiTheme() 
// in order to get the types when object Theme is used in styles
import { Palette } from '@material-ui/core/styles/createPalette'
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    dark: {
      primary: {
        main: React.CSSProperties['color'],
        light: React.CSSProperties['color'],
        dark: React.CSSProperties['color'],
      },
      secondary: {
        main: React.CSSProperties['color'],
      },
      text: {
        primary: React.CSSProperties['color'],
        secondary: React.CSSProperties['color'],
        disabled: React.CSSProperties['color'],
      },
      action: {
        active: React.CSSProperties['color'],
        hover: React.CSSProperties['color'],
        selected: React.CSSProperties['color'],
        disabled: React.CSSProperties['color'],
        disabledBackground: React.CSSProperties['color'],
      },

      background: {
        default: React.CSSProperties['color'],
        paper: React.CSSProperties['color'],
      },

      divider: React.CSSProperties['color'],

      textFieldInput: {
        label: React.CSSProperties['color'],
        outline: React.CSSProperties['color'],
      }
    }

    textFieldInput: {
      label: React.CSSProperties['color'],
      outline: React.CSSProperties['color'],
    }
  }
  interface PaletteOptions {
    dark?: Palette['dark']
    textFieldInput?:  Palette['textFieldInput']
}
}
/*
declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
      dark: PaletteColorOptions {
          primary: {
          main: React.CSSProperties['color'],
          light: React.CSSProperties['color'],
        },
        secondary: {
          main: React.CSSProperties['color'],
        },
      }
    }
    interface PaletteOptions {
      dark: any {
        primary: {
          main: React.CSSProperties['color'],
          light: React.CSSProperties['color'],
        },
        secondary: {
          main: React.CSSProperties['color'],
        },
      }
    }
}*/

