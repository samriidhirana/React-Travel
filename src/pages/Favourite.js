import React from "react";
import { useFavContext } from "../context/fav-context";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Favourite.css";

const Favourite = () => {
  const { cardData } = useFavContext();

  return (
    <>
      <Navbar />
      <div className="fav-section">
        <div className="fav-header-img"></div>
        <div className="fav-card-header">
          <h1 className="fav-title">My Favorites</h1>
          <div className="fav-card-section">
            {cardData
              .filter((item) => item.favorite)
              .map((curElem, index) => {
                return <Card key={index} {...curElem} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourite;
