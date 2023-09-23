import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const [err, setErr]= useState(null);
 const navigate = useNavigate()
 
  axios.defaults.withCredentials = true;
 
const {currentUser, login} = useContext(AuthContext);
console.log(currentUser)

 const handleSubmit = async e =>{
  e.preventDefault();

  try {
      await login(username, password)
    // await axios.post ("http://localhost:8080/auth/login", {username:username,  password:password});

  //  NAVIGATES TO THE HOMEPAGE AREA I
   navigate("/");
     
    

  } catch (err) {

  setErr(err.response.data);
  }
   
   

}
// useEffect(()=>{
//   axios.get("http://localhost:8080/auth/login").then((data) =>{
//     if(data.data.loggedIn == true){
//       console.log(data.data.user[0].username);
//     }
    
//   })
// })

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

            <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername (e.target.value)}/>

           <input type="password" value={password} placeholder='Password'
           onChange={(e) => setPassword (e.target.value)}/>

           <button type='submit'>Log In</button>

           {err && <p>{err}</p>}

           <span>Don't have an account?<br/><Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login