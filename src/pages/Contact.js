import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Contact.css";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-section">
        <div className="contact-img">
          <div className="overlay">
            <h1 className="contact-title">Dont know where to start?</h1>
            <p>We are here to help you out!</p>
          </div>
        </div>
        <div className="contact-form">
          <h1>Get in Touch</h1>
          <div className="form-area">
            <Form />
          </div>
        </div>
      </div>
      <div className="contact-map">
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
      <div className="contact-ques-section"></div>

      <Footer />
    </div>
  );
};

export default Contact;
