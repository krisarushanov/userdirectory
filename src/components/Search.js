import React from "react";

function SearchForm(props) {
  return (
    <form className="form-inline mx-auto">
      <div className="form-group mb-2">
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-warning">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;