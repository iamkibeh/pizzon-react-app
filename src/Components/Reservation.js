import React from 'react'
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <>
      You are in the booking section
      <div className='reservation-cont'>
        <div className='res-heading'>
          <h2>make online reservation</h2>
          <h1>Book a table</h1>
        </div>
        <ReservationForm />
      </div>
    </>
  )
}

export default Reservation
