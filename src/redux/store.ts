import {configureStore} from '@reduxjs/toolkit';
//import { combineReducers } from 'redux';

import uiReducer from './slices/uiSlice';

/*const rootReducer = combineReducers({
    uiReducer
})*/

const store = configureStore({
    reducer: {
        ui: uiReducer
    }
  })

export default store;