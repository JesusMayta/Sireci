import { configureStore } from "@reduxjs/toolkit";
import { sideSlice } from "./Sidebar/sideSlice";



export const store = configureStore({
    reducer: {
        sideBar: sideSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;