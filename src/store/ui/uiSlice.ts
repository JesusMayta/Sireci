import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isOpenSidebar: false,
        isOpenViewAddDocument: false,
    },
    reducers: {
        openSidebar: (state) => {
            state.isOpenSidebar = true;
        },
        closeSidebar: (state) => {
            state.isOpenSidebar = false;
        },
        openAddFormDocument: (state) => {
            state.isOpenViewAddDocument = true;
        },
        closeFormDocument: (state) => {
            state.isOpenViewAddDocument = false;
        }
    }
});

export const {

    // Form Add document
    openAddFormDocument,
    closeFormDocument,

    // Sidebar
    openSidebar,
    closeSidebar
} = uiSlice.actions;