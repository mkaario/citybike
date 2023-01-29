import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationList = () => {
  return (
    <div className={classes.navigation_wrapper}>
        <NavLink className={({isActive})=> isActive ? classes.active : undefined} to='/journeys'>Journeys</NavLink>
        <NavLink className={({isActive})=> isActive ? classes.active : undefined} to='/stations'>Stations</NavLink>
    </div>
  )
}

export default NavigationList