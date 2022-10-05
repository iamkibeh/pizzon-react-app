import React from 'react'
import { Outlet } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div className='cart-container'>
        <h2>you are in the cart section</h2>
      </div>
      <Outlet />
    </>
  )
}

export default Cart
