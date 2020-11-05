import React,{useState} from 'react';
import './App.css';

function App() {
const [employees, updateEmployees] = useState([])
  function getEmployees(){ 
    fetch('https://randomuser.me/api/?results=2')
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      updateEmployees(data)
    })
  }
  
  
  return (
    <div>
      <button onClick={getEmployees}></button>
      {employees && employees.map(emp => (
        <h1>{emp.name}</h1>
      ))}
    {/* {(!employees.length)
      ? getEmployees
      : employees.map(emp => {
        <h1>{emp.name}</h1>
      })
    } */}
    </div>
  );
}

export default App;
