import React from 'react'
import EmployeeCard from "./EmployeeCard"
import API from "../utils/API";
import SearchBar from "./SearchBar"

export default class EmployeeSearch extends React.Component {

    state = {
        results: [],
        search: "",
        employeesArray: []
    };

    componentDidMount() {
        // searchs 10
        this.searchAPI(10);
    }

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
              />
                <table className="table">
                <EmployeeCard results={this.state.employeesArray} />
                </table>
            </div>
        )
    }
}
