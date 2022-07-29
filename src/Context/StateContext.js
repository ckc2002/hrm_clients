import React, { createContext, useContext, useState } from "react";
import Employee from "../Components/EmpList/Employee";


export const Context = createContext();

const StateContext = () => {
    const [active, setActive] = useState(false)
    const [deleteActive, setDeleteActive] = useState(false)
    return (
        <Context.Provider value={{ active, setActive, deleteActive, setDeleteActive }}>
            <Employee />
        </Context.Provider>
    )
}

export default StateContext;