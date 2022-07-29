import React from 'react'
import "./emplist.css"

const EmpList = () => {
    return (
        <>

            <div class="list">
                <table id="client-table" style={{ width: "100%" }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid black" }}>
                            <td class="checkbox-heading"><input type="checkbox" /></td>
                            <th></th>
                            <th style={{ columnWidth: "160px" }}>name</th>
                            <th>tel</th>
                            <th>email</th>
                            <th>source</th>
                            <th>added</th>
                            <th>updated</th>
                        </tr>
                    </thead>

                    <tbody id="table-body">
                        <tr height="50px">
                            <td class="checkbox-heading"><input type="checkbox" /></td>
                            <td class="img-column"><img src="./Avatar/pngegg.png" alt="" /></td>
                            <td><a href="#" id="user">sumit</a></td>
                            <td><i class="fas fa-phone-alt list-icon"></i>7878675565</td>
                            <td><i class="far fa-envelope list-icon"></i>sumit@ingo.com</td>
                            <td><img src="./Avatar/l-intro-1640195126.jpg" alt="" /></td>
                            <td>11 Jan 2021</td>
                            <td>11 Jan 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmpList