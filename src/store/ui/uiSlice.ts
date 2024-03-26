import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpenSidebar: false,
        isOpenViewForm: false,
        isOpenEditModal: false,
        isOpenDeleteModal: false,
        textToSort: '',
    },
    reducers: {
        onOpenSidebar: (state, { payload }) => {
            state.isOpenSidebar = payload;
        },
        onOpenViewForm: (state, { payload }) => {
            state.isOpenViewForm = payload;
        },
        onOpenEditModal: (state, { payload }) => {
            state.isOpenEditModal = payload;
        },
        onOpenDeleteModal: (state, { payload }) => {
            state.isOpenDeleteModal = payload;
        },
        onSetTextToSort: (state, { payload }) => {
            state.textToSort = payload;
        },
    }
});

export const {

    // Form Add document
    onOpenViewForm,

    //Form edit docs
    onOpenEditModal,

    //Modal delete docs
    onOpenDeleteModal,

    // Sidebar
    onOpenSidebar,

    onSetTextToSort
} = uiSlice.actions;