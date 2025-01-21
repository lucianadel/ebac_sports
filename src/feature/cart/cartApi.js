import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
  reducerPath: 'cart',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: () => '/cart'
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: '/cart',
        method: 'POST',
        body: item
      }),
      invalidatesTags: ['Cart']
    })
    // ... outros endpoints
  })
})
