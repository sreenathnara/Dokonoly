import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import costHeadingReducer from './slices/costHeadingSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({ user: userReducer, costHeading: costHeadingReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            immutableCheck: false,
        }),
    // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;