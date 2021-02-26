import { Container } from '@material-ui/core'
import Phone from 'components/Phone/Phone'
import Book from 'containers/Book/Book'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  const location = useLocation()
  const [bookOpen, setBookOpen] = useState(location.pathname !== '/')

  return (
    <div className="App">
      <Background onClick={()=>setBookOpen(false)} />
      <Ghost />
      <Container>
        <Book bookOpen={bookOpen} handleClick={()=>setBookOpen(true)} left={"ABCDEFTGH"}>
          Test
        </Book>
        <Phone />
      </Container>
    </div>
  )
}

export default App
