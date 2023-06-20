import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-bg">
      <div className="about-img"></div>
      <div
        className="about-section"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <h1 className="about-title">About Us</h1>
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
      </div>
      {/* <div
        className="about-images-scetion col-lg-6 col-md-6 col-sm-12"
        data-aos="fade-left"
        data-aos-duration="700"
      >
        <img
          src="/images/about/about-img1Medium.jpeg"
          alt="about-img1"
          className="about-img1"
        ></img>
        <img
          src="/images/about/about-img2Medium.jpeg"
          alt="about-img2"
          className="about-img2"
        ></img>
      </div> */}
    </div>
  );
};

export default About;
