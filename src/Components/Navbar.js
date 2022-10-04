import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        Pizz<span>on</span>
      </h1>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/cart'}>
            <FaCartPlus className='cart' />
            Add to Cart
          </NavLink>
        </li>
        <li>
          <NavLink to={'/reservations'}>Reservations</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>
            <BsFillTelephoneOutboundFill className='phone' /> +254 722 222 100
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
