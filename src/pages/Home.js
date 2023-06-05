import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";

import "./Home.css";
import ImageCard from "../components/ImageCard";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    const parallax_ex = document.querySelectorAll(".parallax");

    let xValue = 0,
      yValue = 0;

    window.addEventListener("mousemove", (event) => {
      xValue = event.clientX - window.innerWidth / 2;
      yValue = event.clientY - window.innerHeight / 2;
      parallax_ex.forEach((curElem) => {
        let speedx = curElem.dataset.speedx;
        let speedy = curElem.dataset.speedy;

        curElem.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
      });
    });
  });

  return (
    <>
      <div className="bg-img">
        <img
          src="/images/hero-img-mount.png"
          alt="mount"
          className="mount parallax"
          data-speedx="0.10"
          data-speedy="0.3"
        ></img>
        <img
          src="/images/hero-img-tower.png"
          alt="tower"
          className="tower parallax"
          data-speedx="0.05"
          data-speedy="0.1"
        ></img>
        <Navbar />
        <div
          className="hero-text1 parallax"
          data-speedx="0.02"
          data-speedy="0.2"
        >
          <h1>Explore</h1>
        </div>
        <div
          className="hero-text2 parallax"
          data-speedx="0.10"
          data-speedy="0.10"
        >
          <p>日本 • にほん</p>
          <h2>japan</h2>
        </div>
      </div>

      <section className="destination-section">
        <div className="backdrop-img"></div>
        {/* <img
          src="/images/forest-backdrop.jpg"
          alt="backdrop"
          className="backdrop-img"
        ></img> */}
        <div className="destination-info-section">
          <div
            className="destination-header"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="destinations-para">Here are few spots to explore</p>
            <h1 className="destinations-title">Popular Destinations</h1>
          </div>
          <ImageCard />
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <div className="map-bg">
          <Map />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
