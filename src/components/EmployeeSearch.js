import React from 'react'
import EmployeeCard from "./EmployeeCard"
import API from "../utils/API";
import SearchBar from "./SearchBar"
import './App.css';

export default class EmployeeSearch extends React.Component {

    state = {
        results: [],
        search: "",
        employeesArray: []
    };

    componentDidMount() {
        // searches 10
        if(this.state.results.length === 0){
            console.log(this.state.results.length)
            this.searchAPI(10);
        }
    }

    filterEmployees = event => {
        event.preventDefault();
        const sortedResults = this.state.results.sort((a,b)=> a.dob.age-b.dob.age);
        console.log(sortedResults)
        console.log("hellos!")
        this.setState({results:sortedResults})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const filterResults = this.state.results.filter(res => (res.name.last === this.state.search))
        this.setState({results:filterResults})
        // this.setState({search:this.state.search});
      };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };
    // function for searching
    searchAPI = query => {
        API.search(query)
        .then(res => {this.setState({results: res.data.results, employeesArray: res.data.results})
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <header><h1>Employee Search</h1></header>
                <hr />

                {/* search button resets page and continues to refresh. prevent default? */}
                <SearchBar
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleFilter={this.filterEmployees}
              />
                <table className="table">
                {(this.state.results.length !== 0)  && <EmployeeCard results={this.state.results}  />}
                </table>
            </div>
        )
    }
}
