import NavigationBar from './containers/navbar/NavigationBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Login from './containers/login/Login'
import SignUp from './containers/signup/SignUp'
import { Routes,Route } from 'react-router-dom'
import PrivateRoutes from './containers/privateRoutes/PrivateRoutes'
import { Suspense, lazy } from 'react';

const TableScreen = lazy(() => import('./containers/table/TableScreen'));

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar navigate={navigate}  />
      <Suspense>
        <Routes>
          <Route element={ <PrivateRoutes />}>
            <Route path = '/목록' element={ <TableScreen/> } />
          </Route>
          <Route path = '/Login' element={ <Login/> }/>
          <Route path = '/Signup' element={ <SignUp/> }/>
        </Routes>
      </Suspense>

    </div>
    
  );
}
export default App; 