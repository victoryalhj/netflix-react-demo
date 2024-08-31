import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import '../App.css';
import { Link } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark" variant="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div className="logo">
          <Navbar.Brand href="#">
          <img 
            width={100}
            src="/img/netflix-logo.jpg" 
            alt="Netflix Logo"/>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/movies" className="nav-item">Movies</Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
  </div>
    
  )
}

export default AppLayout
