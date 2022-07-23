import "./Summary.css";
import React, { useState } from "react";

const Summary = (props) => {
  return (
    <div className="summary-container">
      <h2>Spensing Total</h2>
      <p className="total">
        <span>$</span>
        {props.amount}
      </p>
      <h2>Highest Spending</h2>
      <p className="highest">School</p>
    </div>
  );
};

export default Summary;
