//redux-toolkit's CreateReducer allows to "mutate" the state without structuring consequences
//See more: https://redux-toolkit.js.org/usage/usage-guide
/*keep in mind that:

The "mutative" code only works correctly inside of createReducer function
won't let you mix "mutating" the draft state and also returning a new state value
*/
import  {createSlice} from '@reduxjs/toolkit';

interface UIState {
    isThemeDark: boolean;
    locale: 'enUS' | 'esMX';
}
const initialState : UIState = {
    isThemeDark: false,
    locale: 'enUS',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.isThemeDark = true
        },
        setLightTheme(state) {
            state.isThemeDark = false
        },

        changeLenguage(state, {payload}) {
            state.locale = payload.locale
        },
    }
  })
  
  export const { setDarkTheme, setLightTheme, changeLenguage } = uiSlice.actions
  
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