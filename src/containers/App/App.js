import { Container } from '@material-ui/core'
import Book from 'containers/Book/Book'
import React from 'react'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  return (
    <div className="App">
      <Background />
      <Container>
        <Book />
      </Container>
      <Ghost />
    </div>
  )
}

export default App
