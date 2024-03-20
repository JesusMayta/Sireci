import { createSlice } from '@reduxjs/toolkit';

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        isLoadingDocuments: false,
        birthDocuments: [],
    },
    reducers: {
        onCheckingDocuments: (state) => {
            state.isLoadingDocuments = true;
        },
        onGetBirthDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = payload;
        },
    }
});

export const { onGetBirthDocuments, onCheckingDocuments } = documentsSlice.actions;