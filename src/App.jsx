import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'


function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
