import React, { useState } from 'react'

function Form() {
//    const[name, setName] =useState("")
//    const[email, setEmail] =useState("")
//    const[city, setCity ]=useState("")

   const [info, setinfo] = useState({})
   
   function handleSubmit(e){
    e.preventDefault();
   console.log("form Submitted")
   console.log("data",info)

   }

   function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setinfo((prestate)=>{return{...prestate,[name]:value}})
   }

  return (
    <div>
    <h1> Application</h1>
    <form onSubmit={handleSubmit}>
   <p>Enter the Name</p>  
    <input type="text"  name='name' placeholder='Name'onChange={handleChange}/>
    <br>
    </br>
    <p>EMAIL</p>
    <input type="text"  name= 'email'placeholder='Email'onChange={handleChange}/>
    <br></br>
    <p>City</p>
    <input type="text" name='city' placeholder='Location'onChange={handleChange}/>
    <br></br>
    <input type='submit'value= "Submit"/>

    </form>
    </div>
  )
}

export default Form
