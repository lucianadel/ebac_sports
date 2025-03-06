import { isAction } from "@reduxjs/toolkit"
import{createSlice, PayloadAction} fron '@reduxjs/toolkit'

import{Produto} from '../../App'

type carrinhoState = {
  itens: produto[]
}

const initialState: carrinhoState = {
  itens:[]
}


const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar:(state: { itens: any[] }, action: PayloadAction<produto>) =>{
      const produto = action.payload;

      if (state.itens.find((p: { id: any }) => p.id === produto.id)){
        alert('item já adicionado')
      } else{
        state.itens.push(produto)
      }
    }
  }

})

  export const {adicionar} = carrinhoSlice.actions
  export default carrinhoSlice.reducer


