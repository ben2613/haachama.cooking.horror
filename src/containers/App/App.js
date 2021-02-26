import { Container } from '@material-ui/core'
import Phone from 'components/Phone/Phone'
import Book from 'containers/Book/Book'
import React, { useEffect, useRef, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  const location = useLocation()
  const history = useHistory()
  const lastLocation = useRef('/')
  const [bookOpen, setBookOpen] = useState(location.pathname !== '/')
  const [bookFlip, setBookFlip] = useState(false)
  function linkUpdateHandler() {
    setBookFlip(true)
    setTimeout(() => {
      setBookFlip(false)
    }, 1000)
  }
  useEffect(() => {
    console.log(lastLocation.current)
    console.log(location.pathname)
    // if distination is root / book close
    if (location.pathname === '/') {
      setBookOpen(false)
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
  }, [location, lastLocation])
  return (
    <div className="App">
      <Background onClick={() => {setBookOpen(false);history.push('/')}} />
      <Ghost />
      <Container>
        <Book bookOpen={bookOpen} handleClick={() => { setBookOpen(true); if (location.pathname === '/') { history.push('/ct') } }} left={"ABCDEFTGH"} bookFlip={bookFlip}>
          <Switch>
            <Route path="/ct" exact={true}>
              
            </Route>
            <Route path="/a/">
              ABCDEFAAAAAA
            </Route>
          </Switch>
        </Book>
        <Phone />
      </Container>
    </div>
  )
}

export default App
