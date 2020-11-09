import React from "react";

function EmployeeCard(props) {

    return (
    <table className="table">
        <tr>
          <th>Pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>D.O.B</th>
          <th>Age</th>
        </tr>
          {props.results.map((result,index) => (
              <tr key = {index}>
              <th><img src={result.picture.thumbnail}/></th>
              <th>{result.name.first} {result.name.last}</th>
              <th>{result.email}</th>
              <th>{result.phone}</th>
              {/* substring deletes (start,end) indexOf("*")*/}
              <th>{result.dob.date.substring(0,result.dob.date.indexOf("T"))}</th>
              <th onClick={props.handleFilter}>{result.dob.age}</th>
              {/* <th>{result.dob.date.substring(0,10)</th> */}
              {/* <th>{"hello"[2]}</th> */}
              </tr>
          ))}
    </table>
    );
  };

export default EmployeeCard;