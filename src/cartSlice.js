/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'for (let index = 0; index < array.length; index++) {
  const element = array[index];
  ;
}

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
