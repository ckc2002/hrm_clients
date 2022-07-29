import React, { useState, useContext} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {inactive} from "../../Redux/actions/userActions"
import { Context } from "../../Context/StateContext"

const AddEmp = () => {
    const {active, setActive} = useContext(Context)

    // const active_states = useSelector((state) => state.allusers.active_state)
    // console.log(active_states)
    // const dispatch = useDispatch()

    // const [addActive , setaddActive] = useState(props.active)
    return (
        <>
            <div class={active? "add-service active-form" : "add-service "}>
                <div class="add-service-content">
                    <div class="add-client-form">
                        <div class="client-form-button">
                            {/* <div class="form-delete">
                                <i class="fas fa-trash-alt right-icon"></i>
                                <span>Delete</span>
                            </div> */}
                            <h3>Add Client</h3>
                            <div class="client-form-save" onClick={() => setActive(false)}>
                                <div class="client-cancelbtn">
                                    <span>Cancel</span>
                                </div>
                                <div class="client-savebtn">
                                    <span>Save</span>
                                </div>
                            </div>
                        </div>

                        <div class="client-form">
                            <form action="">
                                <div class="align-field">
                                    <div class="input-position">
                                        <label>Name</label>
                                        <input id="client-name" type="text" placeholder="Enter Client Name" />
                                    </div>
                                    <div class="input-position">
                                        <label>Telephone No.</label>
                                        <input type="tel" id="client-tel" name="phone"
                                            placeholder="Enter Telephone No." />
                                        {/* <input id="client-tel" type="text" placeholder="Enter Telephone No." /> */}
                                    </div>
                                    <div class="input-position">
                                        <label>Email</label>
                                        <input type="email" id="client-email" placeholder="Enter email" />
                                    </div>
                                </div>
                                <div class="align-field">
                                    <div class="input-position">
                                        <label>Added Date</label>
                                        <input type="text" id="client-added" placeholder="Enter Added Date" />
                                    </div>
                                    <div class="input-position">
                                        <label>Joining Date</label>
                                        <input type="text" id="client-joined"
                                            placeholder="Enter Joining Date" />
                                    </div>
                                </div>
                                {/* <div class="types-category">
                                    <div class="types">
                                        <label class="align-label">Type</label>
                                        <input type="radio" class="radio-align" name="type" />
                                        <label>Domestic</label>
                                        <input type="radio" class="radio-align" name="type" />
                                        <label>Export</label>
                                    </div>
                                    <div class="category">
                                        <label class="align-label">Category</label>
                                        <input type="radio" class="radio-align" name="category" value="B2B" />
                                        <label for="b2b">B2B</label>
                                        <input type="radio" class="radio-align" name="category" value="B2C" />
                                        <label for="b2c">B2C</label>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmp