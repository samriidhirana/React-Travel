import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Destinations.css";
import DestinationCarousel from "../components/DestinationCarousel";

const Destinations = () => {
  return (
    <section>
      <div className="destination-hero-section">
        <Navbar />
        <DestinationCarousel />
        <Footer />
      </div>
    </section>
  );
};

export default Destinations;
