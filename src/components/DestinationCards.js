import React from "react";
// import { cardData } from "../data";

import "./DestinationCards.css";
import Card from "./Card";
import { useFavContext } from "../context/fav-context";

const DestinationCards = () => {
  const { cardData } = useFavContext();

  return (
    <div>
      <h1 className="main-title">Destionations</h1>
      <div className="card-section">
        {cardData.map((curElem, index) => {
          return <Card key={index} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default DestinationCards;
