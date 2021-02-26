import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import './Book.scss'


function Book({ bookOpen,
  handleClick,
  children,
  left,
  bookFlip }) {
  return (
    <div className="bookContainer" onClick={handleClick}>
      <div className={"book " + (bookOpen ? 'open' : '')}>
        <div className="back"></div>
        <div className={"pageAnimation " + (bookFlip ? "active" : "")}></div>
        <div className="page6"></div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front">
          <Box position="absolute" left="50%" top="50%" style={{ transform: 'translate(-50%, -50%)' }}>
            <p style={{ color: 'rgb(138,3,3)', fontSize: '3rem' }}>
              HAACHAMA
              COOKING
            </p>
            <span className="drop"></span>
          </Box>
        </div>
        <Box className="content left" lineHeight="1.465em" textAlign="left" paddingLeft="1em" paddingTop="3em" visibility={bookOpen ? "visible" : "hidden"}>
          {bookFlip?null:left}
        </Box>
        <Box className={"content right " + (bookFlip ? "active" : "")} lineHeight="1.465em" textAlign="left" paddingLeft="1em" paddingTop="3em" visibility={bookOpen ? "visible" : "hidden"}>
          {bookFlip?null:children}
        </Box>
      </div>
    </div>
  )
}

Book.propTypes = {
  bookOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  bookFlip: PropTypes.bool,
}

export default Book

