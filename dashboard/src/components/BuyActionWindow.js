import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, stockPrice }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const orderValue = stockQuantity * stockPrice;

  const handleQuantityChange = (e) => {
    setStockQuantity(Number(e.target.value));
  };

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: orderValue,
      mode: "BUY",
    });

    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={handleQuantityChange}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={orderValue.toFixed(2)}
              disabled
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required &#8377;{orderValue.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
