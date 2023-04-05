import './App.css';
import Login from'./component/Login';
import Register from './component/Register';
import Comp from './component/Comp';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { LoginContext } from './Context/LoginContext';
import { useState } from 'react';
import Carosel from './component/Carosel';
import Form from './component/Form';
 
function App() {
  const [User, setUser] = useState({});
  console.log("user",User);
  return (
    <LoginContext.Provider value={{User,setUser}}>
    <BrowserRouter>
      <Routes>         
         <Route path="/" element={<Login />}> </Route>
         <Route path="/register" element ={<Register />}> </Route>
         <Route path="/new/data" element ={<Comp />}> </Route>
         <Route path="/c" element ={<Carosel />}> </Route>
         <Route path="/f" element ={<Form />}> </Route>
       
    </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
