import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./interface";
const initialState: IAuth = {
    isAuthenticated: false,
    user: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        registerUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutUser :(state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})
export const { loginUser } = authSlice.actions
export default authSlice.reducer;