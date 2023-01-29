import {Fragment} from 'react'
import StationView from '../components/StationView/StationView'

const StationsPage = () => {
  return (
    <Fragment>
        <div className="stations_wrapper">
            <StationView/>
        </div>
    </Fragment>
  )
}

export default StationsPage