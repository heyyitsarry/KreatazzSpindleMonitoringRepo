import React, { useState } from "react";
import "./machines.css"; // We will create this CSS file next

export default function Machines() {
  const [activeTab, setActiveTab] = useState("machines");

  return (
    <div className="machines-page">
      {/* Header */}
      <header className="main-header">
        <div>
          <h2>Machine Management</h2>
          <p>Manage your CNC machines and spindles</p>
        </div>

        <button className="btn-primary">
          <i className="fas fa-plus"></i> Add Spindle
        </button>
      </header>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-link ${activeTab === "machines" ? "active" : ""}`}
          onClick={() => setActiveTab("machines")}
        >
          Machines
        </button>

        <button
          className={`tab-link ${activeTab === "spindles" ? "active" : ""}`}
          onClick={() => setActiveTab("spindles")}
        >
          Spindles
        </button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Max RPM</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SP-2023-001</td>
              <td>HSK-A63</td>
              <td>Fischer</td>
              <td>24,000</td>
              <td>
                <span className="status healthy">Healthy</span>
              </td>
              <td>CNC Mill #1</td>
              <td className="actions">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-trash-alt"></i>
              </td>
            </tr>

            <tr>
              <td>SP-2023-002</td>
              <td>HSK-A100</td>
              <td>GMN</td>
              <td>16,000</td>
              <td>
                <span className="status warning">Warning</span>
              </td>
              <td>CNC Lathe #2</td>
              <td className="actions">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
