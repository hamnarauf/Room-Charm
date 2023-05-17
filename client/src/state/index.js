import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isNavMenuOpen:false,
  isTrackingOpen:false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setIsNavMenuOpen: (state) => {
      state.isNavMenuOpen = !state.isNavMenuOpen;
      console.log("nav state", state.isNavMenuOpen);
    },

    setIsTrackingOpen: (state) => {
      state.isTrackingOpen = !state.isTrackingOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setIsNavMenuOpen,
  setIsTrackingOpen
} = cartSlice.actions;

export default cartSlice.reducer;
