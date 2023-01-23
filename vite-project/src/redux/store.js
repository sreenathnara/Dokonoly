import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import costHeadingReducer from './slices/costHeadingSlice';



const store = configureStore({
    reducer: {
        user: userReducer,
        costheading: costHeadingReducer
    },
    // devTools: process.env.NODE_ENV !== 'production',
});

export default store;