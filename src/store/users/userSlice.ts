import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoadingUsers: false,
        users: [],
        isCreatingUser: false,
        messageAlert: undefined,
    },
    reducers: {
        onCheckingUsers: (state) => {
            state.isLoadingUsers = true;
            state.users = [];
            state.isCreatingUser = false;
        },
        onLoadUsers: (state, { payload }) => {
            state.isLoadingUsers = false;
            state.users = payload
            state.isCreatingUser = false;
        },
        setEmptyUsers: (state) => {
            state.isLoadingUsers = false;
            state.users = [];
            state.isCreatingUser = false;
        },
        onRegisterNewUser: (state, { payload }) => {
            state.isCreatingUser = payload;
        },
        onSendMessageAlert: (state, { payload }) => {
            state.messageAlert = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLoadUsers, setEmptyUsers, onCheckingUsers, onRegisterNewUser, onSendMessageAlert } = userSlice.actions;