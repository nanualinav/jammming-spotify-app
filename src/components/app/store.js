import { configureStore } from "@reduxjs/toolkit";
import tracklistReducer from '../tracks/tracklistSlice';

export const store = configureStore({
    reducer: {
        tracklist: tracklistReducer, 
    }
})