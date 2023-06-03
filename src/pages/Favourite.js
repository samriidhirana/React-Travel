import React from "react";
import { useFavContext } from "../context/fav-context";
import Card from "../components/Card";

const Favourite = () => {
  const { cardData } = useFavContext();

  return (
    <div>
      <h1>Favourites</h1>
      <div className="card-section">
        {cardData
          .filter((item) => item.favorite)
          .map((curElem, index) => {
            return <Card key={index} {...curElem} />;
          })}
      </div>
    </div>
  );
};

export default Favourite;
