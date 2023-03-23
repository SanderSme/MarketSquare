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
        },
        REMOVE_ITEM_FROM_CART: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
            state.numberOfItemsInCart = state.itemsInCart.length
        }
    }
})

export default cartSlice.reducer

const {ADD_ITEM_TO_CART} = cartSlice.actions;
const {REMOVE_ITEM_FROM_CART} = cartSlice.actions;

export const addSingleItemToCart = (productData) => (dispatch) => {
    dispatch(ADD_ITEM_TO_CART(productData))
}

export const removeItemFromCart = (productID) => (dispatch) => {
    dispatch(REMOVE_ITEM_FROM_CART(productID))
}