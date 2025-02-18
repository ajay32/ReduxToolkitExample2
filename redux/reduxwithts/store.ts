// configure the store with reducer // install redux toolkit to get

import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './notesslice';

export const store = configureStore({
    reducer: {
        notes: noteReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>

