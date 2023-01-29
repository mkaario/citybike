import { configureStore } from "@reduxjs/toolkit";
import journeysReducer from './slices/journeysSlice';
import stationsReducer from './slices/stationsSlice';

const store = configureStore({
    reducer:{
        storedJourneys: journeysReducer,
        storedStations: stationsReducer
    }
})

export const journeysActions = journeysReducer.actions;
export const stationsActions = stationsReducer.actions;

export default store