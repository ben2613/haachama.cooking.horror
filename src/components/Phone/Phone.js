import { Box } from '@material-ui/core'
import React from 'react'

import imgPath from './Phone.png'
import './Phone.css'

export default function Phone() {
  return (
    <Box position="fixed" right="10px" bottom="-300px">
      <img alt="phone showing 02:06" src={imgPath} width="200px" />
      <div className="phoneText">
        <span>02</span>
        <span className="flash">:</span>
        <span>06</span>
      </div>
    </Box>
  )
}
