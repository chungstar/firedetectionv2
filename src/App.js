import NavigationBar from './containers/navbar/NavigationBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import  TableScreen from './containers/table/TableScreen'
import { Routes,Route } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar navigate={navigate}  />
      <Routes>
        <Route path = '/목록' element={ <TableScreen/> }/>
        <Route path = '/2' element={ <TableScreen/> }/>
      </Routes>
    </div>
    
  );
}
export default App;