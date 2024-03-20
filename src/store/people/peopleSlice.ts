import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        isLoadingPeople: false,
        people: [],
        textFindPeople: '',
    },
    reducers: {
        onCheckingPeople: (state) => {
            state.isLoadingPeople = true;
            state.people = [];
        },
        onLoadPeople: (state, { payload }) => {
            state.isLoadingPeople = false;
            state.people = payload
        },
        setEmptyPeople: (state) => {
            state.isLoadingPeople = false;
            state.people = [];
        },
        onSearchPeople: (state, { payload }) => {
            state.textFindPeople = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onCheckingPeople, onLoadPeople, setEmptyPeople, onSearchPeople } = peopleSlice.actions;