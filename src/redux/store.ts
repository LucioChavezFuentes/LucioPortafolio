import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { persistStore, persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'

/*
LocalStorage vs LocalForage

LocalStorage API is synchronous and accepts simple key value strings.
LocalForage leverage this simple interface with Promises to get/set values and gives the ability to store more than converted strings as data.

localForage library is  recommended for web (this particular project)
check Storage Engines for different environments: https://www.npmjs.com/package/redux-persist/v/5.3.0#storage-engines

but if you don't want to spend much time about storage engines and choose whats the best for you
and you only want simple persistence then just uncomment "import storage from 'redux-persist/lib/storage'" 
and use 'storage' instead in persistConfig.
*/

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
    /*getDefaultMiddleware is useful if you want to add some custom middleware, 
    but also still want to have the default middleware added as well*/
    middleware: getDefaultMiddleware({
      //ignores redux persist actions
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  })

export const persistor = persistStore(store)

export default store;