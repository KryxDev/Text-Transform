import React, { useState } from "react";

export default function TextBox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handlefindChange = (event) => {
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
    console.log(replaceWord(event.target.value));
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
    props.showAlert(`${fWord} is replace by ${rWord} `, "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copy To Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Have Been Removed", "success");
  };
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");
  return (
    <>
      <div>
        <h2 className="my-3">{props.heading}</h2>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            value={text}
            placeholder="Enter Your Text Here"
            style={{
              backgroundColor: props.mode === "light" ? "#343a40" : "white",
              color: props.mode === "light" ? "white" : "black",
            }}
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <h4 className="my-3">Replace Word</h4>
        <textarea
          value={fWord}
          onChange={handlefindChange}
          style={{
            backgroundColor: props.mode === "light" ? "#343a40" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          placeholder="find"
          className="form-control my-2"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
        <textarea
          value={rWord}
          onChange={handleReplaceChange}
          style={{
            backgroundColor: props.mode === "light" ? "#343a40" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          placeholder="replace"
          className="form-control my-2"
          id="exampleFormControlTextarea1"
          rows="1"
        ></textarea>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success my-2"
          onClick={handleReplaceClick}
        >
          Replace Words
        </button>
      </div>
      <h2 className="my-3">Your Text Summary</h2>
      <p>
        {text.length > 0
          ? text
              .trim()
              .split(" ")
              .filter((elem) => {
                return elem.length !== 0;
              }).length
          : 0}{" "}
        Words {text.length} Characters
      </p>
      <p>
        {0.008 *
          text.split(" ").filter((elem) => {
            return elem.length !== 0;
          }).length}{" "}
        Minutes Read
      </p>
      <h2 className="my-3"> Preview </h2>
      <p>{text}</p>
    </>
  );
}
