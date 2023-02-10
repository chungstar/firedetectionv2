import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/1')}}>?</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/2') }}>?</Nav.Link>
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
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </tbody>
      </Table>
    </div>
    
  );
}
export default App;