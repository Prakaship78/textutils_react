import React, { useState } from "react";

export default function TextForm(props) {
  const changeToUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const changeToLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3">
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            placeholder="Enter Your text here"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={changeToUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={changeToLoCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my3">
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Text Summary
        </h1>
        <h4
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {text.split(" ").length} words and {text.length} characters.
        </h4>
      </div>
    </>
  );
}
