import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpenSidebar: false,
        isOpenViewForm: false,
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
        }
    }
});

export const {

    // Form Add document
    onOpenViewForm,
    onCloseViewForm,

    // Sidebar
    openSidebar,
    closeSidebar
} = uiSlice.actions;