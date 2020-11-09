import React from "react";


function Searchbar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"> Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Last Name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        <button onClick={props.handleFilter} className="btn btn-primary">
          filter by age!
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
