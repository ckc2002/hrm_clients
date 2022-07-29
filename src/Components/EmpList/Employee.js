import React, { useState, useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import AddEmp from './AddEmp'
import EmpList from './EmpList'
import RemoveEmp from './RemoveEmp'
import { useSelector, useDispatch } from "react-redux"
import { active } from "../../Redux/actions/userActions"
import { Context } from "../../Context/StateContext"

const Employee = () => {

    const { setActive, setDeleteActive } = useContext(Context)
    const dispatch = useDispatch()

    return (
        <>
            <NavBar />
            <div class="home-container">
                <div class="option">
                    <div class="clients center">
                        <i class="far fa-user option-icon"></i>
                        <span class="option-heading">Clients</span>
                    </div>
                    <div class="organisation center">
                        <i class="uil uil-globe option-icon"></i>
                        <span class="option-heading">Organisation</span>
                    </div>
                </div>

                <div class="sub-container">
                    <div class="sub-bar">
                        <div class="order">
                            <div class="order-filter">
                                <a href="">All</a>
                                <a href="">A</a>
                                <a href="">B</a>
                                <a href="">C</a>
                            </div>
                            <div class="order-underline">
                                <span class="underline"></span>
                            </div>
                        </div>

                        <div class="right-side">
                            <div class="search">
                                <i class="fas fa-search search-icon"></i>
                                <input type="text" placeholder="Search client..." class="search-client" />
                            </div>
                            <div id="add-client" onClick={() => setActive(true)}>
                                <i class="fas fa-plus-circle right-icon"></i>
                                <span>Add Client</span>
                            </div>


                            <AddEmp />



                            <div id="delete-client" onClick={() => setDeleteActive(true)}>
                                <i class="fas fa-trash-alt right-icon"></i>
                                <span>Delete</span>
                            </div>

                            {<RemoveEmp />}


                        </div>
                    </div>

                    {<EmpList />}
                </div>
            </div>

        </>
    )
}

export default Employee