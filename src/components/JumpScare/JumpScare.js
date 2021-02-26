import React from 'react'
import ReactSound from 'react-sound'
import './JumpScare.css'
import imgPath from './tumblr_df298b9dd8a0d1ad8d639c7a0fa1d434_99a233ea_250.png'
import scream from './353285__j-zazvurek__child-s-scream-7.mp3'

export default function JumpScare() {
  return (
    <div id="jumpscareContainer">
      <ReactSound url={scream} autoLoad={true} playStatus="PLAYING" />
      <img id="jumpscare" alt="haaaaaaaa" src={imgPath} />
    </div>
  )
}
