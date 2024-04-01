import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    
    <div>
    <Navbar bg="warning" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/">Online Shopping</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/form">Registration</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    </div>
  )
}

export default Menu
