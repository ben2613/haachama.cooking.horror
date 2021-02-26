import React from 'react'
import PropTypes from 'prop-types'

import './Background.scss'
function Background(props) {
  return (
    <div className="thunder" {...props}>
      {props.children}
    </div>
  )
}

Background.propTypes = {
  onClick: PropTypes.func,
}

export default Background

