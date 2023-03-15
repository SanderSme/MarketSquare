import { createSlice } from "@reduxjs/toolkit";

//slice
    //name
    //initial state
    //reducers //those are the functions which amend or change the state

const listingSlice = createSlice({
    name: "listings",
    initialState: {
        products: [],
        total: 0
    },
    reducers:{ //here we declare the functions which amend our state
        SET_PRODUCTS:(state, action) => { //state is current state of this time - action: it will have the new state
            state.products = action.payload
        }
    }
})    

export default listingSlice.reducer

//actions //API calls NB: we do not change the state here!
const {SET_PRODUCTS} = listingSlice.actions

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