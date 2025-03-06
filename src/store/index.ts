/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from './redurcers/carrinho'

const store = configureStore(
  {
    reducer:{
      carrinho: carrinhoReducer

    }
  }
)
