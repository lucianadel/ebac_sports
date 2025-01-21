import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from './feature/cart/cartApi'

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware)
})

setupListeners(store.dispatch)
