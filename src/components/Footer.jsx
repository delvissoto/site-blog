import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
   <footer className='footer'>
    <img src={Logo} alt="Logo" />
    <span>Made with <strong>React.Js</strong></span>
   </footer>
  )
}

export default Footer