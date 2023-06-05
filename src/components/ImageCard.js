import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./ImageCard.css";
import { useFavContext } from "../context/fav-context";

const ImageCard = () => {
  const { cardData, onFavIconClickHandler } = useFavContext();
  console.log(cardData);

  // console.log(DATA[0]);

  // const cardStyle = {
  //     backgroundImage: `url('${DATA[0].url}')`,
  // }
  return (
    <div className="img-grid" data-aos="fade-up" data-aos-duration="1000">
      {cardData.map((curElem, index) => {
        if (curElem.popular) {
          return (
            <div
              className="img-card"
              style={{ backgroundImage: `url('${curElem.url}')` }}
              key={index}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  curElem.favorite ? "card-heart-icon-color" : "card-heart-icon"
                }
                // onClick={() => onFavIconClickHandler(id)}
                onClick={(event) => {
                  event.stopPropagation();
                  // console.log("icon clicked");
                  onFavIconClickHandler(curElem.id);
                }}
              />
              <div className="image-info">
                <h2>{curElem.title}</h2>
                <p>{curElem.description}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ImageCard;
