import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useFavContext } from "../context/fav-context";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const { cardData } = useFavContext();

  const navBarColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", navBarColor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <nav className="navbar">
          <div className="logo">
            <img src="/images/sun.png" alt="sun" className="logo-img"></img>
            <NavLink to="/" className="underline">
              <span className="brand-icon">Ryoko</span>
            </NavLink>
          </div>
          <div className="main-links">
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive ? "underline active" : "underline"
              }
            >
              <span className="navi-link">Destination</span>
            </NavLink>
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                isActive ? "underline active" : "underline"
              }
            >
              <span className="navi-link">Activities</span>
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "underline active" : "underline"
              }
            >
              <span className="navi-link">Contact</span>
            </NavLink>
          </div>
          <div className="fav-icon">
            <div>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "underline active" : "underline"
                }
              >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </NavLink>
            </div>
            <div className="fav-num">
              {cardData.filter((item) => item.favorite).length > 0
                ? cardData.filter((item) => item.favorite).length
                : 0}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
