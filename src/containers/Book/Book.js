import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
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
        <Box className="content left" lineHeight="1.465em" textAlign="left" paddingLeft="1em" paddingTop="3em" visibility={props.bookOpen ? "visible" : "hidden"}>
          {props.left}
        </Box>
        <Box className="content" lineHeight="1.465em" textAlign="left" paddingLeft="1em" paddingTop="3em" visibility={props.bookOpen ? "visible" : "hidden"}>
          {props.children}
        </Box>
      </div>
    </div>
  )
}

Book.propTypes = {
  bookOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  left: PropTypes.node,
}

export default Book

