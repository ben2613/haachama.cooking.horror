import React from 'react'
import { Link } from 'react-router-dom'

import './ContentTable.css'

export default function ContentTable({
  current, setCurrent
}) {
  const quesetionArr = [
    ["/whoami", "Who are you"],
    ["/whyareyouhere", "Why are you here?"],
    ["/whathaveyoumade","What have you made?"],
    ["/whathaveyoudone","What have you done to HoloEN members!?"],
    ["/givethembackyoumonster", "Give Them Back you monster!!"],
    ["/what", "What?"],
    ["/howandwhat", "How do I unseal you? What happens after that?"],
    ["/haachamachama", "HAACHAMA CHAMA"]
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
