import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  notification: false,
  loading: false,
};
const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setLoading(state,action){
      state.loading=action.payload
    }
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
