import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    journeys: []
}

const storedJourneysSlice = createSlice({
    name: "storedJourneys",
    initialState,
    reducers: {
        populateJourneys(state, action) {
            state.journeys = action.payload.journeys
        }
    }
})

export const {populateJourneys} = storedJourneysSlice.actions;
export default storedJourneysSlice.reducer;