import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "../reducers/CartReducers";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux'
const reducer = combineReducers({
   cartReducers
})


 export const store = configureStore({reducer})
