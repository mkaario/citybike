import { configureStore } from "@reduxjs/toolkit";
import journeysReducer from './slices/journeysSlice';
import stationsReducer from './slices/stationsSlice';

const store = configureStore({
    reducer: {
        storedJourneys: journeysReducer,
        storedStations: stationsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})

export const journeysActions = journeysReducer.actions;
export const stationsActions = stationsReducer.actions;

export default store