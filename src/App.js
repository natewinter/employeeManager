import React,{useState} from 'react';
import './App.css';
import tableRow from "./components/tableRow/tableRow"

class App extends React.Component {
  state = []
}

componentDidMound(){

}
function App() {
// const [employees, updateEmployees] = useState([])
//   function getEmployees(){ 
//     fetch('https://randomuser.me/api/?results=2')
//     .then(response => response.json())
//     .then(data=>{
//       console.log(data)
//       updateEmployees(data)
//     })
//   }
  
  
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
    <tableRow />
  </tbody>
</table>
  //   <div>
  //   <button onClick={getEmployees}></button>
  //   {employees && employees.map(emp => (
  //     <h1>{emp.name}</h1>
  //   ))}
  // {/* {(!employees.length)
  //   ? getEmployees
  //   : employees.map(emp => {
  //     <h1>{emp.name}</h1>
  //   })
  // } */}
  // </div>
  );
}

export default App;
