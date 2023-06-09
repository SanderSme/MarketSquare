import { createSlice } from "@reduxjs/toolkit";
import { setLoadingState } from "./loaderSlice";

//slice
    //name
    //initial state
    //reducers //those are the functions which amend or change the state

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        singleProduct: null,
        isError: false
    },
    reducers:{ //here we declare the functions which amend our state
        SET_PRODUCTS:(state, action) => { //state is current state of this time - action: it will have the new state
            state.products = action.payload
        },
        SET_SINGLE_PRODUCT:(state, action) => {
            state.singleProduct = action.payload
        },
        SET_ERROR:(state, action) => {
            state.isError = action.payload
        }
    }
})    

export default productsSlice.reducer

//actions //API calls NB: we do not change the state here!
const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions
const {SET_ERROR} = productsSlice.actions

//Fetch all products
export const fetchProducts = () => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        dispatch(SET_PRODUCTS(data.products));
        dispatch(setLoadingState(false))
    } catch (e) {
        //handle any error
        return console.error(e);
    }
}

//Fetch single product by id
export const fetchSingleProduct = (id) => async (dispatch) => {
    dispatch(setLoadingState(true))
    let response
    try {
        response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        dispatch(SET_SINGLE_PRODUCT(data));
        dispatch(setLoadingState(false))
    } catch (e) {
        //handle any error
        return console.error(e.message);
    }
    if(response.ok){
        dispatch(handleErrorResponse(false))
    } else {
        dispatch(handleErrorResponse(true))
    }
}

export const handleErrorResponse = (APIResponseStatus) => (dispatch) => {
    dispatch(SET_ERROR(APIResponseStatus))
}