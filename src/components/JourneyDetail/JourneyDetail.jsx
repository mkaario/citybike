import React from 'react'
import classes from './JourneyDetail.module.scss'

const JourneyDetail = (props) => {
  return (
    <div className={classes.journey_detail}>
        
        <h3>
            J<span className={classes.header_number}>{props.id}</span>
        </h3>
        <div className={classes.detail_element}>{props.distance}</div>

        <div className={classes.detail_element}>{props.duration}</div>
        
        <div className={classes.detail_element}>{props.departureStationNumber}, {props.departureStationName}</div>

        <div className={classes.detail_element}>{props.returnStationNumber}, {props.returnStationName}</div>

    </div>
  )
}


export default JourneyDetail