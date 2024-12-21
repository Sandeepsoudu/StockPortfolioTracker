import React, { useState, useEffect } from "react";
import "./StockForm.css";

const StockForm = ({ onSubmit, stockToEdit }) => {
  const [stock, setStock] = useState({
    name: "",
    ticker: "",
    quantity: 1,
    price: 0,
  });

  // Populate form fields when editing a stock
  useEffect(() => {
    if (stockToEdit) {
      setStock(stockToEdit);
    }
  }, [stockToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...stock,
      quantity: parseInt(stock.quantity, 10),
      price: parseFloat(stock.price),
    });
    setStock({ name: "", ticker: "", quantity: 1, price: 0 }); // Reset form after submission
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <h3>{stockToEdit ? "Edit Stock" : "Add Stock"}</h3>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Stock Name"
          value={stock.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="ticker"
          placeholder="Ticker"
          value={stock.ticker}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={stock.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="price"
          placeholder="Buy Price"
          value={stock.price}
          onChange={handleChange}
          step="0.01"
          min="0"
          required
        />
      </div>
      <button type="submit">
        {stockToEdit ? "Update Stock" : "Add Stock"}
      </button>
    </form>
  );
};

export default StockForm;
