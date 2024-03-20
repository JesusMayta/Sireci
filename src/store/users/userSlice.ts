import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoadingUsers: false,
        users: []
    },
    reducers: {
        onCheckingUsers: (state) => {
            state.isLoadingUsers = true;
            state.users = [];
        },
        onLoadUsers: (state, { payload }) => {
            state.isLoadingUsers = false;
            state.users = payload
        },
        setEmptyUsers: (state) => {
            state.isLoadingUsers = false;
            state.users = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLoadUsers, setEmptyUsers, onCheckingUsers } = userSlice.actions;