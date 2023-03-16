import { createSlice } from "@reduxjs/toolkit";

//slice
    //name
    //initial state
    //reducers //those are the functions which amend or change the state

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        singleProduct: null,
        total: 0
    },
    reducers:{ //here we declare the functions which amend our state
        SET_PRODUCTS:(state, action) => { //state is current state of this time - action: it will have the new state
            state.products = action.payload
        },
        SET_SINGLE_PRODUCT:(state, action) => {
            state.singleProduct = action.payload
        }
    }
})    

export default productsSlice.reducer

//actions //API calls NB: we do not change the state here!
const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions

//Fetch all products
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        console.log(data.products);
        dispatch(SET_PRODUCTS(data.products));
    } catch (e) {
        //handle any error
        return console.error(e);
    }
}

//Fetch single product by id
export const fetchSingleProduct = (id) => async (dispatch) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        console.log(data);
        dispatch(SET_SINGLE_PRODUCT(data));
    } catch (e) {
        //handle any error
        return console.error(e);
    }
}