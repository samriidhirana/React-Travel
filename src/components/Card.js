import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useFavContext } from "../context/fav-context";

const Card = (props) => {
  const { id, title, url, description, favorite } = props;
  //   console.log(favorite);
  const { onFavIconClickHandler } = useFavContext();
  //   console.log(isFavourite);
  return (
    // <Link to={`/destinations/${title}`}>
    <div
      className="destination-card"
      style={{ backgroundImage: `url('${url}')` }}
    >
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <FontAwesomeIcon
        icon={faHeart}
        className={favorite ? "card-heart-icon-color" : "card-heart-icon"}
        onClick={() => onFavIconClickHandler(id)}
      />
    </div>
    // </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  favorite: PropTypes.bool,
};

export default Card;
