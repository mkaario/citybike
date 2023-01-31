import { populateJourneys } from '../slices/journeysSlice'

export const getJourneysData = () => {
    return async (dispatch) => {

        const fetchData = async ()  => {    
            const response = await fetch('https://citybike-866d0-default-rtdb.europe-west1.firebasedatabase.app/citybike/journeys.json')
            if (!response.ok) {
                throw new Error('Could not find journey data!')
            }
            const resData = await response.json();
            
            const journeysData = []

            for(const key in resData) {
                if(resData[key]["Covered distance (m)"] > 10 &&
                resData[key]["Duration (sec)"] > 10) {
                    journeysData.push({
                        id: Number([key]) +1,
                        distance: resData[key]["Covered distance (m)"],
                        duration: resData[key]["Duration (sec)"],
                        departureTime: resData[key]["Departure"],
                        departureStationNumber: resData[key]["Departure station id"],
                        departureStationName: resData[key]["Departure station name"],
                        returnTime: resData[key]["Return"],
                        returnStationNumber: resData[key]["Return station id"],
                        returnStationName: resData[key]["Return station name"]
                    })
                }
            }
            return journeysData;
        };

        try {
            const formattedJourneys = await fetchData();
            dispatch(
                populateJourneys({
                    journeys: formattedJourneys
                })
            )
        } catch(error) {
            throw new Error('Failed to populate JOURNEY state')
        }

    }

} 