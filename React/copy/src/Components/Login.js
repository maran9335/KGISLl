import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  let success = useNavigate()

    function Submit(){
        //condition 
       success('/dashboard')
    }
  return (
    <div>
      <h1>Login Page </h1>
      <button onClick={Submit}>Login</button>
    </div>
  )
}

export default Login
