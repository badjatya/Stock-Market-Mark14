import React, { useState } from "react";
import "./App.css";

import HomeImage from "./App/assets/img/Home.svg";

export default function App() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  // Submit
  const submitEventHandler = () => {
    if (purchasePrice > 0 && stockQuantity > 0 && currentPrice > 0) {
      if (purchasePrice > currentPrice) {
        const totalLoss = (
          (purchasePrice - currentPrice) *
          stockQuantity
        ).toFixed(2);
        const lossPercentage = (
          ((purchasePrice - currentPrice) * 100) /
          purchasePrice
        ).toFixed(2);

        var losses = `You lost ${lossPercentage}%, and Your total loss is ₹${totalLoss}`;
        setMessage(losses);
      } else {
        //total profit in cash
        const totalProfit = (
          (currentPrice - purchasePrice) *
          stockQuantity
        ).toFixed(2);
        //profit in percentage
        const profitPer = (
          ((currentPrice - purchasePrice) * 100) /
          purchasePrice
        ).toFixed(2);
        // profitPercentage(profitPer)
        var prof = `You gain ${profitPer}%, and Your total profit is ₹${totalProfit}`;
        setMessage(prof);
        setVisible(true);
      }
    }
  };

  // Reset
  const resetEventHandler = () => {
    setPurchasePrice("");
    setStockQuantity("");
    setCurrentPrice("");
    setMessage("");
    setVisible(false);
  };

  return (
    <div className="App">
      <div className="left-col">
        <h1>Welcome To Neog Stock Market Calculator</h1>
        <div className="inputContainer">
          <div>
            <input
              type="number"
              placeholder="Enter Stock Purchase Price"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Stock Quantity"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Current Stock Price"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <span onClick={visible ? resetEventHandler : submitEventHandler}>
            {visible ? "Reset" : "Check"}
          </span>
        </div>
        {visible && <p className="output">{message}</p>}
      </div>
      <div className="right-col">
        <img src={HomeImage} alt="HomeImage" />
      </div>
    </div>
  );
}
