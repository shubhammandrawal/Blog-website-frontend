import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSLice from "./authSLice";

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage  from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducers = combineReducers({
    auth: authSLice
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware({
        serialzableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
    }
})

export let persistor = persistStore(store)