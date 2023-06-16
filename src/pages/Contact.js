import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Contact.css";
import Form from "../components/Form";
import Accordian from "../components/Accordian";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="contact-img col-7">
          <div className="overlay">
            <h1
              className="contact-title"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Dont know where to start?
            </h1>
            <p data-aos="fade-right" data-aos-duration="800">
              We are here to help you out!
            </p>
          </div>
        </div>
        <div className="contact-form col-5">
          <h1 data-aos="fade-left" data-aos-duration="800">
            Get in Touch
          </h1>
          <div
            className="form-area"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Form />
          </div>
        </div>
      </div>
      <div className="contact-map" data-aos="zoom-in" data-aos-duration="600">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3230140244473!2d77.09288301555628!3d28.59008499275066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5dbed6ebd9%3A0xddb7cb3ece1236d!2sTruewebsolution!5e0!3m2!1sen!2sin!4v1679040681372!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-faq" data-aos="fade-up" data-aos-duration="1000">
        <div className="row">
          <div className="col-6 faq-heading">
            <h2>FAQ</h2>
            <h1>Frequently asked questions.</h1>
          </div>
          <div className="col-6 faq-section">
            <Accordian />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
