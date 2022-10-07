import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <>
      <div className='login-container'>
        <div className='login-modal'>
          <h2>Sign in</h2>
          <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='login-input'>
              <label htmlFor='email'>
                E-mail
                <HiOutlineMail className='email-avatar' />
              </label>

              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your mail'
                required
              />
            </div>
            <div className='login-input'>
              <label htmlFor='psd'>
                Password
                <RiLockPasswordFill className='psd-avatar' />
              </label>

              <input
                type='password'
                name='psd'
                id='psd'
                placeholder='Enter your password'
                required
              />
            </div>
            <button type='submit'>Login</button>
          </form>
          <p>
            Do not have an accout?
            <span>
              Sign Up <BsArrowRight />
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
