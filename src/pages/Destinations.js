import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCards from "../components/DestinationCards";

import "./Destinations.css";
import DestinationCarousel from "../components/DestinationCarousel";

const Destinations = () => {
  return (
    <section>
      <div className="destination-hero-section">
        <Navbar />
        <DestinationCarousel />
      </div>
      <div className="destination-cards-section">
        <DestinationCards />
      </div>
      <Footer />
    </section>
  );
};

export default Destinations;
