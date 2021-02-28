  
import React from 'react'

function Table(props) {
    const employeeData = props.results.map((item) =>
    < tr key={item.phone}>
        <td><img src={item.picture.thumbnail} alt="{item.name.first}{item.name.last}" /></td>
        <td>{item.name.first} {item.name.last}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
    </tr >
)
    return (
        <table className="table table-striped table-hover table-fluid">

            <thead >
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
            {employeeData}
        </tbody>
        </table>
    )
}
export default Table