import stationDummyData from '../dummy_data/stations.json';

export const formatStationData = () => {
            const resData = stationDummyData;
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
            return stationsData
        }