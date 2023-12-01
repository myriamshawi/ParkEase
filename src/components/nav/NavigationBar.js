import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../Styles/navbarAndFooter.css';

const NavigationBar = ({ showDropdown }) => {
    return (
        <Navbar className="top-bar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="logo">ParkEase</Navbar.Brand>
                <Nav className="ms-auto">
                    {showDropdown && (
                        <NavDropdown title="Hello demo123!" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        <NavDropdown.Item href="#">Update account</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Re-Login</NavDropdown.Item>

                        {/* Add more dropdown items here as needed */}
                        {/* Example: <NavDropdown.Item href="/profile">Profile</NavDropdown.Item> */}
                    </NavDropdown>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
