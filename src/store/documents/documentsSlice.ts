import { createSlice } from '@reduxjs/toolkit';
import { ActiveCertificateBirth, ActiveCertificateDeath, ActiveCertificateMarriage } from '../../helpers';

const PersonObject = { _id: '', per_names: '', per_first_lastname: '', per_state: false, per_document: '', per_document_number: '' };

const activeCertificateMarriage: ActiveCertificateMarriage = { _id: '', mar_book: '', mar_husband: PersonObject, mar_wife: PersonObject, mar_state: false, user_user_id: '', mar_date: '' };

const activeCertificateDeath: ActiveCertificateDeath = { _id: '', dea_book: '', person_per_id: PersonObject, user_user_id: '', dea_date: '' };

const activeCertificateBirth: ActiveCertificateBirth = { _id: '', birth_book: '', birth_father: PersonObject, birth_mother: PersonObject, person_per_id: PersonObject, birth_state: false, birth_date: '', user_user_id: '' };

export const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        isLoadingDocuments: false,
        isUpdateDocument: false,
        isDeletingDocument: false,
        isCreatingDocument: false,
        birthDocuments: [],
        marriageDocuments: [],
        deathCertificates: [],
        activeCertificateMarriage,
        activeCertificateBirth,
        activeCertificateDeath,
        successMessage: undefined
    },
    reducers: {
        onCheckingDocuments: (state) => {
            state.isLoadingDocuments = true;
        },
        onUpdatingDocument: (state, { payload }) => {
            state.isUpdateDocument = payload;
        },
        onDeletingDocument: (state, { payload }) => {
            state.isDeletingDocument = payload;
        },
        onCreatingDocument: (state, { payload }) => {
            state.isCreatingDocument = payload;
        },
        onGetBirthDocuments: (state, { payload }) => {
            state.isLoadingDocuments = false;
            state.birthDocuments = payload;
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
        onSelectCertificateMarriage: (state, { payload }) => {
            state.activeCertificateMarriage = payload;
        },
        onSelectCertificateBirth: (state, { payload }) => {
            state.activeCertificateBirth = payload;
        },
        onSelectCertificateDeath: (state, { payload }) => {
            state.activeCertificateDeath = payload;
        },
        onShowAlertMessage: (state, { payload }) => {
            state.successMessage = payload;
        },
    }
});

export const {
    onCheckingDocuments,
    onDeletingDocument,
    onGetBirthDocuments,
    onGetDeathCertificates,
    onGetMarriageDocuments,
    onSelectCertificateBirth,
    onSelectCertificateMarriage,
    onSelectCertificateDeath,
    onUpdatingDocument,
    onShowAlertMessage
} = documentsSlice.actions;