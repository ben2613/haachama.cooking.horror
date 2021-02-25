import { Container } from '@material-ui/core'
import React from 'react'
import Ghost from '../../components/Ghost/Ghost'
import Background from '../Background/Background'
import './App.css'

function App() {
  return (
    <div className="App">
      <Background>
        <Container>

        </Container>
        <Ghost />
      </Background>
    </div>
  )
}

export default App
