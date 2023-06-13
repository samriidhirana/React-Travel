import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <form>
      <div className="form-grid">
        <div className="">
          <label>Name: </label>
          <br />
          <input type="text" name="name" />
        </div>
        <div className="">
          <label>Email Address: </label>
          <br />
          <input type="text" name="name" />
        </div>
        <div>
          <label>Phone Number: </label>
          <br />
          <input type="text" name="name" />
        </div>
        <div>
          <label>Country: </label>
          <br />
          <input type="text" name="name" />
        </div>
      </div>
      <div className="message">
        <label>Message: </label>
        <textarea
          rows="5"
          placeholder="Type here whatever you want to share..."
        ></textarea>
      </div>
      <button className="button">
        <span>Send </span>
      </button>
    </form>
  );
};

export default Form;
