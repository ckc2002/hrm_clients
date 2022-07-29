import './App.css';
import Login from './Components/SignIn_SignUp/Login';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Employee from './Components/EmpList/Employee';
import { useSelector } from "react-redux"
import StateContext from "./Context/StateContext"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/list' element={<StateContext><Employee /></StateContext>}></Route>
      </Routes>
    </>
  );
}

export default App;
