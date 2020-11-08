import React from "react";

function EmployeeCard(props) {
    return (
    <table className="table">
        <br />
        <tr>
          <th>Pic</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
          {props.results.map(result => (
              <tr>
              <th><img src={result.picture.thumbnail}/></th>
              <th>{result.name.first} {result.name.last}</th>
              <th>{result.email}</th>
              <th>{result.phone}</th>
              </tr>
          ))}
    </table>
    );
  };

export default EmployeeCard;