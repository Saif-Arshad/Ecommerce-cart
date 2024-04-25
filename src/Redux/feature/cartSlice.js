"use client"

import { createSlice } from '@reduxjs/toolkit'
import data from '../../Products.json'

const initialState = {
  cart:[],
  Favorite:[],
  item:data.products,
  totalPrice:0,
  cartSection:false,
  favState:true
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFav:(state,action)=>{
        let find = state.Favorite.findIndex((item) => item.id === action.payload.id);
        if (find !== -1) {
         alert("already in your favorite section");
          return state;
        } else {
          state.Favorite.push({ ...action.payload, quantity: 1 });
          
    }},
    addCart:(state,action)=>{
        let find = state.cart.findIndex((item)=>item.id ===action.payload.id)
        if (find !== -1) {
            state.cart[find].quantity += 1; 
        } else {
            state.cart.push({ ...action.payload, quantity: 1 }); 
        }
    state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

    },
    showCart:(state,action)=>{
        state.cartSection = action.payload
    },
    showFav:(state,action)=>{
        state.favState = action.payload
    },
    removeCartItem: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
        state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    removeFavItem: (state, action) => {
        state.Favorite = state.Favorite.filter(item => item.id !== action.payload.id);
      },
  },
})

export const { addCart,showCart,removeCartItem,addFav,showFav,removeFavItem} = cartSlice.actions

export default cartSlice.reducer