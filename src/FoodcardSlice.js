import { createSlice } from "@reduxjs/toolkit";

const FoodcardSlice = createSlice({

    name :'fooditemsCard',
    initialState : {
        items: []
    },

    reducers:{
        additems: (state, action)=>{
            state.items.push(action.payload)
        }
    }
})

export const {additems} = FoodcardSlice.actions
export default FoodcardSlice.reducer;
