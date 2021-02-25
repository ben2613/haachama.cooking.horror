import React from 'react'
import PropTypes from 'prop-types'

import './Book.css'

function Book(props) {
  return (
    <div>
      <div className="book">
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

}

export default Book

