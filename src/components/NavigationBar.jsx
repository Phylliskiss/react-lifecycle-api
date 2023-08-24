import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><strong>AFG AWARDS</strong></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className="nav-link-custom font-weight-bold">Home</Nav.Link>
            <Nav.Link href="#nominees" className="nav-link-custom font-weight-bold">Nominees</Nav.Link>
            <Nav.Link href="#awards" className="nav-link-custom font-weight-bold">Awards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar;
