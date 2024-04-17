import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './component/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Analytics from './pages/Analytics';
import PrivateRoute from './Auth/PrivateRoute';
import { authConst } from './Context/Context';
import { useEffect,useState } from 'react';
import Expenses from './pages/Expenses';
import Contact from './pages/Contact';
import About from './pages/About';

const PageNotFound = () => (
  <div className="text-center p-5">404 PAGE NOT FOUND!</div>
);
function App() {
 
  const [isLogin, setisLogin] = useState("");

  // useEffect(() => {
  //   setisLogin(localStorage.getItem("user"));
  //    console.log("ye pehla use effect ka hai",isLogin);
  // }, []);
  return (
    <div className="App">
      <authConst.Provider value={isLogin}>
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                
                <Route path='/Analytics' element={<PrivateRoute Component={Analytics}/>}/>
                <Route path='/Expenses' element={<PrivateRoute Component={Expenses}/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="*" element={<PageNotFound />} />

                {/* </Route> */}

            </Routes>

        </BrowserRouter>
        </authConst.Provider>
    </div>
  );
}

export default App;
