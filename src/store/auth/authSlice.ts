import { createSlice } from '@reduxjs/toolkit';

interface authOptions {
    status: string | undefined;
    user: Object | undefined;
    errorMessage: string | undefined;
};

const initialState: authOptions = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        loginUser: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        logoutUser: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        }
    }
});

export const { loginUser, onChecking } = authSlice.actions;