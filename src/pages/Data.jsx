import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./data.css";

export default function Data() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    Papa.parse("/data/spindle_data.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
        setColumns(Object.keys(result.data[0] || {}));
      },
    });
  }, []);

  return (
    <div className="data-page">
      <h2 className="page-title">Machine Data Records</h2>
      <p className="page-subtitle">Loaded {data.length} rows from CSV</p>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
