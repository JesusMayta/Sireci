import { createSlice } from '@reduxjs/toolkit';

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        isLoadingDocuments: false,
        birthDocuments: [],
        marriageDocuments: [],
        deathCertificates: [],
        successMessage: undefined,
    },
    reducers: {
        onCheckingDocuments: (state) => {
            state.isLoadingDocuments = true;
            state.birthDocuments = [];
            state.marriageDocuments = [];
            state.deathCertificates = [];
            state.successMessage = undefined;
        },
        onGetBirthDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = payload;
            state.marriageDocuments = [];
            state.deathCertificates = [];
            state.successMessage = undefined;
        },
        onGetMarriageDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = [];
            state.marriageDocuments = payload;
            state.deathCertificates = [];
            state.successMessage = undefined;
        },
        onGetDeathCertificates: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = [];
            state.marriageDocuments = [];
            state.deathCertificates = payload;
            state.successMessage = undefined;
        },
        onSuccessRegisterDoc: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.successMessage = payload;
        }
    }
});

export const { onGetBirthDocuments, onCheckingDocuments, onGetMarriageDocuments, onGetDeathCertificates, onSuccessRegisterDoc } = documentsSlice.actions;