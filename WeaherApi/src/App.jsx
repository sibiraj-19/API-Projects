import React from 'react'
import Weather from './Weather'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Weather/>} />
    </Routes>
  {/* hoooo */}
    </>
  )
}

export default App




