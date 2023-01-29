import {useState} from 'react'
import JourneyDetail from '../JourneyDetail/JourneyDetail'
import DetailsPagination from '../DetailsPagination/DetailsPagination'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import classes from './JourneysView.module.scss'
import SortingHeader from '../SortingHeader/SortingHeader'
import { populateJourneys } from '../../redux/slices/journeysSlice'
import { sortById, sortByDistance, sortByDuration, sortByFrom, sortByTo } from '../../utils/sorts.js'


const JourneysView = () => {
    const [journeysPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorted, setSorted] = useState({sorted: '', reversed: false})
    const dispatch = useDispatch();

    const setIdSort = () => {
        const sortedData = sortById(journeys, sorted);
        dispatch(
            populateJourneys({
                journeys: sortedData
            })
        )
        setSorted({sorted: 'id', reversed: !sorted.reversed})
    }
    const setDistanceSort = () => {
        const sortedData = sortByDistance(journeys, sorted);
        dispatch(
            populateJourneys({
                journeys: sortedData
            })
        )
        setSorted({sorted: 'distance', reversed: !sorted.reversed})
    }
    const setDurationSort = () => {
        const sortedData = sortByDuration(journeys, sorted);
        dispatch(
            populateJourneys({
                journeys: sortedData
            })
        )
        setSorted({sorted: 'duration', reversed: !sorted.reversed})
    }
    const setFromSort = () => {
        const sortedData = sortByFrom(journeys, sorted);
        dispatch(
            populateJourneys({
                journeys: sortedData
            })
        )
        setSorted({sorted: 'departureStationNumber', reversed: !sorted.reversed})
    }
    const setToSort = () => {
        const sortedData = sortByTo(journeys, sorted);
        dispatch(
            populateJourneys({
                journeys: sortedData
            })
        )
        setSorted({sorted: 'returnStationNumber', reversed: !sorted.reversed})
    }

    const handleChange = (e, p) => {
        setCurrentPage(p)
    }

    const journeys = useSelector(state => state.storedJourneys.journeys);

    const renderJourneys = () => {
        const indexOfLastJourney = currentPage * journeysPerPage;
        const indexOfFirstJourney = indexOfLastJourney - journeysPerPage;

        const currentJourneys = journeys.slice(indexOfFirstJourney, indexOfLastJourney);

        return currentJourneys.map((journey) => (
            <JourneyDetail
                key={journey.id}
                id={journey.id}
                distance={`${(journey.distance / 1000).toFixed(2)}`}
                duration={`${(journey.duration / 60).toFixed(1)}`}
                departureTime={journey.departureTime}
                departureStationNumber={journey.departureStationNumber}
                departureStationName={journey.departureStationName}
                returnTime={journey.returnTime}
                returnStationNumber={journey.returnStationNumber}
                returnStationName={journey.returnStationName}
            />
        ))
    }

  return (
    <section className={classes.journey_wrapper}>
        <div className={classes.grid_wrapper}>

            <div className={classes.data_headers}>
                <SortingHeader sorted={sorted} onClick={setIdSort} title={'ID'} sortedBy={'id'} />
                <SortingHeader sorted={sorted} onClick={setDistanceSort} title={'Distance (km)'} sortedBy={'distance'} />
                <SortingHeader sorted={sorted} onClick={setDurationSort} title={'Duration (min)'} sortedBy={'duration'} />
                <SortingHeader sorted={sorted} onClick={setFromSort} title={'From'} sortedBy={'departureStationNumber'} />
                <SortingHeader sorted={sorted} onClick={setToSort} title={'To'} sortedBy={'returnStationNumber'} />

            </div>

            <Card className={classes.grid_card}>{renderJourneys()}</Card>
        </div>
        <DetailsPagination
        totalItems={journeys.length}
        itemsPerPage={journeysPerPage}
        onChange={handleChange}
        />

    </section>
  )
}

export default JourneysView