import NavigationBar from './containers/navbar/NavigationBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import TableScreen from './containers/table/TableScreen'
import Login from './containers/login/Login'
import SignUp from './containers/signup/SignUp'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './containers/protectedRoutes/ProtectedRoute'

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar navigate={navigate}  />
      <Routes>
        <Route path = '/목록' element={ <ProtectedRoute><TableScreen/></ProtectedRoute> }/>
        <Route path = '/Login' element={ <Login/> }/>
        <Route path = '/Signup' element={ <SignUp/> }/>
      </Routes>
    </div>
    
  );
}
export default App;