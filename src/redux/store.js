import { configureStore, combineReducers } from "@reduxjs/toolkit";
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

const rootReducer = combineReducers({
    storedJourneys: journeysReducer
  })

export const setupStore = preloadedState => {
    return configureStore({
      reducer: rootReducer,
      preloadedState
    })
  }
export default store