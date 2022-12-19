import React from 'react'
import { AiFillInstagram ,AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Prince Store All right reserved</p>
        <div className='social'>
          <h4 className = 'head'>Follow us on  </h4>
          <a className = 'icons' href = 'https://www.instagram.com/prince_mehta01/' target='blank' position= 'relative'>
            <AiFillInstagram />
          </a>
          
        </div>
       
    </div>
  )
}

export default Footer
