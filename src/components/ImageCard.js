import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { useNavigate } from "react-router-dom";
import "./ImageCard.css";
import Card from "./Card";
import { useFavContext } from "../context/fav-context";

const ImageCard = () => {
  const { filteredArray } = useFavContext();
  return (
    <div className="img-grid" data-aos="fade-up" data-aos-duration="1000">
      {filteredArray.map((curElem, index) => {
        if (curElem.popular) {
          return <Card key={index} {...curElem} />;
        }
      })}
    </div>
  );
};

export default ImageCard;
