import { createSlice } from '@reduxjs/toolkit';
import { ActiveCertificateMarriage } from '../../helpers';


const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '', per_document_number: '' };

const activeCertificateMarriage: ActiveCertificateMarriage = {
    _id: '',
    mar_book: '',
    mar_husband: PersonObject,
    mar_wife: PersonObject,
    mar_state: false,
    user_user_id: '',
    mar_date: '',
};

const activeCertificateDeath = {
    _id: '',
    dea_book: '',
    dea_state: false,
    person_per_id: PersonObject,
    user_user_id: '',
    dea_date: ''
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        isLoadingDocuments: false,
        birthDocuments: [],
        marriageDocuments: [],
        deathCertificates: [],
        activeCertificateMarriage,
        activeCertificateBirth: {},
        activeCertificateDeath,
        successMessage: undefined
    },
    reducers: {
        onCheckingDocuments: (state) => {
            state.isLoadingDocuments = true;
            state.successMessage = undefined;
        },
        onGetBirthDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = payload;
            state.successMessage = undefined;
        },
        onGetMarriageDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.marriageDocuments = payload;
            state.successMessage = undefined;
        },
        onGetDeathCertificates: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.deathCertificates = payload;
            state.successMessage = undefined;
        },
        onSuccessRegisterDoc: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.successMessage = payload;
        },
        onSelectCertificateMarriage: (state, { payload }) => {
            state.activeCertificateMarriage = payload;
        },
        onSelectCertificateBirth: (state, { payload }) => {
            state.activeCertificateBirth = payload;
        },
        onSelectCertificateDeath: (state, { payload }) => {
            state.activeCertificateDeath = payload;
        }
    }
});

export const {
    onCheckingDocuments,
    onGetBirthDocuments,
    onGetDeathCertificates,
    onGetMarriageDocuments,
    onSelectCertificateBirth,
    onSelectCertificateMarriage,
    onSuccessRegisterDoc,
    onSelectCertificateDeath
} = documentsSlice.actions;