import { populateStations } from '../slices/stationsSlice'

export const getStationsData = () => {
    return async (dispatch) => {

        const fetchData = async ()  => {    
            const response = await fetch('https://citybike-866d0-default-rtdb.europe-west1.firebasedatabase.app/citybike/stations.json')
            if (!response.ok) {
                throw new Error('Could not find station data!')
            }
            const resData = await response.json();

            const stationsData = [];

            for (const key in resData) {
                stationsData.push({
                    id: resData[key]["ID"],
                    mapId: resData[key]["FID"],
                    nameFinnish: resData[key]["Nimi"],
                    nameEnglish: resData[key]["Name"],
                    nameSwedish: resData[key]["Namn"],
                    osoite: resData[key]["Osoite"],
                    address: resData[key]["Address"],
                    kaupunki: resData[key]["Kaupunki"],
                    stad: resData[key]["Stad"],
                    operaattori: resData[key]["Operaattor"],
                    kapasiteetti: resData[key]["Kapasiteet"],
                    x: resData[key]["x"],
                    y: resData[key]["y"]
                })
            }
            return stationsData;
        };

        try {
            const formattedStations = await fetchData();
            dispatch(
                populateStations({
                    stations: formattedStations
                })
            )
        } catch(error) {
            throw new Error('Failed to populate STATIONS state')
        }

    }

} 