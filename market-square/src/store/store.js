import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './modules/products';
import loaderSlice from './modules/loaderSlice';

//here I am combining my modules
const reducer = combineReducers({
    //list my modules here
    products: productsSlice,
    loader: loaderSlice
});

//here I am creating my store
const index = configureStore({
    reducer
})

export default index
