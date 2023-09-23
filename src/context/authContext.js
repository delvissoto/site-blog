import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  
    
    const login = async (username, password) =>{
      await axios.post("http://localhost:8080/auth/login", { username, password })
      .then((data) =>{
        setCurrentUser(data.data);
        
    
       });
        
    };
    const logout = async () => {
  try {
    const response = await axios.post("http://localhost:8080/auth/logout");
    console.log("Logout response:", response.data);
    setCurrentUser(null);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
    
    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

// import axios from 'axios';

// const AuthService = {
  

//   login: async (username, password) => {
//     try {
//       const response = await axios.post("http://localhost:8080/auth/login", { username, password });
//       const { token } = response.data.data;
//       console.log(token);
//       localStorage.setItem("token", token);
//       return true;
//     } catch (err) {
//       console.error('Login failed:', err);
//       return false;
//     }
//   },
//   logout: () => {
//     localStorage.removeItem("token");
//   },
//   isLoggedIn: () => !!localStorage.getItem("token"),
// };

// export default AuthService;