import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useFavContext } from "../context/fav-context";

const Card = (props) => {
  const { id, title, url, description, favorite } = props;
  const { onFavIconClickHandler } = useFavContext();
  const navigate = useNavigate();

  const navigateToSinglePage = () => {
    navigate(`/destinations/${title}`);
  };
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div
        className="destination-card"
        style={{ backgroundImage: `url('${url}')` }}
        onClick={navigateToSinglePage}
      >
        <div className="card-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          className={favorite ? "card-heart-icon-color" : "card-heart-icon"}
          onClick={(event) => {
            event.stopPropagation();
            onFavIconClickHandler(id);
          }}
        />
      </div>
    </div>
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
