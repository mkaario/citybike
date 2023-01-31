import { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import classes from './Header.module.scss'
import HeaderMessage from '../HeaderMessage/HeaderMessage'

const Header = () => {
    const { pathname } = useLocation(); 
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