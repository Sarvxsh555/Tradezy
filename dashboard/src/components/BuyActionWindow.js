import React, { useContext, useState } from "react";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  return (
    <div className="buy-window-container">
      <div className="buy-window">
        <div className="buy-window-header">
          <h3>Buy {uid}</h3>
          <button type="button" onClick={closeBuyWindow} aria-label="Close">
            x
          </button>
        </div>

        <div className="buy-window-fields">
          <label>
            Qty.
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          <label>
            Price
            <input
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>

        <div className="buy-window-actions">
          <button type="button" className="buy-window-primary">
            Buy
          </button>
          <button type="button" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
