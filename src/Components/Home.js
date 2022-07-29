import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"
import AddEmp from "./EmpList/AddEmp"
import EmpList from './EmpList/EmpList'

const Home = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/dashboard' element={<EmpList />}></Route>
                
            </Routes>
        </>
    )
}

export default Home