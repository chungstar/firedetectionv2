import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Table} from 'react-bootstrap'
import { db } from "./firebase.js";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from 'react';
const TEST_DATA=[
  {
    "timeStamp": "20220614-113330",
    "uid": "admin",
    "url": "url1"
  },
  {
    "timeStamp": "20220614-113332",
    "uid": "admin",
    "url": "url2"
  },
  {
    "timeStamp": "20220614-113333",
    "uid": "admin",
    "url": "url3"
  }]
function App() {
  let [data,setData] = useState(TEST_DATA);

  useEffect(() => {
    ReadDb();
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
        </tbody>
      </Table>
    </div>
    
  );
}
var tNo = 0;
var tbody = document.getElementById('tbody');
function ReadDb(){
  const userdb = ref(db, "Users/");
    onValue(userdb, (snapshot) => {
      let urls = [];
      
      snapshot.forEach(childSnapshot => {
        urls.push(childSnapshot.val());
      });
      AddAllItemsToTable(urls);
      console.log(urls)
  });
}
function AddAllItemsToTable(TheUrl){
  tNo=0;
  tbody.innerHTML="";
  TheUrl.forEach(element => {
    AddItemToTable(element.timeStamp, element.uid, element.url);
  })
}
function AddItemToTable(time,email,url){
  let trow = document.createElement("tr");
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  // let td3 = document.createElement('td');
  let td4 = document.createElement('td');

  td1.innerHTML=++tNo;
  td2.innerHTML=time;
  // td3.innerHTML=email;
  td4.innerHTML=`<img src = "${url}" class="mw-100">`;
  console.log(td4.innerHTML);

  trow.appendChild(td1);
  trow.appendChild(td2);
  // trow.appendChild(td3);
  trow.appendChild(td4);

  tbody.appendChild(trow);
}
export default App;