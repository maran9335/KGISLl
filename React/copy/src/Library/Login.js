import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './login.css';
function Login() {
    let move = useNavigate();
   const [login,setLogin] = useState({
    username: "",
    password: ""
   })

   function handleChange(e) {
    const { name, value } = e.target;
    setLogin(prevData => ({
        ...prevData,
        [name]: value
    }));
}
 function handleSubmit(){

if(login.username=== 'maran' && login.password==='maran'){
    return move('/form')
}
else{
    alert("Enter the correct Userid and Password")
}


 }

  return (
    
    <div>
    <h2 className='  text-center mt-3' > <h1 className='text-danger pb-5
    '>Login Page</h1> </h2>
    <div className='box'>
      <Form className='form'> 
      <div className='formbox'>
        <Form.Group className="mb-3" controlId="UserName">
           
            <Form.Control type="text" placeholder="username" value={login.username} name="username" onChange={handleChange} />
        </Form.Group><br/>
        <Form.Group className="mb-3" controlId="Password">
            
            <Form.Control type="text" placeholder="Password" value={login.password} name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type='button'onClick={handleSubmit}>Submit</Button>
        </div>
        </Form>
      
        </div>
      
    </div>
  )
}

export default Login
