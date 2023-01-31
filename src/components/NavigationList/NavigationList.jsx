import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationList.module.scss'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const NavigationList = () => {
    return (
    <div className={classes.navigation_wrapper}>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/journeys' data-testid='navlink'><DirectionsBikeIcon/>Journeys</NavLink>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/stations' data-testid='navlink'>Stations<LocationOnIcon/></NavLink>
    </div>
  )
}

export default NavigationList