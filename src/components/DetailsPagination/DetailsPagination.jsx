import React from 'react'
import { Pagination } from '@mui/material';
import classes from './DetailsPagination.module.scss'

const DetailsPagination = ({itemsPerPage, totalItems, onChange}) => {
const count = Math.ceil(totalItems / itemsPerPage);

  return (
    <Pagination className={classes.pagination_block} onChange={onChange} count={count}/>
  )
}

export default DetailsPagination