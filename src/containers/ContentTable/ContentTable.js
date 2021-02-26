import React from 'react'
import { Link } from 'react-router-dom'

import './ContentTable.css'

export default function ContentTable({
  current, setCurrent
}) {
  const quesetionArr = [
    ["/whoami", "Who are you"],
    ["/whyareyouhere", "Why are you here?"],
    ["/whathaveyoumade","What have you made?"]
  ]
  return (
    <div>
      {
        quesetionArr.map((v, i) => {
          return current >= i ? (<Link key={i} onClick={()=>setCurrent(Math.max(current+1, i))} to={v[0]}>[{v[1]}]<br/><br/></Link>) : null
        })
      }
    </div>
  )
}
