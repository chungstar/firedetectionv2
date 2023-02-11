import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar=({navigate}) => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link onClick={() => {
                navigate('/');
                }}>Home</Nav.Link>
                <Nav.Link onClick={() => {
                navigate('/목록');
                }}>목록</Nav.Link>
                <Nav.Link onClick={() => {
                navigate('/2');
                }}>?</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )}
export default NavigationBar
  