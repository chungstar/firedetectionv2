import React from "react";
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap'
import useAuth from '../../custom-hooks/useAuth'
import user from '../../img/user.png'
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

                <Nav>
                    <Nav.Link>{currentUser 
                            ? currentUser.displayName
                            :<span  href="#" onClick={() => {
                            navigate('/Login');
                        }}>Login</span >}</Nav.Link>
                    <NavDropdown title={
                            <Image src={currentUser 
                            ? currentUser.photoURL
                            : user} alt="" style={{height:30, width:30}} roundedCircle />
                            } id="navbarScrollingDropdown">
                        {currentUser 
                        ? 
                        <><NavDropdown.Item onClick={() => {
                            navigate('/Login');
                        } }>로그아웃</NavDropdown.Item></>
                        :
                        <><NavDropdown.Item onClick={() => {
                            navigate('/Login');
                        } }>로그인</NavDropdown.Item><NavDropdown.Item onClick={() => {
                            navigate('/SignUp');
                        } }>회원가입</NavDropdown.Item></>
                        }
                    </NavDropdown>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )}
export default NavigationBar
  