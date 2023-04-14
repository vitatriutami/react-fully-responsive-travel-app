import Home from './routes/Home'
import Error404 from './routes/Error'
import Login from './components/Login'
import Signup from './components/Signup'
import UserAuthContext from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import './App.css'


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/service' element={<Service />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='*' element={<Error404 />} />
    {/* <Route index element={<Login></Login>}></Route> */}
  </>

));


function App() {
  return (
    <UserAuthContext>
      <RouterProvider router={router} >
      </RouterProvider>
    </UserAuthContext>
  );
}

export default App;