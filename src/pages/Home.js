import React from "react";
import Navbar from "../components/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="bg-img">
        <img
          src="/images/hero-img-mount.png"
          alt="mount"
          className="mount"
        ></img>
        <img
          src="/images/hero-img-tower.png"
          alt="tower"
          className="tower"
        ></img>
        <Navbar />
        <div className="hero-text">
          <h1>Explore</h1>
          <p>日本 • にほん</p>
          <h2>japan</h2>
        </div>
      </div>
      <section className="destination-section">
        <div className="">
          <h1>Popular Destinations</h1>
          <h2>Image carsole</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
