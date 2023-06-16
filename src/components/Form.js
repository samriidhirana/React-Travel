import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const { name, email, phone, country, message } = formData;

  const onDataInputHandler = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form>
      <div className="form-grid">
        <div className="">
          <label>Name: </label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onDataInputHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="">
          <label>Email Address: </label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onDataInputHandler(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <br />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => onDataInputHandler(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>Country: </label>
          <br />
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => onDataInputHandler(e.target.name, e.target.value)}
          />
        </div>
      </div>
      <div className="message">
        <label>Message: </label>
        <textarea
          rows="5"
          name="message"
          value={message}
          placeholder="Type here whatever you want to share..."
          onChange={(e) => onDataInputHandler(e.target.name, e.target.value)}
        ></textarea>
      </div>
      <button className="button">
        <span>Send </span>
      </button>
    </form>
  );
};

export default Form;
