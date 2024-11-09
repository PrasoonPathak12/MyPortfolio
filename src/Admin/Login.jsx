import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Components/AdminPageCSS.css"
const Login = ({setAuthenticated}) => {

    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState(""); 
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(username.trim() === "patinsky1235" && password === "a"){
            setAuthenticated(true);
            // navigate("./ProjectEdit");
            console.log("kaam kar rha hai");
            
        }
        else{
            setAuthenticated(false);
            alert("Wrong username or password");
            console.log("kaam kar rha hai");

        }
    }


  return (
    <div className='loginpage'>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <p className='loginHeading'>Admin Login</p>
        </div>
        <div className='formInputsDiv'>
            <label htmlFor="username">UserName</label>
            <input type="text" name="username" id="username" value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='formInputsDiv'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             required />
        </div>
        <div className='formInputsDiv'>
        <input type="submit" className='submitButton' />
        
        </div>
      </form>
    </div>
  )
}

export default Login
