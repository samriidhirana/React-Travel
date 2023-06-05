import React from "react";

import "./SearchFilters.css";
import { useFavContext } from "../context/fav-context";

const SearchFilters = () => {
  const { onSearchInputHandler } = useFavContext();

  return (
    <div className="search-section" data-aos="fade-left">
      <h3>Search Destinations</h3>
      <input
        type="text"
        name="search"
        className="search-filter"
        onChange={onSearchInputHandler}
      />
    </div>
  );
};

export default SearchFilters;
