import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Sign Up</h1>
    <form>
        <input required type="text" placeholder='Username'/>
        <input required type="email" placeholder='email'/>
        <input required type="password" placeholder='Password'/>
       <button>Sign Up</button>
       <p>Display error Message</p>
       <span>Have an account?<br/><Link to="/login">Log in</Link></span>
    </form>
</div>
  )
}

export default Register