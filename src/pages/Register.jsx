import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {

 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [err, setErr]= useState(null);

//  USE TO NAVIGATE TO ANOTHER AREA AFTER CREATING A ACCOUNT 
 const navigate = useNavigate()


 

  const handleSubmit = async e =>{
    e.preventDefault();

    try {

      await axios.post  ("http://localhost:8080/auth/register", {username:username, email: email, password:password})
     .then((data) =>{

      console.log(data);
      setPassword('');
      setEmail('');
      setUsername('');

     });
    //  NAVIGATES TO THE LOGIN AREA IF SUCCESFULLY CREATED A ACCOUNT
     navigate("/login");
       
      

    } catch (err) {

    setErr(err.response.data);
    }
     
     

  }


  return (
    <div className='auth'>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
        <input required type="text" value={username} placeholder='Username' onChange={(e) => setUsername (e.target.value)}/>
        <input required type="email"value={email} placeholder='email' onChange={(e) => setEmail (e.target.value)}/>
        <input required type="password" value={password} placeholder='Password' onChange={(e) => setPassword (e.target.value)}/>
       <button type='submit'>Sign Up</button>
       { err && <p>{err}</p>}
       <span>Have an account?<br/><Link to="/login">Log in</Link></span>
    </form>
</div>
  )
}

export default Register