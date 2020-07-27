//redux-toolkit's CreateReducer allows to "mutate" the state without structuring consequences
//See more: https://redux-toolkit.js.org/usage/usage-guide
/*keep in mind that:

The "mutative" code only works correctly inside of createReducer function
won't let you mix "mutating" the draft state and also returning a new state value
*/
import  {createSlice} from '@reduxjs/toolkit';
import MexicoFlag from 'assets/img/flags/MexicoFlag.svg'
import USFlag from 'assets/img/flags/U.SFlag.svg'

interface UIState {
    isThemeDark: boolean;
    lenguage: {
        locale: 'en' | 'es',
        icon: any
    }
}
const initialState : UIState = {
    isThemeDark: false,
    lenguage: {
        locale: 'en',
        icon: USFlag
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.isThemeDark = true
      },
        setLightTheme(state) {
            state.isThemeDark = false
      }
    }
  })
  
  export const { setDarkTheme, setLightTheme } = uiSlice.actions
  
  export default uiSlice.reducer

  /*export const switchTheme = createAction('SWITCH_THEME');
export const setLightTheme = createAction('SET_LIGHT_THEME');
export const setDarkTheme = createAction('SET_DARK_THEME');



export default createReducer(state, {

    [setDarkTheme.type]: (state, action) => {
        //CreateReducer allows to "mutate" the state without consequences
        state.isThemeDark = true
    },

    [setLightTheme.type]: (state) => {
        state.isThemeDark = false
    },
})*/