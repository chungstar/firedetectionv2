import React from "react";
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap'
import useAuth from '../../custom-hooks/useAuth'

const NavigationBar=({navigate}) => {
    const {currentUser} = useAuth();

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => {
                    navigate('/');
                    }}>Home</Nav.Link>
                    <Nav.Link onClick={() => {
                    navigate('/목록');
                    }}>목록</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => {
                        navigate('/Login');
                        }}>{currentUser 
                            ? currentUser.displayName
                            :"Login"}</Nav.Link> 
                </Nav>
                <Nav>
                    <NavDropdown title={currentUser 
                            ? currentUser.displayName
                            :"Login"} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <Image src={currentUser 
                            ? currentUser.photoURL
                            :null} alt="profileimg" style={{height:30, width:30}} roundedCircle></Image>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )}
export default NavigationBar
  