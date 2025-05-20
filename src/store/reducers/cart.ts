import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Game>) {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
