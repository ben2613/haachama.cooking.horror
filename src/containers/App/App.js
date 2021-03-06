import { Container } from '@material-ui/core'
import JumpScare from 'components/JumpScare/JumpScare'

import Phone from 'components/Phone/Phone'
import Book from 'containers/Book/Book'
import ContentTable from 'containers/ContentTable/ContentTable'
import GiveThemBack from 'pages/GiveThemBack'
import HAACHAMACHAMA from 'pages/HAACHAMACHAMA'
import HowAndWhat from 'pages/HowAndWhat'
import What from 'pages/What'
import WhatHaveYouCook from 'pages/WhatHaveYouCook'
import WhatHaveYouDoneToEN from 'pages/WhatHaveYouDoneToEN'
import WhoAmI from 'pages/WhoAmI'
import WhyAreYouHere from 'pages/WhyAreYouHere'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import ReactSound from 'react-sound'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import bgm from './439509__ethanchase7744__freaky-ambience.mp3'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let LeftSide = (
    <Switch>
      <Route path="/ct">
        <ContentTable current={count} setCurrent={setCount} />
      </Route>
      <Route path="/a/">
        Left side of A
      </Route>
      <Route>
        <Link to="/ct">
          {"<Erase the question>"}
        </Link>
      </Route>
    </Switch>
  )

  let RightSide = (
    <Switch>
      <Route path="/ct">
        {"<- ASK ME QUESTION"}
      </Route>
      <Route path="/a/">
        ABCDEFAAAAAA
      </Route>
      <Route path="/whoami/">
        <WhoAmI />
      </Route>
      <Route path="/whyareyouhere/">
        <WhyAreYouHere />
      </Route>
      <Route path="/whathaveyoumade">
        <WhatHaveYouCook />
      </Route>
      <Route path="/whathaveyoudone">
        <WhatHaveYouDoneToEN />
      </Route>
      <Route path="/givethembackyoumonster">
        <GiveThemBack />
      </Route>
      <Route path="/what">
        <What />
      </Route>
      <Route path="/givethembackyoumonster">
        <GiveThemBack />
      </Route>
      <Route path="/howandwhat">
        <HowAndWhat />
      </Route>
      <Route path="/haachamachama">
        <HAACHAMACHAMA />
      </Route>
    </Switch>
  )

  const location = useLocation()
  const history = useHistory()
  const lastLocation = useRef('/')
  const [bookOpen, setBookOpen] = useState(location.pathname !== '/')
  const [bookFlip, setBookFlip] = useState(false)
  function linkUpdateHandler() {
    setBookFlip(true)
    setTimeout(() => {
      setBookFlip(false)
    }, 600)
  }
  useEffect(() => {
    // if distination is root / book close
    if (location.pathname === '/') {
      setBookOpen(false)
    }
    if (location.pathname === '/haachamachama') {
      setTimeout(()=>{
        history.push('/end')
      }, 4000)
    }
    // if go from / go to book close, no effect
    if (lastLocation.current === '/' || location.pathname === '/') {
      lastLocation.current = location.pathname
    } else if (lastLocation.current !== location.pathname) {
      linkUpdateHandler()
    }
    lastLocation.current = location.pathname
    return () => {
    }
  }, [location, lastLocation, history])
  const [bgmPlaying, setBgmPlaying] = useState("STOPPED")
  return (
    <div className="App">
      <ReactSound url={bgm} 
// @ts-ignore
      playStatus={bgmPlaying} autoLoad={true} loop={true}></ReactSound>
      <Background onClick={() => { setBookOpen(false); history.push('/') }} />
      <Ghost />
      <Container>
        <Book bookOpen={bookOpen} handleClick={() => { setBgmPlaying("PLAYING");setBookOpen(true); if (location.pathname === '/') { history.push('/ct') } }} left={LeftSide} bookFlip={bookFlip}>
          {RightSide}
        </Book>
        <Phone />
      </Container>
      <Route path="/end">
        <JumpScare />
      </Route>
    </div>
  )
}

export default App
