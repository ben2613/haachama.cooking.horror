import { Container } from '@material-ui/core'
import Book from 'containers/Book/Book'
import React, { useState } from 'react'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <div className="App">
      <Background onClick={()=>setBookOpen(false)} />
      <Ghost />
      <Container>
        <Book bookOpen={bookOpen} handleClick={()=>setBookOpen(true)} />
      </Container>
    </div>
  )
}

export default App
