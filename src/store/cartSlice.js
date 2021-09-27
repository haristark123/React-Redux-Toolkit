import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
      },

    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      console.log(id);
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price  
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
