import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Navigation extends Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" color="white" expand="lg">
            <Navbar.Brand href="/">MatterBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="organizations">Organizations</Nav.Link>
              </Nav>

              <Button variant="warning">Get Started</Button>
              <Button variant="outline-warning">Login</Button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }
  
  export default Navigation;