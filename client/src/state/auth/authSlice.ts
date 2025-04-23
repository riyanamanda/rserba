import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    role: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.email;
            state.role = action.payload.role;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
