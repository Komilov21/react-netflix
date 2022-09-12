import React from 'react'
import {Navbar,Container,Nav,NavLink} from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    
      <Nav className="me- auto text-white">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default MyNavbar