import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockTable from "./components/StockTable";
import "./App.css";

const App = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [editingStock, setEditingStock] = useState(null);

  const addOrUpdateStock = (stock) => {
    if (editingStock) {
      // Update existing stock
      setPortfolio((prevPortfolio) =>
        prevPortfolio.map((item) =>
          item.id === editingStock.id ? { ...stock, id: editingStock.id } : item
        )
      );
      setEditingStock(null); // Reset editing stock
    } else {
      // Add new stock
      setPortfolio((prevPortfolio) => [
        ...prevPortfolio,
        { ...stock, id: Date.now() },
      ]);
    }
  };

  const deleteStock = (id) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.id !== id)
    );
  };

  const editStock = (stock) => {
    setEditingStock(stock);
  };

  return (
    <div className="app">
      <h1>Portfolio Tracker</h1>
      <Dashboard portfolio={portfolio} />
      <StockForm onSubmit={addOrUpdateStock} editingStock={editingStock} />
      <StockTable stocks={portfolio} onEdit={editStock} onDelete={deleteStock} />
    </div>
  );
};

export default App;
