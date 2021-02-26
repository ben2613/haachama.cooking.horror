import React from 'react'
import PropTypes from 'prop-types'

import './Book.css'

function Book(props) {
  return (
    <div className="bookContainer" onClick={props.handleClick}>
      <div className={"book " + (props.bookOpen ? 'open' : '')}>
        <div className="back"></div>
        <div className="page6"></div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front"></div>
      </div>
    </div>
  )
}

Book.propTypes = {
  bookOpen: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Book

