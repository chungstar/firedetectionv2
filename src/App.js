import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Table} from 'react-bootstrap'
import { db } from "./firebase.js";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  let state = useSelector((state)=>state)

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <th>#</th>
            <th>{state.fsdata[0].timeStamp}</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </tbody>
      </Table>
    </div>
    
  );
}
export default App;