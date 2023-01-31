// import journeysDummyData from '../dummy_data/journeys_long.json'

export const formatJourneyData = async () => {
    await fetch('https://citybike-866d0-default-rtdb.europe-west1.firebasedatabase.app/citybike/journeys.json')
    .then(response => response.json())
    .then(resData => {
        const journeyData = []

        for(const key in resData) {
            if(resData[key]["Covered distance (m)"] > 10 &&
            resData[key]["Duration (sec)"] > 10) {
                journeyData.push({
                    id: Number([key]) +1,
                    distance: resData[key]["Covered distance (m)"],
                    duration: resData[key]["Duration (sec)"],
                    departureTime: resData[key]["Departure"],
                    derpartureStationNumber: resData[key]["Departure station id"],
                    departureStataionName: resData[key]["Departure station name"],
                    returnTime: resData[key]["Return"],
                    returnStationNumber: resData[key]["Return station id"],
                    returnStationName: resData[key]["Return station name"]
                })
            }
        }
        console.log(journeyData)
        return journeyData
    })

    // const resData = journeysDummyData;

}