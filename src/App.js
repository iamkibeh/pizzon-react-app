import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'
import MealDescription from './Components/MealDescription'
import Navbar from './Components/Navbar'
import Reservation from './Components/Reservation'
import Login from './Components/Login'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='cart' element={<Cart />}>
          <Route index element={<MealDescription />} />
          <Route path=':mealId' element={<MealDescription />} />
        </Route>
        <Route path='reservations' element={<Reservation />} />
        <Route path='login' element={<Login />} />
        {/* <Route path='contact' element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
