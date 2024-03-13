import { createSlice } from '@reduxjs/toolkit';
import { AuthOptions } from '../../helpers';

const initialState: AuthOptions = {
    status: 'not-authenticated',
    userSession: {
        id: '',
        name: '',
        lastName: '',
        address: '',
        email: '',
        isAdmin: 0,
        isActive: 1,
        username: '',
        password: '',
    },
    errorMessage: undefined
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onCheckingAuthSession: (state) => {
            state.status = 'checking';
            state.userSession = initialState.userSession;
            state.errorMessage = undefined;
        },
        onLoginUserSession: (state, { payload }) => {
            state.status = 'authenticated';
            state.userSession = {
                id: payload._id,
                name: payload.user_name,
                lastName: payload.user_firts_lastname,
                address: payload.user_address,
                email: payload.user_email,
                isAdmin: payload.user_is_admin,
                isActive: payload.user_is_active,
                username: payload.user_username,
                password: payload.user_password
            };
            state.errorMessage = undefined;
        },
        onLogoutUserSession: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.userSession = initialState.userSession
            state.errorMessage = payload;
        }
    }
});

export const { onLoginUserSession, onCheckingAuthSession, onLogoutUserSession } = authSlice.actions;