import React from "react";

import "./SearchFilters.css";

const SearchFilters = () => {
  return (
    <div className="search-section">
      <h3>Search Destinations</h3>
      <input type="text" name="search" className="search-filter" />
    </div>
  );
};

export default SearchFilters;
