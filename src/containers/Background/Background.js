import React from 'react'
import './Background.scss'
function Background(props) {
  return (
    <div className="thunder">
      {props.children}
    </div>
  )
}

Background.propTypes = {

}

export default Background

