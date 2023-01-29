import React from 'react'
import classes from './SortingHeader.module.scss'
import {NorthIcon, SouthIcon} from '@mui/icons-material'


const SortingHeader = (props) => {

    const renderArrow = () => {
        if (props.sorted.reversed) {
            return <NorthIcon className={classes.sort_icon}/>
        }
        return <SouthIcon className={classes.sort_icon}/>
    }
    
    return (
    <div className={classes.sorting_header} onClick={props.onClick}>{props.title} {props.sorted.sorted === `${props.sortedBy}` ? renderArrow() : null}</div>
  )
}

export default SortingHeader