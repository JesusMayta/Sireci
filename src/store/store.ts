import { configureStore } from "@reduxjs/toolkit";
import { sideSlice } from "./Sidebar/sideSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        sideBar: sideSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;