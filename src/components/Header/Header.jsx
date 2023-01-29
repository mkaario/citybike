import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import NavigationList from '../NavigationList/NavigationList'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>

            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/' end>CityBike</NavLink>
            </h1>

        </header>
        <NavigationList/>
    </Fragment>
  )
}

export default Header