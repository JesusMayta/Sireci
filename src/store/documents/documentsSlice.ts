import { createSlice } from '@reduxjs/toolkit';

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        isLoadingDocuments: false,
        birthDocuments: [],
        marriageDocuments: [],
        deathCertificates: [],
    },
    reducers: {
        onCheckingDocuments: (state) => {
            state.isLoadingDocuments = true;
        },
        onGetBirthDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = payload;
        },
        onGetMarriageDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.marriageDocuments = payload;
        },
        onGetDeathCertificates: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.deathCertificates = payload;
        }
    }
});

export const { onGetBirthDocuments, onCheckingDocuments, onGetMarriageDocuments, onGetDeathCertificates } = documentsSlice.actions;