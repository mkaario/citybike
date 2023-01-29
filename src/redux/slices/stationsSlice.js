import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stations: [],
    selectedStation: {}
}

const storedStationsSlice = createSlice({
    name: 'storedStations',
    initialState,
    reducers: {
        populateStations(state, action){
            state.stations = action.payload.stations
        },
        selectStation(state, action){
            state.selectedStation = action.payload.selectedStation
        }
    }
})

export const {populateStations, selectStation} = storedStationsSlice.actions;
export default storedStationsSlice.reducer;