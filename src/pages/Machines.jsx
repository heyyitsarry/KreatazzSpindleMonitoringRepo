import React, { useState } from "react";
import MachineDetailView from "../components/MachineDetailView";
import "./machines.css";

export default function Machines() {
  const [activeTab, setActiveTab] = useState("machines");
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machinesList = [
    { id: "SSB1080", name: "Spindle SSB1080", model: "HSK-A63", manufacturer: "Fischer", maxRPM: 24000, status: "healthy", assignedTo: "CNC Mill #1" },
    { id: "SSB1081", name: "Spindle SSB1081", model: "HSK-A100", manufacturer: "GMN", maxRPM: 18000, status: "warning", assignedTo: "CNC Lathe #2" },
    { id: "SSB1082", name: "Spindle SSB1082", model: "HSK-A80", manufacturer: "SKF", maxRPM: 17000, status: "healthy", assignedTo: "CNC Mill #3" },
  ];

  return (
    <div className="machines-page">
      {/* Machine Detail Modal */}
      {selectedMachine && (
        <MachineDetailView
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
        />
      )}

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
              <th>Machine ID</th>
              <th>Name</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Max RPM</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {machinesList.map((machine) => (
              <tr key={machine.id}>
                <td>
                  <span className="machine-id-badge">{machine.id}</span>
                </td>
                <td>
                  <button
                    className="machine-name-link"
                    onClick={() => setSelectedMachine(machine)}
                  >
                    {machine.name}
                  </button>
                </td>
                <td>{machine.model}</td>
                <td>{machine.manufacturer}</td>
                <td>{machine.maxRPM.toLocaleString()}</td>
                <td>
                  <span className={`status ${machine.status}`}>
                    {machine.status === "healthy" ? "Healthy" : machine.status === "warning" ? "Warning" : "Critical"}
                  </span>
                </td>
                <td>{machine.assignedTo}</td>
                <td className="actions">
                  <button
                    className="action-btn view-btn"
                    onClick={() => setSelectedMachine(machine)}
                    title="View Details"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn edit-btn" title="Edit">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button className="action-btn delete-btn" title="Delete">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
