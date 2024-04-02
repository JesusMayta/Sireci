import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/uiSlice';
import { authSlice } from './auth/authSlice';
import { userSlice } from './users/userSlice';
import { peopleSlice } from './people/peopleSlice';
import { documentsSlice } from './documents/documentsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    documents: documentsSlice.reducer,
    people: peopleSlice.reducer,
    ui: uiSlice.reducer,
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
