import React from "react";
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap'
import useAuth from '../../custom-hooks/useAuth'
import user from '../../img/user.png'
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase";

const NavigationBar=({navigate}) => {
    const {currentUser} = useAuth();
    const logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("로그아웃 되었습니다")
          }).catch((error) => {
            // An error happened.
            alert(error.message);
          })
    }

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
                        <><NavDropdown.Item onClick={ logout
                        }>로그아웃</NavDropdown.Item></>
                        :
                        <>
                        <NavDropdown.Item onClick={() => {
                            navigate('/Login');
                        } }>로그인</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            navigate('/SignUp');
                        } }>회원가입</NavDropdown.Item> </>
                        }
                    </NavDropdown>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )}
export default NavigationBar
  