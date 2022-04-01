import React, { useState } from "react";

export default function TextForm(props) {
  const changeToUpCase = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          //   placeholder="Enter Your text here"
          id="myBox"
          rows="5"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeToUpCase}>
        Convert to UpperCase
      </button>
    </div>
  );
}
