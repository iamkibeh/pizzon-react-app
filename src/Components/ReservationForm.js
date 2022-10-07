import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReservationForm = () => {
  const [myForm, setMyForm] = useState({
    time: '',
    peopleNo: '',
    date: '',
    phoneNo: '',
    name: '',
    email: '',
    comments: '',
  })
  const navigate = useNavigate()
  const handleFormChange = (e) => {
    setMyForm((myForm) => {
      return { ...myForm, [e.target.name]: e.target.value }
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(myForm)
    setMyForm({
      time: '',
      peopleNo: '',
      date: '',
      phoneNo: '',
      name: '',
      email: '',
      comments: '',
    })
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)} className='res-form'>
        <div className='form-display'>
          <input
            type='time'
            name='time'
            min='07:00'
            max='23:59'
            value={myForm.time}
            onChange={(e) => handleFormChange(e)}
            required
            placeholder='Hour'
          />
          <input
            type='number'
            min='1'
            name='peopleNo'
            value={myForm.peopleNo}
            required
            onChange={(e) => handleFormChange(e)}
            placeholder='Number of People'
          />
        </div>
        <div className='form-display'>
          <input
            type='date'
            name='date'
            value={myForm.date}
            required
            onChange={(e) => handleFormChange(e)}
            placeholder='Pick a Date'
          />
          <input
            type='tel'
            name='phoneNo'
            value={myForm.phoneNo}
            pattern='[0-9]{10}'
            required
            onChange={(e) => handleFormChange(e)}
            placeholder='Phone Number'
          />
        </div>
        <div className='form-display'>
          <input
            type='text'
            name='name'
            value={myForm.name}
            required
            onChange={(e) => handleFormChange(e)}
            placeholder='Name'
          />
          <input
            type='email'
            name='email'
            required
            value={myForm.email}
            onChange={(e) => handleFormChange(e)}
            placeholder='Email Adress'
          />
        </div>
        <div className='comments-display'>
          <input
            type='text'
            name='comments'
            id='comments'
            required
            value={myForm.comments}
            onChange={(e) => handleFormChange(e)}
            placeholder='Comments'
          />
        </div>
        <div className='submit-btn'>
          <input type='submit' value='Book a table' />
        </div>
      </form>
    </div>
  )
}

export default ReservationForm
