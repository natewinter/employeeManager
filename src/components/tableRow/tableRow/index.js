import React from "react"


function tableRows(props){
    return( 
        <div>
  <th scope="row">1</th>
    <td>{props.image}</td>
    <td>{props.name.first} {props.name.last}</td>
    <td>{props.dob.date}</td>
    <td>{props.email}</td>
    <td>{props.phone}</td>)
        </div>
    )
 }
export default tableRows
    