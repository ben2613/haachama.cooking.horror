import React from 'react'

import imgPath from './haachama.png'

export default function Ghost(props) {
  return (
    <img alt="haachama chama" src={imgPath} style={{position: 'fixed', bottom:'0', left:'-200px'}} />
  )
}
