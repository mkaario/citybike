import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import { populateJourneys } from '../../redux/slices/journeysSlice'
import { populateStations } from '../../redux/slices/stationsSlice'
import stationData from '../../dummy_data/stations.json'
import journeyData from '../../dummy_data/journeys_long.json'
import classes from './Header.module.scss'
import HeaderMessage from '../HeaderMessage/HeaderMessage'

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const formatJourneyData = () => {
            const resData = journeyData;
            const loadedData = [];

            for (const key in resData) {
                if(
                    resData[key]["Covered distance (m)"] > 10 &&
                    resData[key]["Duration (sec)"] > 10
                ) {
                    loadedData.push({
                        id: Number(key) + 1,
                        distance: resData[key]["Covered distance (m)"],
                        departureTime: resData[key]["Departure"],
                        departureStationNumber: resData[key]["Departure station id"],
                        departureStationName: resData[key]["Departure station name"],
                        duration: resData[key]["Duration (sec)"],
                        returnTime: resData[key]["Return"],
                        returnStationNumber: resData[key]["Return station id"],
                        returnStationName: resData[key]["Return station name"],
                    })
                }
            }
            dispatch(
                populateJourneys({
                    journeys: loadedData
                })
            )
        }

        const formatStationData = () => {
            const resData = stationData;
            const loadedData = [];

            for (const key in resData) {
                loadedData.push({
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
            dispatch(
                populateStations({
                    stations: loadedData
                })
            )
        }
        formatJourneyData();
        formatStationData();
    }, [dispatch]);

    const {pathname} = useLocation(); 
    const journeysMessage = 'Sort journeys by clicking on the associated category you wish to see. Clicking again reverses the order.'
    const stationsMessage = `See station details in addition to it's location on the map by selecting it from the list below.`
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>

            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/' end><span className={classes.gray}>City</span><span className={classes.yellow}>Bike</span></NavLink>
            </h1>

        </header>
        <NavigationList/>
        {pathname === '/journeys' && <HeaderMessage message={journeysMessage}/>}
        {pathname === '/stations' && <HeaderMessage message={stationsMessage}/>}
    </Fragment>
  )
}

export default Header