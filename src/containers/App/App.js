import { Container } from '@material-ui/core'
import Phone from 'components/Phone/Phone'
import Book from 'containers/Book/Book'
import React, { useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  const location = useLocation()
  const [bookOpen, setBookOpen] = useState(location.pathname !== '/')
  const [bookFlip, setBookFlip] = useState(false)
  function linkUpdateHandler() {
    setBookFlip(true)
    setTimeout(()=>{
      setBookFlip(false)
    }, 1000)
  }
  return (
    <div className="App">
      <Background onClick={()=>setBookOpen(false)} />
      <Ghost />
      <Container>
        <Book bookOpen={bookOpen} handleClick={()=>setBookOpen(true)} left={"ABCDEFTGH"} bookFlip={bookFlip} handleLinkUpdate={linkUpdateHandler}>
          <Switch>
            <Route path="/" exact={true}>
              Test
            </Route>
            <Route path="/a/">
              ABCDEFAAAAAA
            </Route>
          </Switch>
        </Book>
        <Phone />
      </Container>
      <Link to="/a/">Test</Link>
    </div>
  )
}

export default App
