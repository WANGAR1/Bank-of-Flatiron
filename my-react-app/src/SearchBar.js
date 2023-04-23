import React from "react"

  function SearchBar({ searchTerm, onSearchTermChange }) {
    return (
      <div>
        <label htmlFor="search-bar-input"></label>
        <input type="text" id="search-bar-input" value={searchTerm} onChange={onSearchTermChange} />
      </div>
    );
}
export default SearchBar