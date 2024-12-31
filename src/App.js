import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './homepage/Homepage'
import Header from './header/Header'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
