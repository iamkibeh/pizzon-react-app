import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='cart-container'>
        <button onClick={() => navigate(-1)}>
          <TbArrowBackUp />
          Back
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default Cart
