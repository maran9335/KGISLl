import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdBook } from "react-icons/io";
import './menu.css';

function Menu() {
  return (
    <div>
      <div className='menu'>
      
     <Navbar data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/"></Navbar.Brand>
      <div className='letter text-danger'><h2>E-Library</h2> </div>
      <Nav className="me-auto text-light">
       <h3 className='mr-5 text-danger'> <IoMdBook/></h3>
        
        <Nav.Link href="/" className=' nav-home text-light' >Home </Nav.Link>
        <Nav.Link href="/login" className=' navlogin text-light'>Login</Nav.Link>  
      </Nav>
    </Container>
  </Navbar>
    
  </div>
  
    </div>
  )
}

export default Menu
