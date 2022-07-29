import React, { useContext } from 'react'
import { Context } from "../../Context/StateContext"

const RemoveEmp = () => {
    const { deleteActive, setDeleteActive } = useContext(Context)
    return (
        <>
            <div class={deleteActive ? "delete-service active-delete" : "delete-service"}>
                <div class="delete-service-content">
                    <h4 class="delete-service-heading">Delete Client</h4>
                    <p class="delete-service-line ">Are you sure you want to delete this client?</p>

                    <div class="delete-service-button">
                        <div id="close" class="cancel-button" onClick={() => setDeleteActive(false)}>
                            <h4>Cancel</h4>
                        </div>
                        <div class="delete-button">
                            <h4>Delete</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RemoveEmp