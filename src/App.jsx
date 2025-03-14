import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import ProteinBar from './ProteinBar'
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>} />
          <Route path='/soda' element={<Soda/>} />
          <Route path='/chips' element={<Chips/>} />
          <Route path='/proteinbar' element={<ProteinBar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
