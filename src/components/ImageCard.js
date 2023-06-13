import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { useNavigate } from "react-router-dom";
import "./ImageCard.css";
import Card from "./Card";
import { useFavContext } from "../context/fav-context";

const ImageCard = () => {
  const { filteredArray } = useFavContext();

  // const { title } = filteredArray;

  // const navigate = useNavigate();

  // const navigateToSinglePage = () => {
  //   console.log(title);
  //   // navigate(`/destinations/${title}`);
  // };
  return (
    <div className="img-grid" data-aos="fade-up" data-aos-duration="1000">
      {filteredArray.map((curElem, index) => {
        if (curElem.popular) {
          return (
            <div className="img-card" key={index}>
              <Card {...curElem} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ImageCard;

{
  /* <div
              className="img-card"
              style={{ backgroundImage: `url('${curElem.url}')` }}
              key={index}
              onClick={navigateToSinglePage}
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
            </div> */
}
