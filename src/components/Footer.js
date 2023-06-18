import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg row">
      <div className="footer-info-section col-2">
        <Link to="/" className="underline">
          <div className="logo">
            <img
              src="/images/sun.png"
              alt="sun"
              className="footer-logo-img"
            ></img>

            <span className="footer-brand-icon">Ryoko</span>
          </div>
        </Link>
      </div>
      <div className="footer-links-section col-4">
        <div className="footer-main-links">
          <Link
            to="/destinations"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Destination</span>
          </Link>
          <Link
            to="/activities"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Activities</span>
          </Link>
          <Link
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "underline active" : "underline"
            }
          >
            <span className="footer-navi-link">Contact</span>
          </Link>
        </div>
        <p className="footer-about-rights">All rights reseverd</p>
      </div>
      <div className="col-3"></div>
      <div className="col-3 social-media-icons">
        <div className="social-icon">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
        <div className="social-icon">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
        <div className="social-icon">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
        <div className="social-icon">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
