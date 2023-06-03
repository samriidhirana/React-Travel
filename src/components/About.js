import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-bg">
      <h1 className="about-title">About Us</h1>
      <div className="about-flex">
        <div>
          <p className="about-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            dignissimos repudiandae vitae doloremque odit cum! Consequuntur
            quibusdam sed, nobis eaque aliquid ipsam, laudantium sapiente ad
            veniam nostrum nulla eius voluptatibus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iste dignissimos repudiandae vitae
            doloremque odit cum! Consequuntur quibusdam sed, nobis eaque aliquid
            ipsam, laudantium sapiente ad veniam nostrum nulla eius
            voluptatibus.
          </p>
        </div>
        <div className="about-images-scetion">
          <img
            src="/images/about/about-img1.jpg"
            alt="about-img1"
            className="about-img1"
          ></img>
          <img
            src="/images/about/about-img2.jpg"
            alt="about-img2"
            className="about-img2"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;