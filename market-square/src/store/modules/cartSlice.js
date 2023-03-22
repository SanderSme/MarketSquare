import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
        numberOfItemsInCart: 0,
    },
    reducers: {
        ADD_ITEM_TO_CART: (state, action) => {
            state.itemsInCart = [...state.itemsInCart, action.payload]
            state.numberOfItemsInCart = state.itemsInCart.length
        }
    }
})

export default cartSlice.reducer

const {ADD_ITEM_TO_CART} = cartSlice.actions;

export const addSingleItemToCart = (productData) => (dispatch) => {
    dispatch(ADD_ITEM_TO_CART(productData))
} 