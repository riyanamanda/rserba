import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    name: string | null;
    email: string | null;
    role: string | null;
    isAuthenticated: boolean;
}

const user: AuthState = {
    name: null,
    email: null,
    role: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: user,
    reducers: {
        setUserData(state, action) {
            const { name, email, role } = action.payload;
            state.name = name;
            state.email = email;
            state.role = role;
            state.isAuthenticated = true;
        },
        clearUserData(state) {
            state.name = null;
            state.email = null;
            state.role = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
