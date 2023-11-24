import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar className="top-bar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="logo">ParkEase</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
