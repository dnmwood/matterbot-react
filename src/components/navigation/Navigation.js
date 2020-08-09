import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


class Navigation extends Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">MatterBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#organizations">Organizations</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Test link one</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Test link two</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Test link three</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Button variant="outline-warning">Login</Button>
          </Navbar>
        </div>
      )
    }
  }
  
  export default Navigation;