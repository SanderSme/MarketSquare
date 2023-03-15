//This will help you create the redux store
import {configureStore} from '@reduxjs/toolkit';

//it will help you to combine all the modules E.G(products, productDetail etc)
import { combineReducers } from '@reduxjs/toolkit';
import listings from './modules/listings';

//here I am combining my modules
const reducer = combineReducers({
    //list my modules here
    listings
});

//here I am creating my store
const index = configureStore({
    reducer
})

export default index
