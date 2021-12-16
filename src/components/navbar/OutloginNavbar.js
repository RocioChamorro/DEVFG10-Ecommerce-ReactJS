import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';


const OutloginNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ logo }
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Ineed.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Novedades</Nav.Link>
              <Nav.Link href="#pricing">Promociones</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/auth/login">Iniciar sesión</Nav.Link>
              <Nav.Link eventKey={2} href="/auth/register">
                Registrarte
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default OutloginNavbar
