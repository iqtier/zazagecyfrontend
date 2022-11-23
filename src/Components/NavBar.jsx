import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" sticky="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  nav">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#blog" className="nav-link">Blog</Nav.Link>
            <Nav.Link href="#book online" className="nav-link">Book Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar