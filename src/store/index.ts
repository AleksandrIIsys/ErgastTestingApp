import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import {driverReducer} from './reducers/drivers';

const rootReducer = combineReducers({
  driverReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['driverReducer'],

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware({
        thunk: true,
        immutableCheck: false,
        serializableCheck: false,
      }).concat(api.middleware);

      return middlewares;
    },
  });
export const store = setupStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootReducerType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof setupStore>;
export type StoreDispatchType = StoreType['dispatch'];
