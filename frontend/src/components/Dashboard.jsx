import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import "./Dashboard.css";

const Dashboard = ({ portfolio }) => {
  const totalValue = portfolio.reduce(
    (sum, stock) => sum + stock.quantity * stock.price,
    0
  );

  const data = portfolio.map((stock) => ({
    name: stock.name,
    value: stock.quantity * stock.price,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EEC"];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Portfolio Dashboard</h2>
      <p className="dashboard-value">
        Total Portfolio Value: <span>${totalValue.toFixed(2)}</span>
      </p>
      {data.length > 0 ? (
        <div className="chart-container">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      ) : (
        <p className="no-data">No data available to display the chart.</p>
      )}
    </div>
  );
};

export default Dashboard;
