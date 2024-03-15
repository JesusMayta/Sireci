import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpenSidebar: false,
        isOpenViewForm: false,
        isOpenEditModal: false,
        isOpenDeleteModal: false
    },
    reducers: {
        openSidebar: (state) => {
            state.isOpenSidebar = true;
        },
        closeSidebar: (state) => {
            state.isOpenSidebar = false;
        },
        onOpenViewForm: (state) => {
            state.isOpenViewForm = true;
        },
        onCloseViewForm: (state) => {
            state.isOpenViewForm = false;
        },
        onOpenEditModal: (state) => {
            state.isOpenEditModal = true;
        },
        onCloseEditModal: (state) => {
            state.isOpenEditModal = false;
        },
        onOpenDeleteModal: (state) => {
            state.isOpenDeleteModal = true;
        },
        onCloseDeleteModal: (state) => {
            state.isOpenDeleteModal = false;
        }
    }
});

export const {

    // Form Add document
    onOpenViewForm,
    onCloseViewForm,

    //Form edit docs
    onOpenEditModal,
    onCloseEditModal,

    //Modal delete docs
    onOpenDeleteModal,
    onCloseDeleteModal,

    // Sidebar
    openSidebar,
    closeSidebar
} = uiSlice.actions;