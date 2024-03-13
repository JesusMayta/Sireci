import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpenSidebar: false,
        isOpenViewForm: false,
        isOpenEditModal: false,
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

    // Sidebar
    openSidebar,
    closeSidebar
} = uiSlice.actions;