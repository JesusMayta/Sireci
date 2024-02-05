import { createSlice } from '@reduxjs/toolkit';

export const sideSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false
    },
    reducers: {
        openSidebar: (state) => {
            console.log(state.isOpen);
            state.isOpen = true;
        },
        closeSidebar: (state) => {
            console.log(state.isOpen);
            state.isOpen = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { openSidebar, closeSidebar } = sideSlice.actions;