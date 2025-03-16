/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';

import carrinhoReducer from './reducers/carrinho';
import cartReducer from './reducers/cart';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    cart: cartReducer
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
