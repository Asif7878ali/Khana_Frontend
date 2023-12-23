import { createSlice } from "@reduxjs/toolkit";

const FoodcardSlice = createSlice({

    name: 'fooditemsCard',
    initialState: {
        items: []
    },

    reducers: {
        additems: (state, action) => {
            state.items.push(action.payload)
        },

        clearItems : (state) => {
            state.items = null
        }
    }
})

export const { additems , clearItems } = FoodcardSlice.actions
export default FoodcardSlice.reducer;
