import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer-info-section">
        <div className="logo">
          <img
            src="/images/sun.png"
            alt="sun"
            className="footer-logo-img"
          ></img>
          <NavLink to="/" className="underline">
            <span className="footer-brand-icon">Ryoko</span>
          </NavLink>
        </div>
      </div>
      <div className="footer-links-section">
        <div className="footer-main-links">
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Destination</span>
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Activities</span>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Contact</span>
          </NavLink>
        </div>
        <p className="footer-about-rights">All rights reseverd</p>
      </div>
      <div>
        {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </div>
    </div>
  );
};

export default Footer;
