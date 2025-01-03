import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    email: string | null;
    role: string | null;
    token: string | null;
    isAuthenticated: boolean;
}

const user: AuthState = {
    email: null,
    role: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: user,
    reducers: {
        setUserData(state, action) {
            const { email, role, token } = action.payload;
            state.email = email;
            state.role = role;
            state.token = token;
            state.isAuthenticated = true;
        },
        clearUserData(state) {
            state.email = null;
            state.role = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
