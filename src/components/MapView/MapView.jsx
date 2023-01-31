import { Fragment, useMemo, useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import customMarker from '../../img/cb_mapicon.png'
import classes from './MapView.module.scss'


const MapView = () => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <div>Loading map...</div>
    return <Map />

}

const Map = () => {
    const [isMounted, setIsMounted] = useState(false);
    const station = useSelector((state) => state.storedStations.selectedStation);
    const journeys = useSelector((state) => state.storedJourneys.journeys);
    const journeysFromStation = journeys.filter((journey) => journey.departureStationNumber === station.id);
    const journeysToStation = journeys.filter((journey) => journey.returnStationNumber === station.id);

    const stationLat = station.y;
    const stationLng = station.x;
    const center = useMemo(()=> ({lat: stationLat, lng: stationLng}),[stationLat, stationLng]);
    const google = window.google;
    const customIcon = {
        url: customMarker,
        size: new google.maps.Size(48,100),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,32)
    }
    useEffect(() => {setIsMounted(true)},[]);

    return (
        <Fragment>
            <div className={classes.station_header_details}>
                <div>
                    <p>
                        Station <span className={classes.heavy}>{station.nameFinnish}, {station.osoite}</span>
                    </p>
                </div>
            </div>
            <GoogleMap
            zoom={16}
            center={center}
            defaultZoom={16}
            defaultCenter={center}
            mapContainerClassName={classes.map_container}
            >
                {isMounted && // I don't know why but the custom markers won't load on initial pass without this being under a conditional render, hence the hacky isMounted state
                <Marker
                name={station.nameFinnish}
                title={station.osoite}
                key={station.id}
                position={{lat: stationLat, lng: stationLng}}
                icon={customIcon}
                />
                }
            </GoogleMap>
            <div className={classes.station_travel_details}>
                <div>
                    Journeys from this station:
                    <span className={classes.heavy}> {journeysFromStation.length}</span>
                </div>
                <div>
                    Journeys to this station:
                    <span className={classes.heavy}> {journeysToStation.length}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default MapView