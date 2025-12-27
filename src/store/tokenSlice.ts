import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PriceState = Record<string, number>

const initialState: PriceState = {}

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<{ id: string; price: number }>) => {
      state[action.payload.id] = action.payload.price
    }
  }
})

export const { updatePrice } = tokenSlice.actions
export default tokenSlice.reducer
