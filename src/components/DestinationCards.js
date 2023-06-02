import React from "react";
import { cardData } from "../data";

import "./DestinationCards.css";
import { Link } from "react-router-dom";

const DestinationCards = () => {
  return (
    <div>
      <h1 className="main-title">Destionations</h1>
      <div className="card-section">
        {cardData.map((curElem, index) => {
          return (
            <Link to={`/destinations/${curElem.title}`} key={index}>
              <div
                className="destination-card"
                style={{ backgroundImage: `url('${curElem.url}')` }}
              >
                <div className="card-info">
                  <h2>{curElem.title}</h2>
                  <p>{curElem.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DestinationCards;
