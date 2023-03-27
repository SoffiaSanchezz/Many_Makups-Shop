import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCart from './components/Shopping/ShoppingCart'


function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShoppingCart />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
