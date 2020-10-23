import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { persistStore, persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import localForage from "localforage"

import rootReducer from './rootReducer';

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }

const persistConfig = {
    key: 'root',
    storage: localForage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export type AppDispatch = typeof store.dispatch


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  })

export const persistor = persistStore(store)

export default store;