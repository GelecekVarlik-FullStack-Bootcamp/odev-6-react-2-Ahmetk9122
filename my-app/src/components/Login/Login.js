 import "./Login.css"
 import React, { useState, useEffect } from 'react'
 import axios from 'axios'
 import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';


function Login (){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [islogin, setislogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:8080/auth/login',
              { "username": username, "password": password },
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log("Giriş başarılı")
          const accessToken = response.data.token;
       /*   props.setAuth({ mail: mail, password: pwd, token: accessToken })
          props.setStatus(true)*/
          setislogin(true)
      } catch (err) {
         console.log(err.data);
      }
  }
  useEffect(() => {
    if (islogin) {
        navigate('/todo')
    }
}, [islogin])
    return (
      <>
         <div className='box'>
   <div className="form">
   <form onSubmit={handleSubmit}>
     <div className="input-container">
       <label>Username</label>
       <input type="text" name="uname"onChange={(e)=>setUsername(e.target.value)} value={username} required />
     </div>
     <div className="input-container">
       <label>Password </label>
       <input type="password" name="pass"onChange={(e)=>setPassword(e.target.value)} value={password} required />
     </div>
     <column>
     <div className="button-container">
       <input type="submit" />
     </div>
     </column>
    
   </form>
   <column>
     <div className="btn-clas">
       <button className="btt">Kaydol</button>
       </div>
     </column>
   </div>
   </div></>
    )
   }
   export default Login