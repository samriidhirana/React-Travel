import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            {/* <NavLink to="/" className="brand-icon">
              Ryoko
            </NavLink> */}
            <img src="../../public/images/sun.png" alt='sun' className="logo-img"></img>
            <span className="brand-icon">Ryoko</span>
          </div>
          <div className="main-links">
          <span className="nav-link">About Us</span>
          <span className="nav-link">Destination</span>
          <span className="nav-link">Activities</span>
            {/* <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink> */}
          </div>
          <div className="fav-icon">
            <div>
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </div>
            <div className="fav-num">10</div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
