import React from 'react'
import classes from './HeaderMessage.module.scss'

const HeaderMessage = (props) => {
  return (
    <div className={classes.header_message}><p>{props.message}</p></div>
  )
}

export default HeaderMessage