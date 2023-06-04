import React, { useEffect } from "react";
import "./Map.css";

const Map = () => {
  // const parallax_y = document.querySelectorAll('.img-size');
  // console.log(parallax_y);

  useEffect(() => {
    // const imgDiv = document.getElementById('map-section');
    const allImages = document.querySelectorAll(".img-size");
    let yValue = 0;
    // console.log(imgDiv);
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      allImages.forEach((curElem) => {
        // console.log(curElem);
        yValue = window.scrollY / 4;
        // console.log(yValue);
        let speedy = curElem.dataset.speedy;
        curElem.style.transform = `translateY(calc(-50% + ${
          -yValue * speedy
        }px))`;
      });
    });
  });

  return (
    <div className="map-section" id="map-section">
      <div className="map-area">
        <h1 className="map-title">Explore through the Map</h1>
        <div>
          <img src="/images/map/jp-map.png" alt="map" className="map-img"></img>
          <img
            src="/images/map/map-img1Small.jpeg"
            alt="img1"
            className="img-size map-img1"
            data-speedy="0.6"
          ></img>
          <img
            src="/images/map/map-img2Medium.jpeg"
            alt="img2"
            className="img-size map-img2"
            data-speedy="0.4"
          ></img>
          <img
            src="/images/map/map-img3Small.jpeg"
            alt="img3"
            className="img-size map-img3"
            data-speedy="0.5"
          ></img>
          <img
            src="/images/map/map-img4Small.jpeg"
            alt="img4"
            className="img-size map-img4"
            data-speedy="0.4"
          ></img>
          <img
            src="/images/map/map-img5Small.jpeg"
            alt="img5"
            className="img-size map-img5"
            data-speedy="0.6"
          ></img>
          <img
            src="/images/map/map-img6Medium.jpeg"
            alt="img6"
            className="img-size map-img6"
            data-speedy="0.3"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Map;
