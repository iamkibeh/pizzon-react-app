import React from 'react'
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTelephone,
  BsEnvelope,
} from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className='main-footer'>
        <div className='top-footer'>
          <div className='mini-footer'>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <AiOutlineHome className='home-icon' /> Lorem ipsum dolor, sit
                amet consectetur adipisicing elit.
              </li>
              <li>
                <BsTelephone className='home-icon' /> 123-456-789
              </li>
              <li>
                <BsEnvelope className='home-icon' />
                pizzon@pizzon.com
              </li>
            </ul>
          </div>
          <div className='mini-footer'>
            <h2>Information</h2>
            <ul>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className='mini-footer'>
            <h2>My Account</h2>
            <ul>
              <li>My Account</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>NewsLetter</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className='mini-footer'>
            <h2>Customer Service</h2>
            <ul>
              <li>Contact Us</li>
              <li>Returns</li>
              <li>Site Map</li>
              <li>Gift Certificates</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>
        <div className='social-accounts'>
          <BsTwitter className='tweet-icon' />
          <BsFacebook className='tweet-icon' />
          <BsInstagram className='tweet-icon' />
          <BsPinterest className='tweet-icon' />
        </div>
      </div>
    </>
  )
}

export default Footer
