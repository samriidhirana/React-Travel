import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { NavLink } from "react-router-dom";

import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            {/* <NavLink to="/" className="brand-icon">
              Ryoko
            </NavLink> */}
            <img src="/images/sun.png" alt='sun' className="logo-img"></img>
            <NavLink to='/' className='underline'><span className="brand-icon">Ryoko</span></NavLink>
          </div>
          <div className="main-links">
          {/* <span className="nav-link">About Us</span>
          <span className="nav-link">Destination</span>
          <span className="nav-link">Activities</span> */}
            <NavLink to="/about-us" className='underline'>
              <span className="navi-link">About Us</span>
            </NavLink>
            <NavLink to="/destinations" className='underline'>
              <span className="navi-link">
              Destination
              </span>
            </NavLink>
            <NavLink to="/activities" className='underline'>
              <span className="navi-link">
              Activities
              </span>  
            </NavLink>
          </div>
          <div className="fav-icon">
            <div>
              <NavLink to='/favorites'>
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />  
              </NavLink>
            </div>
            <div className="fav-num">10</div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
