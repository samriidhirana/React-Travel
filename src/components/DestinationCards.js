import React from "react";
// import { cardData } from "../data";
import SearchFilters from "../components/SearchFilters";
import "./DestinationCards.css";
import Card from "./Card";
import { useFavContext } from "../context/fav-context";

const DestinationCards = () => {
  const { filteredArray } = useFavContext();

  return (
    <div>
      <div className="destination-head">
        <h1 className="main-title">Destionations</h1>
        <SearchFilters />
      </div>
      <div className="card-section">
        {filteredArray.map((curElem, index) => {
          return <Card key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default DestinationCards;
