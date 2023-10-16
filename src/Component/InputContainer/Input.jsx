import React, { useState } from "react";
import Arrow from "../../assets/icon-arrow.svg?react";
import "./input.scss";

const Input = ({ inputAddress, click }) => {
  const handleInput = (e) => {
    const value = e.target.value;
    inputAddress(value);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={handleInput}
      />
      <button onClick={click}>
        <Arrow />
      </button>
    </div>
  );
};

export default Input;
