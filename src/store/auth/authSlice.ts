import { createSlice } from '@reduxjs/toolkit';

interface authOptions {
    status: string | undefined;
    user: {
        name: string | undefined;
        uid: number | undefined;
        role: string | undefined;
    }
    errorMessage: string | undefined;
};

const initialState: authOptions = {
    status: 'not-authenticated',
    user: {
        name: '',
        uid: 0,
        role: 'user'
    },
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {
                name: '',
                uid: 0,
                role: 'user'
            };
            state.errorMessage = undefined;
        },
        loginUser: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        logoutUser: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {
                name: '',
                uid: 0,
                role: 'user'
            };
            state.errorMessage = payload;
        }
    }
});

export const { loginUser, onChecking, logoutUser } = authSlice.actions;