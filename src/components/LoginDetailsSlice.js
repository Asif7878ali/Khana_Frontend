import { createSlice } from "@reduxjs/toolkit";

const LoginDatailSlice = createSlice({
    name: 'loginDetail',
    initialState: {

        data: null
    },
    reducers: {
        addLoginUsers: (state, action) => {
            state.data = action.payload;
        },

        clearUsers: (state) => {
            state.data = null
        }

    }
})
export const { addLoginUsers, clearUsers } = LoginDatailSlice.actions;
export default LoginDatailSlice.reducer;