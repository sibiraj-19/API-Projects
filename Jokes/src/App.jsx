import React from 'react'
import RandomJokes from './RandomJokes'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<RandomJokes />} />
     </Routes>
    </>
  )
}

export default App
