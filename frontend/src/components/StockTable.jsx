import React from 'react';
import './StockTable.css';

const StockTable = ({ stocks, onEdit, onDelete }) => {
    return (
        <div className="stock-table-container">
            <h3>Stock Holdings</h3>
            {stocks.length > 0 ? (
                <table className="stock-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ticker</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.ticker}</td>
                                <td>{stock.quantity}</td>
                                <td>${stock.price.toFixed(2)}</td>
                                <td>${(stock.quantity * stock.price).toFixed(2)}</td>
                                <td>
                                    <button 
                                        className="edit-btn" 
                                        onClick={() => onEdit(stock)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="delete-btn" 
                                        onClick={() => onDelete(stock.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-data-message">No stocks added yet. Start adding stocks to see your portfolio here!</p>
            )}
        </div>
    );
};

export default StockTable;
