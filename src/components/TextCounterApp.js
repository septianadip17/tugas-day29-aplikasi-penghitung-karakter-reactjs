import React, { useState } from "react";
import "../styles/TextCounterApp.css";

const TextCounterApp = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const characterCount = text.length;

  return (
    <div className="text-counter-container">
      <h1>Text Character Counter</h1>
      <textarea
        className="text-input"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p className="character-count">Character count: {characterCount}</p>
    </div>
  );
};

export default TextCounterApp;
