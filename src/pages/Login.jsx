import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username'/>
           <input type="password" placeholder='Password'/>
           <button>Log In</button>
           <p>Display error Message</p>
           <span>Don't have an account?<br/><Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login