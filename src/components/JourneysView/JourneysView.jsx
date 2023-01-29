import {useState} from 'react'
import JourneyDetail from '../JourneyDetail/JourneyDetail'
import DetailsPagination from '../DetailsPagination/DetailsPagination'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import classes from './JourneysView.module.scss'

const JourneysView = () => {
    const [journeysPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

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