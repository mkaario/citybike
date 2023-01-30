import {Fragment} from 'react'

const HomePage = () => {
  return (
    <Fragment>
        <div className='homepage_wrapper'>
            <div className='welcome_message'>
                <p className='welcome'>Welcome to the starting page of the Solita pre-assignment project for CityBike</p>
                <div className='divider'></div>
                <p>By selecting an option from above you can view both travelled journeys as well as available stations.</p>
                <p>Browse away, and I hope to see you at the Dev Academy in March!</p>
                <p className='right'>- Mikko Kaario</p>
            </div>
        </div>
    </Fragment>
  )
}

export default HomePage